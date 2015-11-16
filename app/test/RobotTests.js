var assert = require("assert"); 
var app = require('../js/app.js');
var Robot = app.Robot;
var Place = app.place;
var myRobot = app.myRobot;

describe('Robot', function(){
  	describe('TDD tests', function(){
	    it('constructor works', function(){
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
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'west';
	    	var myRobot = Place(xValue, yValue, directionValue);
		    assert.equal(myRobot.x, xValue);
		    assert.equal(myRobot.y, yValue);
		    assert.equal(myRobot.direction, 'w');
	    })
	    it('Push the robot off the table', function(){
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'north';
	    	var myRobot = Place(xValue, yValue, directionValue);
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
		    assert.equal(myRobot.x, xValue);
		    assert.equal(myRobot.y, 4);
		    assert.equal(myRobot.direction, 'n');
	    })
	   	it('Push the robot off the table bottom', function(){
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'south';
	    	var myRobot = Place(xValue, yValue, directionValue);
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
		    assert.equal(myRobot.x, 0);
		    assert.equal(myRobot.y, 0);
		    assert.equal(myRobot.direction, 's');
	    })
	   	it('Push the robot off the table right', function(){
	    	//console.log(Robot);
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'east';
	    	var myRobot = Place(xValue, yValue, directionValue);
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
		    assert.equal(myRobot.x, 4);
		    assert.equal(myRobot.y, 0);
		    assert.equal(myRobot.direction, 'e');
	    })
	   	it('Push the robot off the table left', function(){
	    	var xValue = 0;
	    	var yValue = 0;
	    	var directionValue = 'west';
	    	var myRobot = Place(xValue, yValue, directionValue);
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
	    	myRobot.move();
		    assert.equal(myRobot.x, 0);
		    assert.equal(myRobot.y, 0);
		    assert.equal(myRobot.direction, 'w');
	    })
	    it('Push the robot off the table at random', function(){
	    	var xValue = 3;
	    	var yValue = 3;
	    	var directionValue = 'north';
	    	var myRobot = Place(xValue, yValue, directionValue);
	    	myRobot.move();
    	 	myRobot.move();
	 	 	myRobot.move();
		    assert.equal(myRobot.x, 3);
		    assert.equal(myRobot.y, 4);
		    assert.equal(myRobot.direction, 'n');
	    })
	   	it('Move a robot that has not been placed', function(){
	    	var xValue = 3;
	    	var yValue = 3;
	    	var directionValue = 'north';
	    	var myRobot = Place(xValue, yValue, directionValue);
	    	myRobot.move();
    	 	myRobot.move();
	 	 	myRobot.move();
		    assert.equal(myRobot.x, 3);
		    assert.equal(myRobot.y, 4);
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
	    assert.equal(myRobot.x, 3);
	    assert.equal(myRobot.y, 3);
	    assert.equal(myRobot.direction, 'n');
	}) 
})