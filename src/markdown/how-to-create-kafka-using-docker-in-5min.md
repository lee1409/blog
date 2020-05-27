---
slug: "/post/create-real-time-streaming-data"
date: "2019-05-04"
title: "Create real-time streaming data (WebSocket) using Tornado"
---

This experiment I spent so much time on it finding the source and figuring out how Kafka works. Damnn...

I guess everyone already knew what Kafka is, so let's get into the installation step. Before that, there are some requirements needed before installing Kafka. This is just only development purposes. 

## Requirement

1. Docker is installed. 
2. Kafka CLI is downloaded (Here is the [link](https://www.apache.org/dyn/closer.cgi?path=/kafka/2.3.0/kafka_2.11-2.3.0.tgz))
3. docker-compose is download. 
4. Docker image required: zookeeper:latest and confluentinc/cp-kafka:5.3.0
5. Know basic docker command. (Explanation of docker cli is out of topic xD) 

## Objective

Build 3 brokers kafka using docker image

## Step 1: Build a Docker Compose. 

There are a few details on it. We will get into it later and explain why I suffer so much. 

Create a new directory. Then create a file called 'docker-compose.yml'. Inside here we need to write some configuration which we should define. At the same time create a network and bridge them together.  

<script src="https://gist.github.com/lee1409/136fa756d47957ee02e048cc667281fa.js"></script>

In this example, I created one zookeeper, 3 Kafka brokers and a network. To configure zookeeper, you can look at [zookeeper docs on docker hub](https://hub.docker.com/_/zookeeper). 

After that, we need to expose the port for each image and add 'depend_on' on all Kafka so that it is created after the zookeeper. For Kafka, we will expose 9021,9022, 9023 and bind to 9021 for kafka-1, kafka-2, kafka-3 respectively while for zookeeper will keep it 2181. Why 9021? We later define its listener on environment variables. 

<script src="https://gist.github.com/lee1409/b44e1b14995eabd9c349f6a9832add62.js"></script>

Define the listener... which I spent a lot of time searching on Stackoverflow. I hope you just need 5 minutes to understand. Listener is the stuff you set up on a specific IP to accept incoming connections. However, there are two types of listener you need to know: KAFKA_LISTENERS and KAFKA_ADVERTISED_LISTENERS. 

If you define KAFKA_LISTENERS, your Kafka will sit at specific IP, specific port you set to receive request. There are two listeners normally you need to define. One is external, another is internal. External is reserved for users that are from the outside container to send request while internal is used for Kafka to communicate with each other. 

Image: Chooseing listener to communicate

If you define KAFKA_ADVERTISED_LISTENERS, it is like a piece of paper consisting of guideline for users/brokers where they should connect with. Then the users/brokers will follow the guideline to find respective topics he wants. For detail explanation, view this [resources](https://rmoff.net/2018/08/02/kafka-listeners-explained/).

Therefore, we set up this on Kafka-1. 

We will allow kafka-1 to access incoming requests at 29092 port and 9021 port. One for internal and one for external. That's why we expose our 9021 port only. 

KAFKA_LISTENERS=INTERNAL://0.0.0.0:29092, EXTERNAL://0.0.0.0:9021	KAFKA_ADVERTISED_LISTENERS=INTERNAL://kafka-1:29092,EXTERNAL://localhost:9021	

KAFKA_LISTENER_SECURITY_PROTOCOL_MAP=INTERNAL:PLAINTEXT, EXTERNAL:PLAINTEXT   KAFKA_INTER_BROKER_LISTENER_NAME=INTERNAL

Notice, we set it 'localhost' because I only run it on my laptop. In case you want to run it on the cloud, you need to set public IP instead of just 'localhost'. This is because users will always receive this metadata (KAFKA_ADVERTISED_LISTENERS) before doing anything. If you set it 'localhost', it will map to your 127.0.0.1, where your kafka listener is not existed. 

For kafka-2 and 3, you need to set different and unique port (9022, 9023...). Otherwise, you will run into an error. Here is my complete setup example. 

<script src="https://gist.github.com/lee1409/ec88d002622cebbe9bc9095f1281734d.js"></script>

## Step 2: Test it out

That's it. You can try to run it on your directory.

```
docker-compose up -d
```

When every container is run successfully, you can play with kafka. 

**Create Topic**

Head towards your Kafka binary download folder, then run

```
./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
```

**Produce messages**

```
./bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
```

Send some messages.

**Consume message** 

Open new terminal, 

```
./bin/kafka-console-consumer.sh --bootstrap-server localhost:9023 --topic test --from-beginning
```

See your message pop out. 

If no error, then you successfully create Kafka. 😚

There are some errors I encountered while setting up Kafka. Unfortunately, I did not record them. 😓 
