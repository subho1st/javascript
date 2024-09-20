const myHeros = ["Amitabh", "Akshay", "SRK"];
const bongHeros = ["Bumba", "Jeet", "Dev"];

// myHeros.push(bongHeros);
// myHeros.concat(bongHeros);

// console.log(myHeros);
// console.log(myHeros[3][1]);

// const allHeros = myHeros.concat(bongHeros);
// console.log(allHeros);

const allHeros = [...myHeros, ...bongHeros];
//console.log(allHeros);

const bigArray = [1, 2, 3, 4, [5, 6, 7], 8, 9,[10, 11, [12, 13, 14]]];

const bigAnotherArray = (bigArray.flat(Infinity));
//console.log(bigAnotherArray);

console.log(Array.isArray("Rajdeep"));
console.log(Array.from("Rajdeep"));
console.log(Array.from({name : "Rajdeep"})); // interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));






