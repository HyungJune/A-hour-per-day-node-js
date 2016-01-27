# A-hour-per-day-node-js
Practice some examples of nodejs for myself. Fundamentally, should spend a hour per day 

It starts when I finish reading the section of websoket protocol and socket.IO module.

###Simple Echo Project
 * 16/01/27 Simple Echo Project starts
 * 16/01/27 Simple Echo Project finished

###Chat Project using Socket.io
 * 16/01/27 Chat Project using WebSocket starts

When I use the variant 'serverUrl' as localhost in the file 'public/chat.html',
it is not work.

    <html>
    <head>
    <meta charset="utf-8">
    <title>Chatting</title>
    ...
    <script>
      var roomlist = [];
      var serverUrl = 'http://localhost:3000';
      ...
    ...

It occurs the error in

    ...
    for(var i = 0; i < data[key].length; i++){
        if(data[key][i] == io.sockets[serverUrl].sessionid)
            myroom = true;
    }
    ...

To fix it, I use my own PC IP address and it works. I don't know why it occurs and it is caused.
