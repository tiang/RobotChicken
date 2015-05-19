var repl = require("repl");

// app specific modules
var app = require('../js/app.js');  
 
// open the repl session
var replServer = repl.start({
prompt: "My Robot Commander > ",
});

// attach my modules to the repl context
replServer.context.Robot = app.Robot;

replServer.context.myRobot = app.myRobot;

replServer.context.place =  function(x,y,d) {
	replServer.context.myRobot = new app.Robot(x,y,d);
	return replServer.context.myRobot
}

replServer.context.report = function() {
	if (replServer.context.myRobot)
		replServer.context.myRobot.report();
	return replServer.context.myRobot;
}

replServer.context.move = function() {
	if (replServer.context.myRobot)
		replServer.context.myRobot.move();
	return replServer.context.myRobot;
}

replServer.context.left = function() {
	if (replServer.context.myRobot)
		replServer.context.myRobot.left();
	return replServer.context.myRobot;
}

replServer.context.right = function() {
	if (replServer.context.myRobot)
		replServer.context.myRobot.right();
	return replServer.context.myRobot;
}
