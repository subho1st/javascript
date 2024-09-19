const accountId = 144553
let accountEmail = "rajdeepfirst@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 not allowed

accountEmail = "ghhghg@hhhh"
accountPassword = "ggggg"
accountCity = "Kolkata"

/* prefer not to use var for block scope and functional scope */

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
