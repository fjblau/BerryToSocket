var app = require('./app');
var server = app.listen(3000, function() {
			console.log('BML now listening on port ' + server.address().port);
		});
var io = require('socket.io')(server);

io.on('connection', function(socket){
	 socket.on('berry', function(msg){
	   //console.log('message: ' + msg);
	   io.sockets.emit('newdata', msg);
	 });
	});

setInterval(function() {
			io.sockets.emit('time', new Date());
		}, 1000);
