
// an example of setting multiple intervals
// these are not handled in separate threads
// this is a non blocking style of coding
// Node.js is the first system that does this

setInterval(function() {
	console.log("world.");
}, 5000)

console.log("Hello\n");

var http = require('http')

setInterval(function() {
	console.log("fetching google.com");
	
	// http.get in Node.js
	// res == response
	http.get({ host: 'google.com' }, function(res) {
		console.log(res.headers);
	});

}, 2000)

console.log("hello");

var s = http.Server(function (req, res) {
	res.writeHead(200);
	setTimeout(function() {
		res.end("hello world\n");
	}, 1000);
})

s.listen(8000);

// contrived example of httpGet that isn't real code
// but shows how you don't need infinite indentation levels
// to host callback functions to a database

//function afterDB1(dbres, cb) {
//	db2.query(dbres[1], function(db2) {
// 		afterDB2(db2res, cb);
//	});
//}

//function afterDB2(db2res) {
//	cb();
//}

//function afterHttpRequest(res, cb) {
//	db.query(res.headers['cookie'], function(dbres) {
// 		afterDB1(dbes, cd);
//	});
//}
//function get(cb) {
//	http.get(..., function(res) {
//		afterHttpRequest(res, cb);
//	});