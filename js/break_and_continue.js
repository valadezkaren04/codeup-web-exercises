"use strict";
// var skippingNumber = 0;
// //console.log(skippingNumber);
// while (skippingNumber % 2 !== 1 || skippingNumber < 1 || skippingNumber) {
//     skippingNumber = parseFloat(prompt("Insert an ODD number from 1-50: "));
// }
// if (skippingNumber % 2 === 1) {
// not done ^^

}

// another example
var skipHere;
while (skipHere !== "Never going too equal to this,") {
    skipHere = parseFloat(prompt("insert an ODD number between 1-50: "));
    if (skipHere % 2 === 1) {
        console.log("Breaak!");
        break;
    }
}

console.log("Number to skip is " + skipHere);
console.log("");

for( var i = 1; i < 50; i+=2) {
    if (i === skipHere) {
        console.log("Yikes! Skipping this number: " + i);
    }
}

//while (isNaN(skippingNumber) || skippingNumber % 2 !== 1);