var robot = (function () {
    var X = 0
    var Y = 0
    var F = "North"

    var place = function (x, y, f) {
        debugger;
        console.log('setting new coordinates');
        this.coordinates = { x: 0, y: 0, f: "North" };
        console.log(robot);
        return robot;
    }

    var report = function () {
    }

    var move = function (x, y) {
        console.log()
    }

    return {
        giveCommand: function (commandString) {
            var command = commandString.split(" ")[0].toLowerCase()
            if (command == null) {
                console.log("Invalid command");
            }
            switch (command) {
                case "place":
                    place();
                    break;
                case "move":

                    break;
                case "left":

                    break;
                case "right":

                    break;
                case "report":

                    break;
                default:
                    console.log("Invalid command");
            }

        }
    };
}());