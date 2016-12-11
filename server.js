var app = require('./app');
var mqtt = require('mqtt');

var server = app.listen(3000, function() {
			console.log('BML now listening on port ' + server.address().port);
		});
var io = require('socket.io')(server);
var client = mqtt.connect('tcp://54.173.2.135:1883');

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
	 socket.on('strainIn', function(msg){
	   //console.log('message: ' + msg);
	   io.sockets.emit('strainOut', msg);
	 });
	});

client.on('connect', function () {
  client.subscribe('/sensor/#');
  client.publish('/sensor/status/', 'Start');
});
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  io.sockets.emit('mqtt',message.toString());
});

client.addListener('/sensor/json/', function(topic, payload){
  sys.puts(topic+'='+payload);
  io.sockets.emit('mqtt',{'topic':String(topic),
    'payload':String(payload)});
});

setInterval(function() {
			io.sockets.emit('time', new Date());
		}, 10);
