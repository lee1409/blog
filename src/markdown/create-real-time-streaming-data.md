---
slug: "/post/create-real-time-streaming-data"
date: "2019-05-04"
title: "Create real-time streaming data (WebSocket) using Tornado"
---

# Create real-time streaming data (WebSocket) using Tornado

Today learnt tornado to serve stream data to user. Tornado is python web framework, but it is interesting because it only runs a thread per process but still can serve many clients due to its asynchronous design. Wait, asynchronous? Actually there are many terminologies you need to know. 

Concurrency, asynchronous, future, callback, blocking... -.- But fuck it, I also not fully understand all of them. I will try to use a working office guy as an analogy to explain how things works and what mistake I had done. FYI, My explanation will be shallow and just to get your data streaming done. ✅ 

## Asynchronous + Concurrency = Hair loss

![img](https://admin.mlnotetaking.com/content/images/2019/08/you-know-what-hurts-more-than-breakup-hair-fall-14804245.png)

Imagine you are a busy office guy who loves to watch football. One day, there was a football match you do not want to miss during your working hour, and you were not allowed to watch it. So what should you do if you still want know the football score? You could open a Chrome tab displaying the football score. Every 10 minutes you refresh to read the latest result, minimize it, then continue your work. This sounds okay, but you still want real time! 

Therefore you have to hire someone called football watcher to constantly look at the football score for you. Whenever the score is updated, he/she will notify you. Then you can press F5 to refresh the tab and see the latest score. 

So if your code design follows the analogy, you will look at things easier. However you need to beware that these function must be non-blocking. What does it mean? It means you need to know that a function you run is not on the main thread.  Therefore, you need to realize that which thread is used to execute the function. The main thread (you yourself) or the small thread (football watcher) you created? There is a case if you run your main thread into an infinite while loop. Sometimes you may make yourself trouble into constantly asking for update instead of letting the watcher report the scores to you!

Alright, let's get to the coding part. Before that, we need to know how to create websocket using Tornado. Copy time! **Please** remember to install tornado on your library. (pip install tornado) 

<script src="https://gist.github.com/lee1409/c3c79f25264f41f00ee99acd319f7eca.js"></script>

We created a websocket server. We override some functions.

> open: executed when connection with client is establish. onmessage: executed when client send message checkorigin: disable CORS security for easy development

Then we create an app, bind a port then start IO event loop and that's it. 😀 

So how to hire a watcher? We need to use async/await to describe the process. Noted that async/await only supports python version >=3.4. 

So we create a while loop when client connection is established. However, we do not want the event loop to stuck inside the infinite loop, we somehow need to let it do the other logic task like accepting requests, manipulate data, etc. So, when we can let the event loop to run the other task? We can allow it when we create a background thread to handle the logic. When the background thread is completed, the event loop interrupts and continue the function ('open' method) again as soon as the background thread is completed. 

<script src="https://gist.github.com/lee1409/ba8309755a9b770ebf3a051226473b11.js"></script>

Therefore, if you open Chrome dev console (Press F12 then click 'console' tab). Type

```
socket = new WebSocket('ws://localhost:8888')
socket.onmessage = function(event) {
  console.log(event.data);
};
```

Then the data will automatically populate out. 

image
