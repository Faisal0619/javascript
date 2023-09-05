// Immediately Invoked Function Expression(IIFE)

(function chai()
{
    // named iffe
    console.log(`DB CONNECTED`);
})();
//jo function immediately execute hojayai
//aur global  scope kai pollution sai problem hoti hai kaye baar toh uss global scope kai jo varaibles kai pollution ko hatanai kailia hmnai iife ka use kiya



( (name) => {
    // simple iife
    console.log(`DB CONNECTED ${name}`);
})('faisal')