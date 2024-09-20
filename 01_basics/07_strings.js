//const myName = "Rajdeep"

const myName = new String('Rajdeep'); 

//to check all the methods, copy this line and paste it in Console at chrome browser and then console.log(myName); You will get an object //prototype; this is very important to learn all string methods like length/trim/toUpperCase/slice etc.

// to know more please go MDN docs > https://developer.mozilla.org/

const age = 39

//console.log("My name is " + myName + " and my age is " + age + " and I am a Frontend Developer" ); //bad practice

//console.log(`My name is ${myName.toUpperCase()} and my age is ${age} and I am a Frontend Developer`);// good practice and modern way to write code

// string methods

console.log(myName[0]); //keys starts from 0
console.log(myName.__proto__); //prototype
console.log(myName.length); //length start from 1
console.log(myName.toUpperCase()); //toUpperCase
console.log(myName.toLowerCase()); //toLowerCase
console.log(myName.charAt(3)); //charAt //the position of character // starts from 0
console.log(myName.indexOf('d')); //indexOf the position of character //reverse of charAt

const newName = myName.substring(0,3); //substring
console.log(newName);

const anotherString = myName.slice(0, 4); //slice //you can give -(negetive value) as well
console.log(anotherString);

const gapString = new String ("  Raj  ");
console.log(gapString); // return string with space
console.log(gapString.trim()); // trim return string by removing extra spaces. intersting one 

const myUrl = "https://rajdeep.com/about%20me";
console.log(myUrl.replace('%20','-')); //replace
console.log(myUrl.includes('raj')); //includes
console.log(myUrl.includes('horidas')); //includes

const newStringArray = "Raj-Deep-Dey";
console.log(newStringArray.split("-")); //split //split it in arrays based on the common separetor







