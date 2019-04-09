"use strict";

var userInput = prompt("Please input an odd number between 1 and 50");

for (var i = 1; i <= 50; i += 2) {

        if (userInput % 2 === 0) {
            prompt("Please enter a number.")
        } else if (i === Number(userInput)){
            console.log("Yikes! Skipping number: " + userInput)
            continue;
        } else {
            console.log('Here is an odd number: ' + i);
        }
}


