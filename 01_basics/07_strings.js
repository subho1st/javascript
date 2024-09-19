//const name = "Rajdeep"
const name = new String('Rajdeep');
const age = 39

console.log("My name is " + name + " and my age is " + age + " and I am a Frontend Developer" ); //bad practice

console.log(`My name is ${name.toUpperCase()} and my age is ${age} and I am a Frontend Developer`);// good practice and modern way to write code