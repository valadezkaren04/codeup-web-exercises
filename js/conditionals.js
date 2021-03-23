"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
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
function analyzeColor(colorName) {
    if(colorName === "blue") {
        return "blue is the color of the sky.";
    } else if (colorName === "red") {
        return "Strawberries are red.";
    } else if (colorName === "cyan") {
        return "I don't know anything about cyan.";
    } else {
        return "I...don't know anything about that color...";
    }
}
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch(randomColor) {
    case "blue":
        console.log("blue is the color of the sky.");
        break;
    case "red":
        console.log("strawberries are red.");
        break;
    case "cyan":
        console.log("I don't know anything about cyan.");
        break;
    default:
        console.log("Yeah...I got nothing for ya' about that color.");
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
randomColor = prompt("Input a random color...").toLowerCase();
switch(randomColor) {
    case "blue":
        alert("blue is the color of the sky.");
        break;
    case "red":
        alert("strawberries are red.");
        break;
    case "cyan":
        alert("I don't know anything about cyan.");
        break;
    default:
        alert("Yeah...I got nothing for ya' about that color.");
        break;
}

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
function calculateTotal(luckyNumber, totalAmount) {
    var amountBill;
    switch (luckyNumber) {
        case 0:
            amountBill = totalAmount
            console.log("Sorry, you have not discount. Your total is: $" + amountBill);
            break;
        case 1:
            amountBill = totalAmount - (totalAmount * .1)
            console.log("You have a 10% discount. Your total is: $" + amountBill);
            break;
        case 2:
            amountBill = totalAmount - (totalAmount * .25)
            console.log("You have a 25% discount. Your total is: $" + amountBill);
            break;
        case 3:
            amountBill = totalAmount - (totalAmount * .35)
            console.log("You have a 35% discount. Your total is: $" + amountBill);
            break;
        case 4:
            amountBill = totalAmount - (totalAmount * .50)
            console.log("You have a 50% discount. Your total is: $" + amountBill);
            break;
        case 5:
            amountBill = totalAmount - (totalAmount * 1)
            console.log("LUCKY WINNER! You have a 100% discount." + amountBill);
            break;
    }
    return amountBill;
}
console.log(calculateTotal(2, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var customerBill = parseFloat(prompt("What is your total bill?"));
var finalBill = calculateTotal(luckyNumber, customerBill);
alert("Your lucky, or not, number is: " + luckyNumber + ". Therefore, the price before the discount was: $" + customerBill + ". Your total now is: $" + finalBill);

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
 * HINT: The way we prompt for a value could be improved
 */
if (confirm("Would you like to enter a number?")) {
    var numberEntered = parseFloat(prompt("Enter a number..."));
    if (!isNaN(numberEntered)) {
        alert("That is not a number :c");
    } else {
        if (numberEntered % 2 !== 0) {
            alert("Your number is even");
        } else {
            alert("Your number is odd");
        }
        if (numberEntered > 0) {
            alert("Your number is positive");
        } else {
            alert("Your number is negative");
        }
        alert(numberEntered + 100 + " is the final number you get when you add 100.");
    }
} else {
    alert("Okay...whatever I guess...");
}

   // var input = prompt("Enter a number...") ?

