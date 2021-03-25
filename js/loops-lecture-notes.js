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
