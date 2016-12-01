var app = require('./app');
var server = app.listen(3000, function() {
			console.log('BML now listening on port ' + server.address().port);
		});
var io = require('socket.io')(server);
require('tls').SLAB_BUFFER_SIZE = 100 * 1024 //100Kb

io.on('connection', function(socket){
	 socket.on('berry', function(msg){
	   //console.log('message: ' + msg);
	   io.sockets.emit('newdata', msg);
	 });
	 socket.on('ecgIn', function(msg){
	   //console.log('message: ' + msg);
	   io.sockets.emit('ecgOut', msg);
	 });
	});

setInterval(function() {
			io.sockets.emit('time', new Date());
		}, 10);
