"use strict";

//with es6, we can now calculate exponents with a double * operator instead of having to rely on the math object
// var oldWay = Math.pow(4, 2);
// console.log(oldWay);
//
// var newWay = 4 ** 2;
// console.log(newWay);

// var vs let vs const

//VAR: variables declared with var are function-scoped. That means that if a var is declared anywhere else besides the function using var, it will always exisst in the global scope.

//ex:
// for(var i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// i = "hello";
// console.log(i);
//
// if (i === "hello") {
//     var bubbles = "bububububububbles";
// }
// bubbles = "pop!"
// console.log(bubbles);
//
// function test() {
//     var logMe = "hello";
//     bubbles = "*floating*"
//     return logMe;
// }
// console.log(test());
// console.log(logMe);


//CONST: is block-scoped. This eans that the variable declared with conts cannot be redeclared or reassigned

//ex:
// const num = 4;
// console.log(num);
// num = 6; //const can't be reassigned
// console.log(num);
//
// const name = 'Jay';
// console.log(name + "Arredondo"); // will be able to console log concat if there's only one const name
// const name = 'David';
// console.log(name); // nothing will show up for both because it cannot be redeclared

// var name = "Jay";
// var name = "David";
// console.log(name); // David will show up because variables can be reassigned

//BLOCK_SCOPE: CONST
// var number = 5;
//
// if (number === 5) {
//     const cardNum = 123456789;
//     console.log(cardNum); // if number is inside of {} , it will appear in console
//}
//console.log(cardNum); //cannot be accessed because it is within the block scope; number is stuck inside and will not be found outside of {}

//LET: the let keyword lets you define variables that are block-scoped. As with variables declared with const, the variable with let cannot be declared.
//ex:
// let name = 'Jay';
// let name = 'Javier';
// console.log(name); //cannot be redeclared (use "let" again) but could be reassigned
// let name = 'Jay';
// name = 'Javier';
// console.log(name); // let is reassigned. Will log Javier instead of Jay

// function foo(n) {
//     if (n === 6) {
//         let num = 2;
//     }
//     console.log(num);
// }
// foo(6); // shows error b.c let is within if statement

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log("i outside of the loop", i); //this will log because it is within the for loop scope.

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log("i outside of the loop", i); //will throw error as well because it is within the for loop scope.

//TEMPLATE STRINGS:

// let name = 'Karen';
// console.log(`My name is ${name}`);
//
// console.log('My name is ' + name);
//
// console.log(`My name is ${name.toUpperCase() + ' Valadez'} in all caps!`);

let nationalParks = ["Grand Canyon", "Yellow Stone", "Alcatraz"];

let parkList = `<ul>
    <li>${nationalParks[0]}</li>
    <li>${nationalParks[1]}</li>
    <li>${nationalParks[2]}</li>
</ul>`
document.write(parkList); //writes the array list on the web

//for....of loop

//regular for loop
// for (let i = 0; i < nationalParks.length; i++) {
//     console.log(nationalParks[i]);
// }

//for each loop
// nationalParks.forEach(function(park, index) {
    // console.log(index); // 1 2 3
    // console.log(park); // name of park
    // console.log(park[index]); //G e c // G "'G'rand canyon = 1" , e "y'e'llow stone = 2 // c "al'c'atraz = 3rd letter
// })

