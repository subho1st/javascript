const score = 500;
//console.log(score);

const balance = new Number(400);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anotherNum = 23.89976;
//console.log(anotherNum.toPrecision(3));

const anotherNumb = 123.89976;
//console.log(anotherNumb.toPrecision(3));

const hundreds = 100000000000;
//console.log(hundreds.toLocaleString()); // US Standards
//console.log(hundreds.toLocaleString('en-IN')); // Indian Standards


//************ Maths ***********/

//console.log(Math); // to know more please go to console in chrome browser then paste and run. You will get all the methods like pie, floor etc.

//console.log(Math.abs(-4)); //abs always return positive value

//console.log(Math.round(4.3)); // always return round off values

//console.log(Math.ceil(4.2)); // ceil means ceiling means top, so always return upper value

//console.log(Math.floor(4.9)); // floor means bottom or down, so always return lower value

//console.log(Math.min(4, 6, 9, 11)); // min always return smallest value

//console.log(Math.max(4, 6, 9, 11)); // min always return largest value


console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);