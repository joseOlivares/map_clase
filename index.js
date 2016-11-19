var express=require('express');
var app=express();
var http=require('http').server(app);
//usando socketio
var io=require('socket.io')(http);

app.use(express.static(__dirname + '/public')); //aqui ser serviran 
//archivo estaticos 

var port=process.env.PORT || 3000; //esto lo exige heroku

app.get('/',function(req,res){
	res.sendFile(__dirname +'/index.html'); //ruta pag index
});

http.listen(port,function(){
	console.log('Escuchando en el puerto: '+port);
});

