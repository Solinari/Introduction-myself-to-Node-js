setTimeout(function() {
	console.log("world");
}, 2000)

console.log("hello");

// this displays world once and closes the process
// shows Node would exit when task is finished

// think about debugging the following
// this uses the V8 vim and we can step and pause
// look up node inspector. there is an eclipse plug-in for this

// function foo() {
	// debugger;
	// return 1 + 2;
	// }

// foo()	
