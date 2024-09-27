const user = {
    username : "Swagatam",
    price : 999,

    welcomeMsg : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
    
    
}
// user.welcomeMsg();
// user.username = "Bable"
// user.welcomeMsg();

//console.log(this);

// function chai(){
//     let username = "Raj"
//     console.log(this.username);
// }

// const chai = function(){
//     let username = "Raj"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Raj"
//     console.log(this.username);
// }

// chai();


const addTwo = (num1, num2) => {
    return (num1 + num2);
}

const addThree = (num1, num2) => (num1 + num2);
const addFour = (num1, num2) => num1 + num2;
const addFive = (num1, num2) => ({username : "Riku"});

console.log(addTwo(3, 8));
console.log(addThree(5, 7));
console.log(addFour(5, 1));
console.log(addFive(5, 3));