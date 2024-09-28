const userEmail = "raj@gmail.com"; // Truthy
//const userEmail = ""; // Falsy
//const userEmail = []; // Truthy

if (userEmail) {
    console.log("User has email");
} else {
    console.log("User don't have email");
}

// Falsy
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Except these above falsy values all are Truthy values


// Truthy values
// "0", 'false', " ", [], {}, function(){},


const blankArray = [];

if (blankArray.length === 0) {
    console.log("Array is empty");
}

const blankObject = {};

if (Object.keys(blankObject).length === 0) {
    console.log("Object is blank");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 10;
val1 = null ?? 16 ?? 30;
console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");


