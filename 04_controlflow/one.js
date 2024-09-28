// if
// <, >, <=, >=, ==, !=, ===, 

// if(2 == "2"){
//     console.log("executed");
// }
// if(2 === "2"){
//     console.log("executed");
// }
// if(2 != 3){
//     console.log("executed");
// }

//const isUserLoggedIn = true;
const temp = 41;

// if(temp < 50){
//     console.log("less than 50");
// }
// if(temp === 51){
//     console.log("less than 50");
// }else{
//     console.log("Temp is greater than 50");
// }
//console.log("Temp is greater than 50");

// const score = 200;

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
//console.log(`User power: ${power}`);


//const balance = 1000;

//if (balance > 500)console.log("test");

// if (balance < 500) {
//     console.log("less than");
// }else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = false;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard){
    console.log("Allow to buy");
} else {
    console.log("Not allowed");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("You are logged in");
    
}






