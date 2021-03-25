"use strict";
// while loop exercise
var num = 2;
while (num <= 65536) {
    console.log(num);
    num = num * 2;
}
// walk-through
// var num = prompt("What is your number?");
// var orgNumber = num;
// var exponent = 2;
// console.log(num);
// while (exponent <= 16) {
//     num = num * orgNumber;
//     console.log(orgNumber + " to the power of " + exponent + " = " + num); //could also use alert
//     exponent = exponent + 1
// }

// do while exercise

var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold = Math.floor(Math.random() * 5) + 1;
do {
    console.log('There is are currently ' + allCones + " cone left.");
    allCones = allCones - conesSold;
    conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(allCones)
} while (conesSold <= allCones);
console.log("There are " + allCones + " left to buy.");