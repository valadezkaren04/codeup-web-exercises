"use strict";

function identity(input) {
    return input;
}
console.log(identity("Dean Winchester"));

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomNumber(14, 24));

// function first(input) {
//     return input.
// }
function reverse(input){
   if