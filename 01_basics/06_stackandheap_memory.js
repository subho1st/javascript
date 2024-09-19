// Stack (Primitive) - Copy memory, 
//Heap (Non-Primitive) - Original Ref

// Stack
let myYoutubename = "rajyoutube";
let myNewYoutubename = myYoutubename;
console.log(myNewYoutubename);
myNewYoutubename = "suvoyoutube"

console.log(myYoutubename);
console.log(myNewYoutubename);

// Heap

let passport = {
    "name" : "Raj",
    "age" : 39,
    "address" : "Howrah"
}

console.log(passport.name);

let newPassport = passport;

newPassport.age = 43;

console.log(newPassport.age);
console.log(passport.age);