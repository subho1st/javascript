// console.log("R");
// console.log("A");
// console.log("J");
// console.log("D");
// console.log("E");
// console.log("E");
// console.log("P");

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}

//sayMyName();

function twoNumbers(num1, num2){
    console.log(num1 + num2);
}

// twoNumbers(3, 4);
// twoNumbers(3, "4");
// twoNumbers(3, "a");

function twoNumbers(num1, num2){
    //let result = (num1 + num2);
    //return result;
    return num1 + num2
}

const result = twoNumbers (3, 5);
//console.log("Result: ", result);

function loginUserMsg(username = "Vasco"){
    // if(username === undefined){
    //     console.log('Please provide username');
    //     return;
    // }
    if(!username){
        console.log('Please provide username');
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginUserMsg("Subho"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(3, 500, 200, 100));


const user = {
    username : "Rajdeep",
    price : 399
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    username: "Swagatam",
    price: 567
})

const myNewArray = [200, 400, 700, 900]

function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 789, 67, 89]));


