// let a = 10
// const b = 20
// var c = 30

//global scope
//var c = 300


let a = 569
//block scope
if (true){
    let a = 10
    const b = 20
    //var c = 30
    //console.log("Inner: ", a);
}



//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Rajdeep";

    function two(){
        const website = "rajdeep.com";
        console.log(username); 
    }
    //console.log(website);

    two();
    
}

//one();

if (true) {
    const username = "Subho";
    if (username === "Subho") {
        const website = " netflix.com"
        console.log(username + website);
    }
}
console.log(addOne(5));
function addOne(num){
    return num+1
}

//hoisting

const addTwo = function(num){
    return num+2
}
console.log(addTwo(6));








