"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */


var enter = confirm("Would you like to enter a number?");

if (enter === true){}

var number = prompt("Please enter your number.");

function parityNumber(number) {
    if (number % 2 === 0) {
        return number + " is even.";
    } else {
        return number + " is odd.";
    }
}

console.log(parityNumber());
alert(number + " is " + parityNumber(number));


function add100(number) {
    return parseInt(100) + parseInt(number);
}

alert(number + " + 100 is " + add100(number));

function positiveNegative(number) {
    if (Math.sign(number) == 1) {
        return "positive";
    } else if (Math.sign(number) == -1) {
        return "negative";
    } else {
        return "neither positive nor negative";
    }
}

alert(number + " is " + positiveNegative(number));



        confirm("Would you like to enter a number?");
        console.log(confirm);
        var num = Number(prompt("Please enter your number."));

    //     // if (open) {
    //     //     var num = Number(prompt("Please enter your number."));
    //     //     console.log(num);
    //     // }
    //     //
    //     if (num % 2 == 0) {
    //         alert("Your number is even.");
    //         console.log(odd);
    //     } else {
    //         alert("Your number is odd".);
    //     }
    //     //
    //     if (odd) {
    //         var hundredPlus = 100 + +num;
    //         alert("Your number + 100 equals to " + hundredPlus);
    //         console.log(hundredPlus);
    //     }
    //     //
    //     if (hundredPlus) {
    //         var positive = true;
    //         alert("Your number is " + positive);
    //         console.log(positive);
    //     }
    // }
    //
    // else {
    //     alert("You did not enter a number.");
    //     console.log();
    // }

        // if (open) {
        //     var num = Number(prompt("Please enter your number."));
        //     console.log(num);
        //     }
        //     //
        // if (num) {
        //     var odd = true;
        //     alert("Your number is " + odd);
        //     console.log(odd);
        //     }
        //     //
        // if (odd) {
        //     var hundredPlus = 100 + +num;
        //     alert("Your number + 100 equals to " + hundredPlus);
        //     console.log(hundredPlus);
        //     }
        //     //
        // if (hundredPlus) {
        //     var positive = true;
        //     alert("Your number is " + positive);
        //     console.log(positive);
        //     }




/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

var color = prompt("Give a color");
console.log(color);

function analyzeColor(color) {
    if (color === "red") {
        return "Strawberries are red.";
    } else if (color === "blue") {
        return "Blue is color of the sky.";
    } else {
        return "Invalid color entry.";
    }
}

console.log(analyzeColor);



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(randomColor) {
    console.log(randomColor);}


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var color = prompt("Give a color");
console.log(color);

switch (color) {
    case "red":
        console.log("Strawberries are red.");
        break;
    case "blue":
        console.log("Blue is the color of the sky.");
        break;
    default:
        console.log("Invalid color entry.");
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


alert(analyzeColor(color));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(lucky, total) {
    switch (lucky) {
        case 0:
            return null;
            break;
        case 1:
            return total - (total * .10);
            break;
        case 2:
            return total - (total * .25);
            break;
        case 3:
            return total - (total * .35);
            break;
        case 4:
            return total - (total * .50);
            break;
        case 5:
            return total * 0;
            break;
        default:
            return null;
    }
}
console.log(calculateTotal());



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

var lucky = Math.floor(Math.random() * 6);

var total = prompt("What is the total?");
console.log(total);

alert("Your total is $" + total + ". " +
    "Your lucky number is " + lucky + ". Your new total is $" +
    (total - (calculateTotal(lucky, total))) +
    ".");
console.log();