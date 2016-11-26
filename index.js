var express= require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/public')); //serving statics files like css, js, images

var port=process.env.PORT || 3000; //this is for heroku

app.get('/', function(req, res){

  res.sendFile(__dirname + '/index.html');

});
http.listen(port,function(){
    console.log('Escuchando en el puerto: '+port);//mensaje en consola 
});


var socketCount=0;//contador de conexiones al server

io.on('connection',function(socket){
		console.log('Usuario conectado...');
		socketCount++;
		//emitiendo mensaje a TODOS los socketsno usuarios conetados
		io.sockets.emit('usuario conectado',socketCount);

		socket.on('disconnect',function(){
			socketCount--;//decremento del contador
			console.log('Usuario Desconectado');//menaje en consola
			io.sockets.emit('usuario desconectado',socketCount);//mensaje a todos los sockets
		});
		
});//cierra conexion

