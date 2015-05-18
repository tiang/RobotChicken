'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var directionMatrix = {
    'n': { x: 0, y: 1 },
    'e': { x: 1, y: 0 },
    's': { x: 0, y: -1 },
    'w': { x: -1, y: 0 }
};

//todo: make this an iterator
var directionArray = ['n', 'e', 's', 'w'];

var Robot = (function () {
    function Robot(x, y, direction) {
        _classCallCheck(this, Robot);

        this.x = x;
        this.y = y;

        this.direction = direction.charAt(0);

        //console.log(directionMatrix);

        // check that direction is valid
        if (directionMatrix[this.direction] == undefined) {
            console.log('invalid constructor');
            throw 'invalid constructor';
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
            console.log(directionMatrix[this.direction]);
            this.y += directionMatrix[this.direction].y;
            this.x += directionMatrix[this.direction].x;
            console.log('x value ' + this.x);
            console.log('y value ' + this.y);
        }
    }, {
        key: 'right',
        value: function right() {
            console.log('turning right from ' + this.direction);
            var index = directionArray.indexOf(this.direction);
            this.direction = directionArray[(index + 1) % 4];
            console.log('new direction ' + this.direction);
        }
    }, {
        key: 'left',
        value: function left() {
            console.log('turning left from ' + this.direction);
            var index = directionArray.indexOf(this.direction);
            console.log('index' + index);
            if (index == 0) index = 3;else index--;
            this.direction = directionArray[index];
            console.log('new direction ' + this.direction);
        }
    }, {
        key: 'report',
        value: function report() {
            return { x: this.x, y: this.y };
        }
    }]);

    return Robot;
})();

module.exports = Robot;
