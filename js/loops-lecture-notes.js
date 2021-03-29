"use strict";
//pizza slice loop
var slices = 8;
while (slices > 0) {
    console.log("I'll have a slice!");
    slices = slices -1;
    console.log("Now there's " + slices + " slices left!");
}
// pizza loop turned into a math loop example
var counter = 20;
while (counter >= 0) {
    console.log(counter);
    counter = counter -1;
}

//pseudocode

// pseudocode being used in the example below
var priceOfItem = parseFloat(prompt("Enter the price of your first item."));
alert("The price of your item was " + priceOfItem);
var totalCost = priceOfItem;
var userInput = "";
//create a sentinel value
while(userInput !== "STOP" ) {
    userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");
    if (userInput === "STOP") {
        alert("OK. Your final total is " + totalCost);
    } else {
        priceOfItem = parseFloat(userInput);
        totalCost = totalCost + priceOfItem;
        alert("Your total now " + totalCost.toFixed(2));
    }
}


// do while loop

var number = Math.floor(Math.random() * 6) + 1;
var guess;

do {
    guess = parseInt(prompt("Enter a number between 1 and 6"));
} while (guess !== number);

alert("Your guess of " + guess + " matches the number " + number + "!");



// For Loops

// var count = 0;
// while(count <= 0) {
//     console.log(count)
//     count = count + 1;
// }
// turning while into for loop

for (var count = 0; count <= 100; count = count + 1) {
    console.log(count);
}

for (var i = 0; i <= 100; i++) {
    console.log(i);
}


// Break and continue

var string = "";
for(var i = 0; i < 0; i++) {
    var word = prompt("Let's make a sentence!");
    if (word === "curses") {
        console.log("This is a respectable program! >:c");
        break;
    }
    string = string + "" + word;
    console.log("Your sentence is: " + string);
}