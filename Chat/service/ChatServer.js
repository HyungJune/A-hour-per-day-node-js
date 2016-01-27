io.sockets.on('connection',function(socket){

	socket.on('roommake',function(data){

		socket.join(data.roomname);
		socket.set('room',data.roomname);
		socket.set('nickname',data.nickname);

		//message list get
		socket.get('nickname',function(err,name){
			io.sockets.emit('roomlist',{"roomdata":io.sockets.adapter.rooms,"clientid":socket.id,"nickname":name});
			socket.get("room",function(err,room){
				io.sockets.in(room).emit('intro',name);
			});
		});

	});

	//send maeesage
	socket.on('message',function(data){
		socket.get('nickname',function(err,name){
			socket.get('room',function(err,room){
				io.sockets.in(room).emit('message_send',{'msg':data.msg,'from':name});
			});
		});
	});

	socket.on('disconnect', function () {
		socket.get('nickname',function(err,nickname){
			socket.get('room',function(err,room){
				io.sockets.in(room).emit('message_send_disconnect',{'msg':'','from':nickname});
			});
		});
		io.sockets.emit('room_research',null);

	});

});
