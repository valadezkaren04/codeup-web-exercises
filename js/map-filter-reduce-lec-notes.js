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

// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];

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
// .reduce() : takes an accumulator parameter
let totalCost = affordablesWithTax.reduce(function(total, itemPrice) {
    console.log(`The index is: ${index}, the total is: ${total}. the itemPrice is: ${itemPrice}.`);
    return total + itemPrice;
});
console.log(totalCost);

// we pass an array parameter into the reduce method's function
var averageCost = affordablesWithTax.reduce(function(total, itemPrice, index, array) {
   // on each iteration, we add the itemPrice to the total
    total = total + itemPrice;
    // if it's our last iteration, we take our total that we just
    // calculated and we divide it by the total items in the array
    if (index === array.length() - 1) {
        return total/array.length;
        // every other iteration through the array, we just
        // pass it the total
    } else {
        return total;
    }
});
console.log(averageCost.toFixed(2));

totalCost = prices.reduce(function(total, price, index) {
    console.log(`The index is: ${index}, the total is : ${total.toFixed(2)}, the itemPrice is: ${price}.`)
    return total + price;
}, 158.76); //gives it a custom starting point
console.log(totalCost.toFixed(2)); // 253.68

const aesopAnimals = ["Ant", "Grasshopper", "Ape", "Fox", "Donkey", "Donkey", "Donkey", "Lion", "Fly", "Bear", "Beaver", "Blackbird", "Wolf", "Bull", "Lion", "Cat", "Mouse", "Crab", "Fox", "Rooster", "Rooster", "Dog", "Fox", "Crow", "Crow", "Sheep", "Crow", "Snake", "Deer", "Dog", "Dog", "Sheep", "Dog", "Wolf", "Dog", "Lion", "Dove", "Ant", "Eagle", "Fox", "Eagle", "Stork", "Viper", "Fish", "Fly", "Ant", "Fly", "Snake", "Fox", "Crow", "Fox", "Fox", "Lion", "Fox", "Fox", "Lion", "Fox", "Stork", "Fox", "Weasel", "Fox", "Fly", "Hedgehog", "Hare", "Frog", "Fox", "Frog", "Mouse", "Frog", "Ox", "Frog", "Frog", "Goat", "Goose", "Hare", "Horse", "Donkey", "Horse", "Kite", "Dove", "Lion", "Lion", "Lion", "Lion", "Bear", "Fox", "Lion", "Boar", "Vulture", "Dog", "Mouse", "Oyster", "Donkey", "Ox", "Kite", "Snake", "Crab", "Snake", "Snake", "Tortoise", "Tortoise", "Hare", "Cat", "Wolf", "Wolf", "Lamb", "Swallow", "Tortoise"];

let aesopsAnimalsCounted = aesopAnimals.reduce(function(total, animal){
    // total begins as an empty object
    // the animal parameter represents each item in the array, as it is passed to the reduce function iterating through that array. So on its first pass, animal = "Ant", then "Grasshopper", etc.
    // Since "total" is an empty object, on the first pass, this code sets a key called Ant, and its value is 1
    //{ Ant: 1 }
    // Grasshopper: 1
    // Ape: 1
    if(!total[animal]) {
        total[animal] = 1;
    } else {
        total[animal] = total[animal] + 1;
    }
    return total;
}, {});

console.log(aesopsAnimalsCounted);

const aesopsAnimalsCountedAndSorted = Object.entries(aesopsAnimalsCounted).sort(function(a, b){return b[1]-a[1]});

for (let i = 0; i < aesopsAnimalsCountedAndSorted.length; i++){
    $("#output").append(
        aesopsAnimalsCountedAndSorted[i][0] + ": " + aesopsAnimalsCountedAndSorted[i][1] + "<br>"
    );
}

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

const mileages = cars.reduce(function(accumulator, car){
    accumulator.push(car.mileage);
    return accumulator;
}, []);

console.log(mileages);

const highestMileage = cars.reduce(function(accumulator, car, index, carsArray){
    if (index === carsArray.length - 1) {
        accumulator.push(car.mileage);
        accumulator.sort(function(a, b){return b-a});
        return accumulator[0];
    } else {
        accumulator.push(car.mileage);
        return accumulator;
    }
}, []);

console.log("The highest mileage is " + highestMileage);

/*We could do this differently, with a reduce within a reduce. Since our accumulator is an array, on our last iteration we can run a reduce function on it. This is a standard reduce function that takes, by default, the first value in the array as the initial accumulator variable. It then takes each mileage stored in that accumulator array. The function we run here simply uses Math.max to compare the two values passed to reduce on each iteration, and return the highest one. This will compare 10428 to 9425 and return 10428, then compare 10428 to 2567 and return 10428, then compare 10428 to 14500 and return 14500, finally compare 14500 to 11248 and return 14500. Then we return the value stored as a variable resulting from that reduce within the reduce, and we also arrive at the highest mileage in the cars array.*/


// get lowest and highest values in a numerical array
prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

let highLowPrices = prices.reduce(function(accumulatorArray, price, index, pricesArray){
    if (index === pricesArray.length-1){
        accumulatorArray.push(price);
        let returnArray = [];
        accumulatorArray.sort(function(price1, price2){
            return price1 - price2;
        });
        let lowestPrice = accumulatorArray[0];
        let highestPrice = accumulatorArray[accumulatorArray.length-1];
        returnArray.push(lowestPrice);
        returnArray.push(highestPrice);
        return returnArray;
    } else {
        accumulatorArray.push(price);
        return accumulatorArray;
    }
}, []);

console.log(highLowPrices);

// array.slice(0,4).reduce();
