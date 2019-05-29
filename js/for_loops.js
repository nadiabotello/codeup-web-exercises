"use strict";

// function showMultiplicationTable(input) {
//     console.log(input * 1);
//     console.log(input * 2);
//     console.log(input * 3);
//     console.log(input * 4);
//     console.log(input * 5);
//     console.log(input * 6);
//     console.log(input * 7);
//     console.log(input * 8);
//     console.log(input * 9);
//     console.log(input * 10);
// }

// showMultiplicationTable(7);

// walk-through example

function outputRow(num1, num2) {
    var output = "";
    var total = num1 * num2;
    output += num1 + " x " + num2 + " = " + total;
    return output;
}

function showMultiplicationTable(num) {
    var output = "";
    for (var i = 1; i <= 10; i += 1) {
        output += outputRow(num, i) + "\n";
    }
    return output;
}


// for (var randomMulti = Math.floor(Math.random() * 20) + 100; randomMulti <= 200; randomMulti++){
//     if(randomMulti % 2 === 0) console.log(randomMulti + " is even");
//     else if(randomMulti % 2 !== 0) console.log(randomMulti + " is odd");
//     else if (randomMulti === 200) console.log('stop'); break;
// }


// walk-through example
// use RETURNS instead of console.logs within functions so it's returning values

function returnRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEvenOdd(num) {
    var outputMessage = num;
    outputMessage += (num % 2 === 0) ? " is even" : " is odd";
    console.log(outputMessage);
}

function evenOddCalculator() {
    for (var i = 1; i <= 10; i += 1) {
        var randNum = returnRandomNum(20, 200);
        var result = isEvenOdd(randNum);
    }
    return result;
}


//
// for (var i = 1; i <= 999999999; i++){
//     console.log(i);
//     console.log(i * 22);
//     console.log(i * 333);
//     console.log(i * 4444);
//     console.log(i * 55555);
//     console.log(i * 666666);
//     console.log(i * 7777777);
//     console.log(i * 88888888);
//     console.log(i * 999999999);
//
//     if (i === 999999999) console.log("stop"); break;
// }

// walk-through example

for (var i = 1; i < 10; i += 1) {
    console.log(String(i).repeat(i));
}

// nested for loop

for (var i = 1; i < 10; i += 1) {
    var output = "";
    for (var j = 1; j <= i; j += 1) {
        output += "i";
    }
    console.log(output);
}


for (var x = 100; x >= 5; x -= 5) {
    console.log(x);
}


for (var i = 1; i < 101; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else console.log(i);
}