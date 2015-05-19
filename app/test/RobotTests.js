var assert = require("assert"); 
var app = require('../js/app.js');
var Robot = app.Robot;
var Place = app.place;
var myRobot = app.myRobot;



describe('Robot', function(){
  	describe('TDD tests', function(){
	    it('constructor works', function(){
	    	//console.log(Robot);
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'north';
			var myRobot = new Robot(xValue, yValue, directionValue);
			console.log(myRobot.direction);
		    assert.equal(myRobot.direction, 'n');
		    assert.equal(myRobot.x, xValue);
	  		assert.equal(myRobot.y, yValue);

	    })
	    it('Robot Moves left', function(){
	    	//console.log(Robot);
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'north';
			var myRobot = new Robot(xValue, yValue, directionValue);
			myRobot.left();
		    assert.equal(myRobot.direction, 'w');
			myRobot.left();
		    assert.equal(myRobot.direction, 's');
			myRobot.left();
		    assert.equal(myRobot.direction, 'e');
			myRobot.left();
		    assert.equal(myRobot.direction, 'n');
			myRobot.left();
		    assert.equal(myRobot.direction, 'w');
	    })
	    it('Robot Moves right', function(){
	    	//console.log(Robot);
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'west';
			var myRobot = new Robot(xValue, yValue, directionValue);
			myRobot.right();
		    assert.equal(myRobot.direction, 'n');
			myRobot.right();
		    assert.equal(myRobot.direction, 'e');
			myRobot.right();
		    assert.equal(myRobot.direction, 's');
			myRobot.right();
		    assert.equal(myRobot.direction, 'w');
			myRobot.right();
		    assert.equal(myRobot.direction, 'n');
	    })
	    it('Place Robot', function(){
	    	//console.log(Robot);
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'west';
	    	var myRobot = Place(xValue, yValue, directionValue);
		    //console.log(myRobot.report());
		    assert.equal(myRobot.x, xValue);
		    assert.equal(myRobot.y, yValue);
		    assert.equal(myRobot.direction, 'w');
	    })
	    it('Push the robot off the table', function(){
	    	//console.log(Robot);
	    	var xValue = 4;
	    	var yValue = 4;
	    	var directionValue = 'north';
	    	var myRobot = Place(xValue, yValue, directionValue);
	    	myRobot.move();
		    //console.log(myRobot.report());
		    assert.equal(myRobot.x, xValue);
		    assert.equal(myRobot.y, yValue);
		    assert.equal(myRobot.direction, 'n');
	    })
  	})
});  

describe('Tests from example', function() {
	it('Example A', function() {
		var xValue = 0;
    	var yValue = 0;
    	var directionValue = 'north';
    	var myRobot = Place(xValue, yValue, directionValue);
    	myRobot.move();
    	myRobot.report()
	    //console.log(myRobot.report());
	    assert.equal(myRobot.x, 0);
	    assert.equal(myRobot.y, 1);
	    assert.equal(myRobot.direction, 'n');
	}) 
	it('Example B', function() {
		var xValue = 0;
    	var yValue = 0;
    	var directionValue = 'north';
    	var myRobot = Place(xValue, yValue, directionValue);
    	myRobot.left();
    	myRobot.report()
	    //console.log(myRobot.report());
	    assert.equal(myRobot.x, 0);
	    assert.equal(myRobot.y, 0);
	    assert.equal(myRobot.direction, 'w');
	}) 
	it('Example C', function() {
		var xValue = 1;
    	var yValue = 2;
    	var directionValue = 'east';
    	var myRobot = Place(xValue, yValue, directionValue);
    	myRobot.move();
    	myRobot.move();
    	myRobot.left();
    	myRobot.move();
    	myRobot.report();
	    //console.log(myRobot.report());
	    assert.equal(myRobot.x, 3);
	    assert.equal(myRobot.y, 3);
	    assert.equal(myRobot.direction, 'n');
	}) 
})