// cute little 2d matrix to add increment direction
const directionMatrix = {
            'n': {x: 0, y: 1},
            'e': {x: 1, y: 0},
            's': {x: 0, y: -1},
            'w': {x: -1, y: 0}
        };

const directionArray = ['n','e','s','w'];
const maxY = 5;
const maxX = 5;

class Robot
{
    constructor(x = 0, y = 0, direction = 'n')
    {
        this.x = x;
        this.y = y;
        
        this.direction = direction.charAt(0);
        
        this.debug = false; // log to console if true
        //console.log(directionMatrix);

        // check that direction is valid
        if (directionMatrix[this.direction] == undefined)
        {
            console.log('invalid constructor');
            throw 'invalid constructor';
        }
    }

    place({x=0, y=0, direction='n'}) {
        this.x = x;
        this.y = y;
        this.direction = direction;   
    }

    move() {
        this.log('moving');
        this.log(directionMatrix[this.direction])
        // array starts at zero, so max# - 1
        if (this.y + directionMatrix[this.direction].y >= maxY 
            || this.x + directionMatrix[this.direction].x >= maxX
            || this.y + directionMatrix[this.direction].y  < 0
            || this.x + directionMatrix[this.direction].x < 0
            ) 
        {
            this.log('falling off the table...not moving');
            return;
        }
        this.y += directionMatrix[this.direction].y
        this.x += directionMatrix[this.direction].x
        this.log('x value ' +this.x);
        this.log('y value ' +this.y);
    }

    right() {
        this.log('turning right from ' + this.direction);
        let index = directionArray.indexOf(this.direction);
        this.direction = directionArray[(index+1) % 4];
        this.log('new direction ' +this.direction);
    }

    left() {
        this.log('turning left from ' + this.direction);
        let index = directionArray.indexOf(this.direction);
        if (index == 0)
            index = directionArray.length -1;
        else 
            index--;
        this.direction = directionArray[index];
        this.log('new direction ' + this.direction);
    }

    report() {
        return {x: this.x, y: this.y, direction: this.direction }
    }

    log(_x) {
        if (this.debug == true)
            console.log(_x);
    } 
    
}

var myRobot;
// basically a wrapper for the robot object constructor as per instructions
var place = (x,y,d) => { myRobot = new Robot(x,y,d); return myRobot;} 

module.exports  = {Robot, place, myRobot};

