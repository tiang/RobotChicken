class Robot
{
    
    constructor(x, y, direction)
    {
        this.x = x;
        this.y = y;
        
        this.direction = direction.charAt(0);

        this.directionMatrix = { 
            'n': {x: 0, y: 1},
            'e': {x: 1, y: 0},
            's': {x: 0, y: -1},
            'w': {x: -1, y: 0}
        };

        // check that direction is valid
        if (this.directionMatrix[this.direction] == undefined)
         {console.log('invalid constructor')}

        console.log()
    }

    get xCoordinate() {
        return this.x;
    }

    move() {
        console.log('moving');
        this.y += this.directionMatrix[this.direction].y
        this.x += this.directionMatrix[this.direction].x
        console.log('x value ' +this.x);
        console.log('y value ' +this.y);
    }

    left() {
        console.log('turning left');

    }

}

var myRobot = new Robot(0,1,'north');
var myNobot = new Robot(0,1,'dfverywhere');
console.log(myRobot.x);
myRobot.move();
