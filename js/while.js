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

// do while exercise (Ice Cream loop)

// var allCones = Math.floor(Math.random() * 50) + 50;
// var conesSold = Math.floor(Math.random() * 5) + 1;
// do {
//     console.log('There is are currently ' + allCones + " cone left.");
//     allCones = allCones - conesSold;
//     conesSold = Math.floor(Math.random() * 5) + 1;
//     console.log(allCones)
// } while (conesSold <= allCones);
// console.log("There are " + allCones + " left to buy.");

// another way of doing it

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//     allCones = allCones - conesSold
//     console.log(conesSold + " cones sold.");
//     console.log(allCones + " cones left.");
// } while (conesSold <= allCones);
// if(allCones === conesSold) {
//     console.log(conesSold + " cones sold.");
// } else if (allCones === 0) {
//     console.log("Yay! All cones were sold! (:");
// } else {
//     console.log("I don't have enough cones, I can sell " + allCones)
//}
var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log("I cant sell " + conesBought + ". I only have  " + allCones + " left sorry");
    } else {
        allCones = allCones - conesBought;
        console.log("Cones Sold " + conesBought + ". I have " + allCones + " left to sell");
    }
} while (allCones > 0);
console.log("YAY! I sold all the cones! (:");