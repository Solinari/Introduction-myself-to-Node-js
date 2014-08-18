// tcp server. 

// 'net' is where the tcp stuff lives
var net = require('net')

// tcp you just have sockets

// in tcp every time someone connects to a server you assign a socket
// then bind that server to a port
var server = net.createServer(function(socket) {
	
	// writing data
	socket.write('hello\n');
	socket.write('world\n');
	
	// receiving data
	// every time packet arrives on that socket: do something
	// seems like an echo server?
	
	// this doesn't work for me
	socket.on('data', function(data) {
		socket.write(data);
	});
});

server.listen(8000);