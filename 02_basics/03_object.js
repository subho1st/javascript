//singleton

// object.create (constructeur / singleton)

// object literals

const mySym = Symbol("Key1");

const jsUser = {
    name: "Rajdeep",
    "full name": "Rajdeep Dey",
    age: 39,
    [mySym]: "myKey1",
    loaction: "Kolkata",
    email: "rajdeepfirst@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.loaction = "Howrah";

console.log(jsUser.loaction);
//Object.freeze(jsUser);
jsUser.loaction = "Saltlake";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello Raj");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Raj, ${this["full name"]}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());