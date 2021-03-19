"use strict";

console.log("Hello from external Javascript");
alert("Welcome to my Website! c:")

var favColor = prompt("What is your favorite color?");
alert("Awesome! " + favColor + " is my favorite color too! n.n");

//exercise 3 (previous lesson)
var mermaid = prompt("How many days did you rent The Little Mermaid for? ");
var bear = prompt("How many days did you rent Brother Bear for?");
var hercules = prompt("How many days did you rent Hercules for?");
var totalPay = (mermaid * 3) + (bear * 3) + (hercules * 3);
console.log(alert("Your total is $" + totalPay + " Enjoy your movies!"));

var google = prompt("How many hours did you work at Google this week?");
var amazon = prompt("How many hours did you work at Amazon this week?");
var facebook = prompt("how many hours did you work at Facebook this week?");
var workPay = (google * 400) + (amazon * 380) + (facebook * 350);
console.log(alert("Your total pay for this week is $" + workPay));

var classSize = confirm("Is the class full?");
var studentSchedule = confirm("Is the spot open in your schedule?");
var studentCanEnroll = classSize && studentSchedule
if (studentCanEnroll === true)
{alert("You may register for this class!")}
else {alert("Unable to register for this class.")}

var expired = confirm("Is the coupon expired?")
if (expired === false) {alert("Sorry,the offer is not valid.")}

var premiumMember = confirm("Are you a premium member?")
var amountItems = prompt("How many items did you purchase?")
if (amountItems >= 2 || premiumMember) {alert("Offer is valid.")}
else {alert ("Invalid offer.")}


