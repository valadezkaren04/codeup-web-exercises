"use strict";

//05.24.21
/**
 *
 * Often in programming interviews, you may be asked to solve a problem called “FizzBuzz.” FizzBuzz is a test of your ability to
 * use conditional logic with a loop that counts up by one with every iteration. The challenge asks that you log the word “Fizz” if
 * a number is evenly divisible by 3, “Buzz” if a number is evenly divisible by 5, “FizzBuzz” if it is divisible by both 3 and 5,
 * and finally the number if it is not divisible by 3 or 5.
 *
 * This morning, I’d like you to write FizzBuzz in JavaScript using a for loop that goes until the number 30.
 *
 */
for (var i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Write a function in JS that returns the number 7

const returnSeven = () => 7;