"use strict";
// var skippingNumber = 0;
// //console.log(skippingNumber);
// while (skippingNumber % 2 !== 1 || skippingNumber < 1 || skippingNumber) {
//     skippingNumber = parseFloat(prompt("Insert an ODD number from 1-50: "));
// }
// if (skippingNumber % 2 === 1) {
// not done ^^

//}
//var addNumber = parseInt(prompt("Choose an ODD number between 1-50: "));


var addNumber;
addNumber = parseInt(prompt("Choose an ODD number between 1-50: "));
while (true) {
    if (addNumber % 2 === 1 || (addNumber > 0 && addNumber < 50)) {
        break;
    }
}
for (var i = 1; i < 50; i+=) {

}
// another example
// var skipHere;
// while (skipHere !== "Never going too equal to this,") {
//     skipHere = parseFloat(prompt("insert an ODD number between 1-50: "));
//     if (skipHere % 2 === 1) {
//         console.log("Breaak!");
//         break;
//     }
// }
//
// console.log("Number to skip is " + skipHere);
// console.log("");
//
// for( var i = 1; i < 50; i+=2) {
//     if (i === skipHere) {
//         console.log("Yikes! Skipping this number: " + i);
//     }
// }

//while (isNaN(skippingNumber) || skippingNumber % 2 !== 1);