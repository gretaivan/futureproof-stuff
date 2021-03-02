console.log('I dislike trains as a mode of transport');
let alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet[4]);
console.log('I love you'.toUpperCase());

//EXERCISE 2.
let num = 1.23456789;
console.log(num.toPrecision(3))

let numString = "45";
// console.log(typeof(numString))
numString = parseInt(numString);
console.log(typeof(numString))


//EXERCISE 3.
//return min val
let arr = [23123, 2, -328, 0];
let minVal = Math.min();
minVal = arr.reduce((min, next)=> {
    return Math.min(min, next)
}, minVal);

console.log(minVal)

//EXERCISE 4.
function describeJourney(country, flightLenght, currentLocation="London"){
    console.log(`The journey started at ${currentLocation}. The flight to ${country} took ${flightLenght} hours...`);
}

describeJourney('Africa', 12);

//Exercise 5. 