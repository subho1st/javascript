// dataTypes

// Primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const name = "Raj" //string
const address = "22" //string
const age = 39 //number
const price = 78.90 //number
const isLoggedIn = true //boolean
const isLoggedout = false //boolean
const outsideTemp = null //null //not 0 //typeof will be object
const carname = "" //undefined 
let userEmail; //undefined
const id = Symbol("123"); //symbol
const anotherId = Symbol("123"); //symbol

//console.log( id === anotherId);

const bigNumber = 12222222887654498n; //bigInt

//console.log(typeof bigNumber);

// Reference (Non primitive)
// 3 types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array

console.log(typeof heros); // result will be object. Only difference is the pattern [] and {}

const myObj = {
    name: "Raj",
    age: 40,
} //object

console.log(typeof myObj);

const myFunction = function(){ //function
    console.log("Hello World");
}

myFunction();

console.log(typeof myFunction);








