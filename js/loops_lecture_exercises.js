"use strict";

// LECTURE EXERCISES


// Using a while loop:
// - log all even numbers from 1 - 100
// – create a function that returns the square of a number then return all squares from 1 -10

var i = 1;

while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

function squareOfNumber(input) {
    return input * input;
}

while (i <= 10) {
    console.log(squareOfNumber(i));
    i++;
}

// Using a do-while loop:
// –    log “The number is <i>” for numbers 1-25
// –    subtract by 10 from 100 until you reach -50.

do {
    console.log('The number is ' + i);
    i++;
} while (i <= 25);


var x = 100;

do {
    console.log('Decremented ' + x);
    x -= 10;
} while (x >= -50);


for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}
//
// Fizz Buzz: log all numbers from 1 - 100
// –    if divisible by 3 log “Fizz"
// –    if divisible by 5 log “Buzz"
// –    if divisible by 3 and 5 log “FizzBuzz”
// –    else, log the current number


for (var i = 1; i < 10; i++) {
    console.log('for loop iteration #' + i);
}

var i = 1;


while (i <= 100) {
    if (i % 5) {
        console.log("Fizz");
    }

    if (i % 5) {
        console.log("Buzz");
    }

    if (i % 3 && i % 5) {
        console.log("FizzBuzz");
    }

    if (i === 100) {
        console.log('stop');
        break;
    } else {
        console.log(i);
    }

    i++;
}


for (var i = 1; i < 101; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else console.log(i);
}


