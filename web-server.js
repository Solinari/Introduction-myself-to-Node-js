//a web server example

var http = require('http');

var s = http.createServer(function(req, res) {
	// call back will be executed every time a request enters the server
	// different than a connection
	
	// header
	res.writeHead(200, {'content-type': 'text/plain' });
	
	// comment one of these out below
	
	// setTimeout version - 2nd demo
	// the transfer encoding is chucked
	// to send a variable length response
	res.write("hello\n");
	
	setTimeout(function() {
		res.end("world\n");
		}, 2000)
	
	// body 1st demo
	//res.end("hello world\n");
});

// bind to a port, can't do lower since not on root
// it's listening on a port
s.listen(8000);






