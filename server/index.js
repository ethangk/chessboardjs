var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('view engine', 'pug');

app.use(express.static('static'));
app.use(express.static('../www'));

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/static/index.html');
});

app.get('/game/:id', function (req, res) {
  res.send('Hello World!' + req.params.id);
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });

  socket.on('change', data => {
  	console.log(data);
  	socket.broadcast.emit('changeSet', data);
  });
});