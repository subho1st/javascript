//let score = 34
//let score = "34"
//let score = "34abc" 
//let score = null; // 0
//let score = undefined;
//let score = true;
//let score = false;

let score = "Raj";


//console.log(typeof score);
//console.log(typeof(score)); 

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0

//let isLoggedIn = true;

//let isLoggedIn = 1; // 1 => true, 0 => false
//let isLoggedIn = ""; false
let isLoggedIn = "Raj"; //true


let booleanIsloggedIn = Boolean(isLoggedIn);
//console.log(booleanIsloggedIn);

let someNumber = 33

let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);


//***************** Operations *************

let value = 3-8
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/3);
//console.log(2%3);

let str1 = "Hello";
let str2 = " Raj";

//console.log(str1+str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(3 + 4 * 5 % 3);
// console.log((3+4) * 5 % 3 );

// console.log(true);
// console.log(+true);// bad practice
// console.log(+"");// bad practice

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // bad practice 

let gameCounter = 100;
gameCounter++; //post increment
//++gameCounter //pre increment
//console.log(gameCounter);

let x = 3;
const y = x++;

console.log(x, y);

let a = 3;
const b = ++a;

console.log(a, b);
