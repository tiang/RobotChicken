// cute little 2d matrix to add increment direction
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var directionMatrix = {
    'n': { x: 0, y: 1 },
    'e': { x: 1, y: 0 },
    's': { x: 0, y: -1 },
    'w': { x: -1, y: 0 }
};

var directionArray = ['n', 'e', 's', 'w'];
var maxY = 5;
var maxX = 5;

var Robot = (function () {
    function Robot() {
        var x = arguments[0] === undefined ? 0 : arguments[0];
        var y = arguments[1] === undefined ? 0 : arguments[1];
        var direction = arguments[2] === undefined ? 'n' : arguments[2];

        _classCallCheck(this, Robot);

        this.x = x;
        this.y = y;

        this.direction = direction.charAt(0);

        this.debug = false; // log to console if true
        //console.log(directionMatrix);

        // check that direction is valid
        if (directionMatrix[this.direction] == undefined) {
            console.log('invalid constructor');
            throw 'invalid constructor';
        }
    }

    _createClass(Robot, [{
        key: 'place',
        value: function place(_ref) {
            var _ref$x = _ref.x;
            var x = _ref$x === undefined ? 0 : _ref$x;
            var _ref$y = _ref.y;
            var y = _ref$y === undefined ? 0 : _ref$y;
            var _ref$direction = _ref.direction;
            var direction = _ref$direction === undefined ? 'n' : _ref$direction;

            this.x = x;
            this.y = y;
            this.direction = direction;
        }
    }, {
        key: 'move',
        value: function move() {
            this.log('moving');
            this.log(directionMatrix[this.direction]);
            // array starts at zero, so max# - 1
            if (this.y + directionMatrix[this.direction].y >= maxY || this.x + directionMatrix[this.direction].x >= maxX || this.y + directionMatrix[this.direction].y < 0 || this.x + directionMatrix[this.direction].x < 0) {
                this.log('falling off the table...not moving');
                return;
            }
            this.y += directionMatrix[this.direction].y;
            this.x += directionMatrix[this.direction].x;
            this.log('x value ' + this.x);
            this.log('y value ' + this.y);
        }
    }, {
        key: 'right',
        value: function right() {
            this.log('turning right from ' + this.direction);
            var index = directionArray.indexOf(this.direction);
            this.direction = directionArray[(index + 1) % 4];
            this.log('new direction ' + this.direction);
        }
    }, {
        key: 'left',
        value: function left() {
            this.log('turning left from ' + this.direction);
            var index = directionArray.indexOf(this.direction);
            if (index == 0) index = directionArray.length - 1;else index--;
            this.direction = directionArray[index];
            this.log('new direction ' + this.direction);
        }
    }, {
        key: 'report',
        value: function report() {
            return { x: this.x, y: this.y, direction: this.direction };
        }
    }, {
        key: 'log',
        value: function log(_x) {
            if (this.debug == true) console.log(_x);
        }
    }]);

    return Robot;
})();

var myRobot;
// basically a wrapper for the robot object constructor as per instructions
var place = function place(x, y, d) {
    myRobot = new Robot(x, y, d);return myRobot;
};

module.exports = { Robot: Robot, place: place, myRobot: myRobot };
