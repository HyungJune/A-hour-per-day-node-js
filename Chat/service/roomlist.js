app.get('/roomlist',function(req,res){
  res.send(io.sockets.adapter.rooms);
});
