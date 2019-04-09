"use strict";

function showMultiplicationTable(input) {
    console.log(input * 1);
    console.log(input * 2);
    console.log(input * 3);
    console.log(input * 4);
    console.log(input * 5);
    console.log(input * 6);
    console.log(input * 7);
    console.log(input * 8);
    console.log(input * 9);
    console.log(input * 10);
}

showMultiplicationTable(7);

for (var randomMulti = Math.floor(Math.random() * 20) + 100; randomMulti <= 200; randomMulti++){
    if(randomMulti % 2 === 0) console.log(randomMulti + " is even");
    else if(randomMulti % 2 !== 0) console.log(randomMulti + " is odd");
    else if (randomMulti === 200) console.log('stop'); break;
}


for (var i = 1; i <= 999999999; i++){
    console.log(i);
    console.log(i * 22);
    console.log(i * 333);
    console.log(i * 4444);
    console.log(i * 55555);
    console.log(i * 666666);
    console.log(i * 7777777);
    console.log(i * 88888888);
    console.log(i * 999999999);

    if (i === 999999999) console.log("stop"); break;
}


for (var x = 100; x >= 5; x -= 5){
    console.log(x);
}


for(var i = 1; i < 101; i++){
    if(i % 15 === 0) console.log("FizzBuzz");
    else if(i % 5 === 0) console.log("Buzz");
    else if(i % 3 === 0) console.log("Fizz");
    else console.log(i);
}