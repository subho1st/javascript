const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman", "Naagraj", "Doga"];
const myArr2 = new Array (0, 1, 2, 3, 4);

//console.log(myArr2[1]);
//myArr.push(6); // will add 6
//myArr.push(7); // will add 7
//myArr.pop(); //will remove last value
//myArr.unshift(8); //will add at first
//myArr.shift(); //will remove first value

// console.log(myArr.includes(9)); //False
// console.log(myArr.includes(4)); //True
// console.log(myArr.indexOf(4)); //3

// const newArr = myArr.join();
// console.log(myArr); // [0, 1, 2, 3, 4, 5]
// console.log(newArr); // 0, 1, 2, 3, 4, 5
// console.log(typeof myArr); // object
// console.log(typeof newArr); // string

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);






