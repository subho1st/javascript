const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task complete');
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log('promise is consumed');
})

////////////////////////////////////////////////////////////////

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise2 resolved');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Async is resolved');
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Raj', email: 'raj@example.com'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})