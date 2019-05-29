"use strict";


// 1.

console.log("Hello from external JavaScript");

// 2.

alert("Welcome to my website!");

var userInput = prompt("What is your favorite color?");
console.log('The user entered: ' + userInput);

alert("Great, " + userInput + " is my favorite color, too!");

// 3.

// word problems with numerical user input from prior lesson exercises

var littlemermaid = prompt("How many days have you rented Little Mermaid?");
Number("littlemermaid");
console.log(littlemermaid);

var brotherbear = prompt("How many days have you rented Brother Bear?");
Number("brotherbear");
console.log(brotherbear);

var hercules = prompt("How many days have you rented Hercules?");
Number("hercules");
console.log(hercules);

var dailyprice = prompt("What is the daily price of each rental?");
Number("dailyprice");
console.log(dailyprice);

var totalrentalprice = (littlemermaid * dailyprice) + (brotherbear * dailyprice) + (hercules * dailyprice);
console.log(totalrentalprice);

alert("You owe $" + totalrentalprice + " for your rentals.");


// word problem #2

var google = prompt("What is your Google daily rate?");
Number("google");
console.log(google);

var amazon = prompt("What is your Amazon daily rate?");
Number("amazon");
console.log(amazon);

var facebook = prompt("What is your Facebook daily rate?");
Number("facebook");
console.log(facebook);

var weeklygoogle = prompt("How many hours did you work for Google this week?");
Number("weeklygoogle");
console.log(weeklygoogle);

var weeklyamazon = prompt("How many hours did you work for Amazon this week?");
Number("weeklyamazon");
console.log(weeklyamazon);

var weeklyfacebook = prompt("How many hours did you work for Facebook this week?");
Number("weeklyfacebook");
console.log(weeklyfacebook);

var totalweek = (google * weeklygoogle) + (amazon * weeklyamazon) + (facebook * weeklyfacebook);
console.log(totalweek);

alert("You made $" + totalweek + " this week.");







