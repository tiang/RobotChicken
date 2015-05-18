const directionMatrix = {
            'n': {x: 0, y: 1},
            'e': {x: 1, y: 0},
            's': {x: 0, y: -1},
            'w': {x: -1, y: 0}
        };

//todo: make this an iterator
const directionArray = ['n','e','s','w'];

class Robot
{
    
    constructor(x, y, direction)
    {
        this.x = x;
        this.y = y;
        
        this.direction = direction.charAt(0);

        //console.log(directionMatrix);

        // check that direction is valid
        if (directionMatrix[this.direction] == undefined)
        {
            console.log('invalid constructor');
            throw 'invalid constructor';
        }

        console.log()
    }

    get xCoordinate() {
        return this.x;
    }
    

    move() {
        console.log('moving');
        console.log(directionMatrix[this.direction])
        this.y += directionMatrix[this.direction].y
        this.x += directionMatrix[this.direction].x
        console.log('x value ' +this.x);
        console.log('y value ' +this.y);
    }

    right() {
        console.log('turning right from ' + this.direction);
        let index = directionArray.indexOf(this.direction);
        this.direction = directionArray[(index+1) % 4];
        console.log('new direction ' +this.direction);
    }

    left() {
        console.log('turning left from ' + this.direction);
        let index = directionArray.indexOf(this.direction);
        console.log('index' + index);
        if (index == 0)
            index = 3;
        else 
            index--;
        this.direction = directionArray[index];
        console.log('new direction ' + this.direction);
    }

    report() {
        return {x: this.x, y: this.y }
    }

}

module.exports  = Robot;

