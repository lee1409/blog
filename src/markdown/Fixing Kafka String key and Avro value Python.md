> confluent_kafka.avro.serializer.SerializerError: message does not start with magic byte
>
> 

Damn confluent-python... I faced a lot of challenges when trying to set up kafka thing. First, I encountered listener protocol mapping, then KSQL, and now even confluent-kafka. -.-

The story began when I tried to consume a topic that is processed using KSQL. I tried to raise question at [stackoverflow](https://stackoverflow.com/questions/57472853/kafka-message-does-not-start-with-magic-byte) but somehow I have to solve it myself. 

What is the problem. There is a problem occurred when you tried to use KSQL to create stream or table. Your key will be in STRING format whereas your value will be in AVRO format

```
ksql> describe extended API_TABLE;

Name                 : API_TABLE
Type                 : STREAM
Key field            : 
Key format           : STRING
Timestamp field      : CREATED_ON
Value format         : AVRO
```

So far, someone proposed a PR on this issue but the solution is not working for me. Why? Because I used god damn WINDOW TUMBLING when processing the data, which means I can't just copy it. This is my data. 

```
ksql> select * from api_table;
1565752903000 | api_metric_567 : Window{start=1565752800000 end=-} | 1565752800000 | 1
1565752923000 | api_metric_23  : Window{start=1565752800000 end=-} | 1565752800000 | 1
1565752925000 | api_metric_43 : Window{start=1565752800000 end=-}  | 1565752800000 | 1
1565752935000 | api_metric_54 : Window{start=1565752800000 end=-}  | 1565752800000 | 1
```

First column is rowtime, second column is my key, third and 4th column are my values. 

When I tried to use its code, the key cannot be decoded into utf-8 because it has binary data causing an error. Window{...} is the culprit. ><

There are two way to solve the problem. One is create a new topic that set value_format as json, second is do some little hack and abandon using the AvroConsumer. And I tried the second one. 

So I spent some time, figuring out what does those bytes means, and read some source code. Let's get started. Write this first. Copy~

```
from confluent_kafka import KafkaError
import io
from confluent_kafka import Consumer
from confluent_kafka.avro.serializer import SerializerError


consumer = Consumer({
    'bootstrap.servers': 'localhost:9021',
    'group.id': 'abcd'
})

consumer.subscribe(['API_TABLE'])

while True:
    try:
        msg = consumer.poll(10)
    except SerializerError as e:
        print("Message deserialization failed for {}: {}".format(msg, e))
        break

    if msg is None:
        continue

    if msg.error():
        print("AvroConsumer error: {}".format(msg.error()))
        continue

    print(msg.value())
```

So here's the thing. Please please do not use AvroConsumer. Wait for developers to solve the issue. (Write down date first... 14 August 2019)

When we try to poll the data, it will get the bytes for key and the bytes for value.

```
b'api_metric_24\x00\x00\x01l\x8fd"@' b'\x00\x00\x00\x00\x04\x02\x80\x89\xa1\xf6\x91[\x02\x02'
```

First row is msg.key(), 2nd row is value.key(). As you can see when you try to use window function, KSQL put serialised timestamp into your key and messed it up. However, we can see that if we split 'api_metric_24' and '\x00\x00\x01l\x8fd"@' out, we can get our key. Now look at the value. It starts to look little ughh...

According to [wire format](https://docs.confluent.io/current/schema-registry/serializer-formatter.html#wire-format), we can know that for 0 position bytes is magic bytes, 1st to 4th are schemaID, then 5... are data. 

Therefore, we need to pull out magic bytes and schema ID, check and call schema from our schema registry. We will use struct library to interpret these binary code. 

```
>>> import struct
>>> msg = b'\x00\x00\x00\x00\x04\x02\x80\x89\xa1\xf6\x91[\x02\x02'
>>> struct.unpack('>bI', msg[:5])
(0, 4)
```

Yeah!! We just pull out magic bytes and schema ID. Then we use ready-made functions from confluent-kafka. Some functions are still working as expected. 😉

```python
from confluent_kafka.avro.cached_schema_registry_client import CachedSchemaRegistryClient

register_client = CachedSchemaRegistryClient(url="http://localhost:8081")
```

We pull the schema using schemaID, then decode and read, then we have nice clean value we want. 😀

```python
from avro.io import BinaryDecoder, DatumReader

MAGIC_BYTES = 0

def unpack(payload):
    magic, schema_id = struct.unpack('>bi', payload[:5])

    # Get Schema registry
    # Avro value format
    if magic == MAGIC_BYTES:
        schema = register_client.get_by_id(schema_id)
        reader = DatumReader(schema)
        output = BinaryDecoder(io.BytesIO(payload[5:]))
        result = reader.read(output)
        return result
        
    # String key
    else:
        # Timestamp is inside my key
        return payload[:-8].decode()
```

Noted I just discarded the timestamp, because I had timestamp included in my values. But why -8? This was because KSQL encoded timestamp as `long long` type. Look at the [doc](https://docs.python.org/3.7/library/struct.html#format-characters) for reference.

If you too lazy to look at my explanation, just copy the code below. Feel free to adjust yourself. 

<script src="https://gist.github.com/lee1409/46025cf7d3a3cf8f2c898e40b4c4ed76.js"></script>