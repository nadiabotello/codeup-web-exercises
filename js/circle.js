(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * Math.pow(circle.radius, 2);
        },

        logInfo: function (doRounding) {
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            var output = 0;

            if (doRounding === true) {
                return console.log(Math.round(circle.getArea()));
            } else if (doRounding === false) {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
            }

            // var area = (doRounding) ? Math.round(this.getArea()) : this.getArea();
            //
            // console.log("Area of a circle with radius: " + this.radius)

        }
    };



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number is");
    circle.logInfo(true);

    console.log("=======================================================");

    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


})();
