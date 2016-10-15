var socket = io.connect('http://localhost:3000');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});

socket.on('changeSet', data => {
	console.log(board);
	board.position(data);
});