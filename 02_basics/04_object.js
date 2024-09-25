//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name= "Raj";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "rajdeep@gmail.com",
    fullname: {
        userfullname:{
            firstname:"raj",
            lastname:"dey"
        }
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

//const obj3 = {obj1, obj2};
//const obj3 = Object.assign(obj1, obj2);
//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}; // best practice and latest

//console.log(obj3);

const users = [
    {
        id: 1,
        email: "raj@gmail.com"
    }
]

//users[1].email
//console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));





