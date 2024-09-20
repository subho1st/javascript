//dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//console.log(typeof myDate);

let myCreateDate = new Date(2013, 6, 26);
let myCreateDateTime = new Date(2013, 6, 26, 5, 3);
let myAnotherCreateDateTime = new Date("1986-03-16");
let indDateTime = new Date("03-16-1986");
// console.log(myCreateDate.toDateString());
// console.log(myCreateDateTime.toLocaleString());
// console.log(myAnotherCreateDateTime.toLocaleString());
// console.log(indDateTime.toLocaleString());

//************ Time ***************/

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(indDateTime.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getMonth() + 1);

//`${newDate.getDay()} and time ${newDate.getTime()}`

newDate.toLocaleString('default', {
    weekday: "long"
})