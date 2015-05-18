'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Robot = (function () {
    function Robot(x, y, direction) {
        _classCallCheck(this, Robot);

        this.x = x;
        this.y = y;

        this.direction = direction.charAt(0);

        this.directionMatrix = {
            'n': { x: 0, y: 1 },
            'e': { x: 1, y: 0 },
            's': { x: 0, y: -1 },
            'w': { x: -1, y: 0 }
        };

        // check that direction is valid
        if (this.directionMatrix[this.direction] == undefined) {
            console.log('invalid constructor');
        }

        console.log();
    }

    _createClass(Robot, [{
        key: 'xCoordinate',
        get: function () {
            return this.x;
        }
    }, {
        key: 'move',
        value: function move() {
            console.log('moving');
            this.y += this.directionMatrix[this.direction].y;
            this.x += this.directionMatrix[this.direction].x;
            console.log('x value ' + this.x);
            console.log('y value ' + this.y);
        }
    }, {
        key: 'left',
        value: function left() {
            console.log('turning left');
        }
    }]);

    return Robot;
})();

var myRobot = new Robot(0, 1, 'north');
var myNobot = new Robot(0, 1, 'dfverywhere');
console.log(myRobot.x);
myRobot.move();
