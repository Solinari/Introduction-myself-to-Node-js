// chat server in Node.js
// the require() stuff is node, the functions and array stuff is javascript

net = require('net');

// empty array to keep people who connect to the server
var sockets = [];

// whenever someone sends a message, it will be written to every socket
var s = net.Server(function(socket) {
	sockets.push(socket);
	
	socket.on('data', function(d) {
		for (var i = 0; i < sockets.length; i++) {
			// don't send messages to yourself
			if (sockets[i] == socket) continue;
			sockets[i].write(d);
		}
	});
	
	// end and close are termination events
	socket.on('end', function() {
		var i = sockets.indexOf(socket);
		// removes an element from an array at an index i
		// can also use sockets.delete(i, 1);
		sockets.splice(i, 1);
	});
});

s.listen(8000);