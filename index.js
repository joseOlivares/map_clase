var express= require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/public')); //sirviendo archivos estaticos como  css, js, images

var port=process.env.PORT || 3000; //definiendo el puerto para heroku

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
}); 

http.listen(port,function(){
    console.log('Escuchando en el puerto: '+port);//mensaje en consola 
});
