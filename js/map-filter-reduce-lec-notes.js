//array iteration methods

// .forEach()
// let output = "";
// let prices = [32.99, 21.99, 12.99, 10.99, 19.99, 8.98, 5.99];

// prices.forEach(function(item, index) {
    //console.log(item); //representation of the list of array // let item = 32.99 (etc.)
    // output = output + "<p>" + item + " is at index: " + index + "</p>";
    // $("#output").html(output); //put the outpur of the item in html // ex: 32.99 is at index: 0
// });

// prices.forEach(function(item, index) {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output = output + "<p>Item number: " + (index + 1) + ". Price: $" + item + ". Tax: $" + tax + ". Total: $" + total + "</p>";
//     $("#output").html(output); //html ex: Item number: 1. Price: $32.99. Tax: $2.72. Total: $35.71
// });

//template string
// prices.forEach( (item, index) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total $${total}</p>`;
//     $('#output').html(output); // html ex: Item number 1. Price: $32.99. Tax: $2.72. Total $35.71
// });

// .map() : it goes through all the array
//using the same let as above // .forEach and .map() both need instructions
// let output = "";
// let prices = [32.99, 21.99, 12.99, 10.99, 19.99, 8.98, 5.99];
// let pricesAfterTax = [];

// pricesAfterTax = prices.map(function(price) {
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });

// pricesAfterTax.forEach(function(item) {
//     output = output + "<p>" + item + "</p>";
//     $("#output").html(output);
// });
//*******************

// let things = ["book", "pencil", "marker", "eraser"];
// let pluralThings = things.map((thing, index) => {
//     if (index === 0) {
//         output = "<p>You must bring the following things: " + "</p>";
//     }
//     output += `<p>${thing}s</p>`;
//     $("#output").html(output); //replaces the pricesAfterTax.forEach due to output
// }); //this is using ES6 ^^

//this is es5:
// pluralThings.forEach(function(thing, index){
//     if (index === 0) {
//         output = "<p>You must bring the following items:</p>";
//         output = output + "<p>" + thing + "</p>";
//     }
//     output = output + "<p>" + thing + "</p>";
//     $("#output").html(output);
// });

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

// const mileages = cars.map(function(car) {
//     return car.mileage;
// });
//
// mileages.forEach(function(mileage) {
//     ouput = output + "<p>" + mileage + "</p>";
//     $("#output").html(output);
// });

//shorthand (index not included)
// const mileages = cars.map(car => car.mileage);
//
// mileages.forEach(mileage => {
//     output += `<p>${mileage}</p>`;
//     $('#output').html(output);
// });

// .filter()
// const under10K = cars.filter(function(car) {
//     return car.mileage < 10000;
// });
//
// under10K.forEach(function(car) {
//     output = output + "<p>I found a " + car.make + " " + car.model + " with " + car.mileage + " miles.</p>";
//     $("#output").html(output);
// });

let output = "";
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

var affordablesWithTax = prices.filter(function(price){
    return price < 10;
}).map(function(price){
    let tax = (price * 0.0825).toFixed(2);
    let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});

affordablesWithTax.forEach(function(itemPrice){
    output = output + "<p>" + itemPrice + "</p>";
    $("#output").html(output);
});
// .reduce() : takes a accumulator parameter
let totalCost = affordablesWithTax.reduce(function(total, itemPrice) {
    console.log(`The index is: ${index}, the total is: ${total}. the itemPrice is: ${itemPrice}.`);
    return total + itemPrice;
});
console.log(totalCost);

var averageCost = affordablesWithTax.reduce(function(total, itemPrice, index, array) {
    total = total + itemPrice;
    if (index === array.length() - 1) {
        return total/array.length;
    } else {
        return total;
    }
});
console.log(averageCost.toFixed(2));
