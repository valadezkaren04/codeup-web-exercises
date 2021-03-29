"use strict";

//2
// function showMultiplicationTable(num) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(num + " * " + i + " = " + num * i);
//     }
// }
// showMultiplicationTable(7);


//3
// for (var i = 1; i < 10; i++) {
//     var number = (Math.floor(Math.floor() * 181) + 20);
//     console.log(number);
//     if (random % 2 === 0) {
//         console.log(random + "is even.");
//     } else {
//         console.log(random + "is odd.");
//     }
// }

//another way for exercise 3
// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// var random, evenOddString;
// for (var i = 0; i < 10; i++) {
//     random = randomIntFromInterval(20, 200);
//     evenOddString = (random % 2 === 0);
//     console.log(random + " is evenOddString");
// }


//4 (pyramid for loop)

// for (var i = 1; i < 10; i++) {
//     //console.log(i);
//     var iString = i + ""
//    // console.log(iString);
//    // if (i === 1) {
//     //    console.log(iString);
//     //}  else {
//         while (i > iString.length) {
//             iString = i + iString;
//             //console.log(iString);
//         }
//     //}
//     console.log(iString);
// }

// pyramid for loop exercise walk-through (trouble-shooting)
// for(var x = 1; x < 10; x++) {
//     var number = x;
// }
//var number = 3;
// var stringNumber = number.toString();
//console.log(stringNumber);
// var count = 0;
// var outputString = "";
// while(count < number) {
//     outputString = outputString + number.toString();
//     //stringNumber = stringNumber + stringNumber;
//     count = count + 1;
// }
// console.log(outputString);

// string = ""
// take a string (3)
// concat. the strings (3)
// concat. the string to itself (33)
// store it in a variable (33)
// concat.


//5 (countdown from 100 to 5)

for(var i = 100; i <= 0; i = i - 5) {
    console.log(i);
}