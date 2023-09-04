
function sayMyName()
{
    console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");

}  //function is a keyword

//sayMyName()                     
  // only sayMyName is reference of function
                                    // and if i want to execute then sayMyName()


// function addTwoNumbers(number1,number2)               //when we make definition of a function ,inputs are called parameters
// {
//     console.log(number1 + number2); 
// }

// addTwoNumbers(5,6)   11  (when we call a function that time the values we pass are called as arguments)
// addTwoNumbers()  NaN
// addTwoNumbers(3,"4")  34
// addTwoNumbers(3,"a")  3a
// addTwoNumbers(3,null) 3

 

 //console.log("Result: ",result); undefined 


 function addTwoNumbers(number1,number2)              
 {
    // let result = number1 + number2
    // return result      after return nothing is printed
    return number1 + number2
 }
  const result=  addTwoNumbers(3,4)
// console.log("Result: ", result);
 
function logInUserMessage(username = "sam"){
    if(username === undefined){
      //  console.log("please enter a username");                                                                     
        return
    }
  /*  if(!username){
        console.log("please enter a username");
        return*/
return `${username} just logged in`  // string interpolation
}
//console.log(logInUserMessage("faisal")); faisal  just logged in
//console.log(logInUserMessage("")); just logged in

//console.log(logInUserMessage("hitesh"));  undefined just logged in


function calculateCartPrice(...num1){
return num1                                                        // ... rest operator or spread operator
}
console.log(calculateCartPrice(200,400,500,100,2000));

// function calculateCartPrice(val1,val2,...num1){
//     return num1                                                        // ... rest operator or spread operator
//     }
//     console.log(calculateCartPrice(200,400,500,100,2000)); output 500 100 2000
    

const user  = {
    username: "faisal",
    prices: "199"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]
function returnedSecondValue(getArray){
                     return getArray[1]
}

//console.log(returnedSecondValue(myNewArray));

console.log(returnedSecondValue([
    2,5,6,4
]));




