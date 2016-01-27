var express = require('express');
var app = express();
var server = require('http').createServer(app);

var io = require('socket.io').listen(server);

var fs = require('fs');
var path = require('path');

app.set('port', 3000);

app.use(express.favicon());

/* To read post body data when it receives post transmmision */
app.use(express.bodyParser());

/* route setting for static file services */
app.use(express.static(path.join(__dirname, 'public')));

/* start server */
app.start = app.lisen = function(){
  return server.listen.apply(server, arguments)
}

app.start(app.get('port'), function(){
  console.log("Server start");
});

/* service file include fucntion */
function include(file_){
  with(global) {
    eval(fs.readFileSync(file_) + '');
  };
};

/* include config file */
include(__dirname + "/config/include.js")

/* include service file */
for(var i = 0; i < servicefile.length;i++){
  include(__dirname + "/service/" + servicefile[i]);
}

/* process all http request */
app.all('*', function(req, res, next){
  next();
});
