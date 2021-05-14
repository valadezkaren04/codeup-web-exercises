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
//works with node lists

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

// NEW ES6 For.. of loop
// Structure
// for(variable of iterable/collection) {
//     statement
// }

// for(let eachPark of nationalParks) {
//     console.log(eachPark);
// }

// let listItems = document.getElementsByTagName('li');
// console.log(listItems);
//
// // can use const or let!
// for(const listItem of listItems) {
//     listItem.innerHTML += ' is an awesome park!';
// }

// ===== ARROW FUNCTIONS =====

// function test() {
//     return 'Hello from the test function!';
// }
//
// console.log(test());
//
// var test2 = function() {
//     return 'Hello from test2 function!'
// }
//
// console.log(test2())
//
// // ES6 way
//
// const test3 = () => 'Hello from test3 function!';
//
// console.log(test3())

// one parameter does not need parenthesis

// const sayHello = (name) => {
//     let nameInCaps = name.toUpperCase();
//     return nameInCaps
// }

// function sayHello(name) {
//     let nameInCaps = name.toUpperCase();
//     return nameInCaps;
// }

// multiple parameters will need to be in parenthesis
// const sayHello = (firstName, lastName) => {
//     let fullName = firstName.toUpperCase() + lastName.toUpperCase();
//     return fullName;
// }

// console.log(sayHello('Jay', 'Arredondo'))

// using an anonymous function expression
// nationalParks.forEach(park => {
//     let capsParks = park.toUpperCase();
//     console.log(capsParks);
// });

// ==== Default Function Parameter Values ====

// ES5 Syntax

// function add(num1, num2) {
//     if(num1 === undefined) {
//         num1 = 2;
//     }
//     if(num2 === undefined) {
//         num2 = 2;
//     }
//     return num1+ num2;
// }
//
// console.log(add());
// console.log(add(5))
// console.log(add(5,5))

// ES6 (better) way

// const add = (num1 = 2, num2 = 4) => {
//     return num1 + num2;
// }
//
// console.log(add());
// console.log(add(5));
// console.log(add(5,5));

// ===== Object Property Variable Assignment (shorthand) =====

// ES5 syntax

// var name = 'Loopy Trail';
// var distance = 4.6
// var difficulty = 'moderate';
// var isPaved = true

// var trail = {
//     name: name,
//     distance: distance,
//     difficulty: difficulty,
//     isPaved: isPaved
// }

// console.log(trail);

// ES6 (BETTER) Way

let name = 'Loopy Trail';
let distance = 4.6
let difficulty = 'moderate';
let isPaved = true

let trail = {
    name,
    distance,
    difficulty,
    isPaved
};
console.log(trail);

// ====== Object Destructuring ======

// ES5 Way

// let nameOfTrail = trail.name;
// let distanceOfLoopTrail = trail.distance;
//
// console.log(nameOfTrail);
// console.log(distanceOfLoopTrail);

// ES6 Way

let myObject = {
    movieName: 'The Incredibles',
    length: '1hr 43min'
}

let {movieName, length} = myObject;

console.log(movieName, length);

// ES5 function for object destructuring

// function describeTrail(trailObj) {
//     var name = trailObj.name;
//     var distance = trailObj.distance;
//
//     return name + " " + "is " + distance + "mi long";
// }

// console.log(describeTrail(trail))

let describeTrail = trailObj => {
    var {name, distance} = trailObj;
    return name + " " + "is " + distance + "mi long";

}
console.log(describeTrail(trail));



