var assert = require("assert"); 
var Robot = require('../js/app.js');  

describe('Robot Movements', function(){
  describe('Left Turns', function(){
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
  })
});  

/*
	console.log(myRobot.x);
		myRobot.move();

		myRobot.left();
		myRobot.left();
		myRobot.left();
		myRobot.left();
	
		myRobot.direction



      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
*/