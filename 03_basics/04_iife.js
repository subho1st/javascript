// Immidiately Invoked Function Expressions (IIFE)

function chai(){
    // named IIFE
    console.log("DB Connected to chai");
};
chai();

(function coffee(){
    // named IIFE
    console.log("DB Connected to coffee");
})();

( () => {
    console.log("DB Connected to chafee");
})();

( (name) => {
    console.log(`DB Connected to ${name}`);
})('Raju');

