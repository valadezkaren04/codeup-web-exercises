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


//write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

function takesNum(num) {
    if (typeof num === "number") {
        return num * 5;
    } else {
        return 0;
    }
}
console.log(5);

// In a breakout room, discuss the following questions:

//     What is the difference between a .java file and .class file?
//     A .class file is a compiled .java file.
//         .java is all text and is human readable.
//         .class is binary (usually).

//     Why does Java have multiple data types? Why use one over the other?
        // Java is a bit more strict than those languages, and everything you write is first compiled to what is called byte code, which is sort of like assembly language, but it can only be read by the Java Virtual Machine (JVM). Because of this, you must specify exactly how many bits you need to represent your data.

//     What is the difference between a JRE and a JDK?
    // JDK is a software development kit whereas JRE is a software bundle that allows Java program to run