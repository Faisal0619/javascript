// if

const isUserLoggedIn = true

const temperature = 60
// if(temperature < 50){
//     console.log("temperature is less than 50")
// }
// else{
// console.log("temperature is grater than 50");}
// console.log("executed");

// <,>,<=,>=,==(compare),!=,===(strict equal also checks datatype),!==(negative sign checking)

// const score =200
// if(score >100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

//console.log(`user power: ${power}`);  power is not defined


// short hand notation
//const balance = 1000
//if(balance >500)
//console.log("test");implicit scope
//console.log("test"),console.log("test2"); not a good practice to write this type of code

// if(balance<500){
//     console.log("less than 500");

// }else if(balance <750)
// {
//     console.log("less than 750");
// }else if (balance<900)
// {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const userLoggedIn  = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

// if(userLoggedIn && debitCard && loggedInFromGoogle)
// {
//     console.log("allow to buy courses");
// }

if (loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User logged in");
}

















