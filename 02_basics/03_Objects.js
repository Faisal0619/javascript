//singleton 
//Object.create   constructor method



// object literals
//const jsUser = {}  empty object
// in objects keys and values are

const mySym = Symbol("key1") // important how to access Symbols

const jsUser = {
    name: "Faisal",
    "full name" : "Faisal Rashid",
    [mySym] : "mykey1",
    age : 18,
    location :"kashmir",
    email: "faisal@google.com",
    isLoggedIn : false,
    lastLoginDays: ["monday","saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log( typeof jsUser[mySym]); -->string
// console.log( typeof [mySym]); -->object
// console.log( typeof jsUser.mySym); -->undefined 
//console.log((typeof mySym));-->symbol

jsUser.email = "faisal@chatgpt.com"
jsUser.email = "faisal@microsoft.com"
//console.log(jsUser);


jsUser.greeting = function()
{
    console.log("hello js user");
}

//console.log(jsUser.greeting());
jsUser.greetingTwo = function()
{
    console.log(`hello js user, ${this.name}`); // string interpolation (backticks)
}
//console.log(jsUser.greetingTwo());
//how to access object
//one way --> console.log(jsUser.email);
//another way console.log(jsUser["email"]);



//const tinderUser = new Object()  output {} this is singleton object

//const tinderUser  = {}  this is non singleton object
//console.log(tinderUser);    output {}

const tinderUser  =  {} 

 tinderUser.id  = "123abc"
 tinderUser.name  = "sammy"   
 tinderUser.isLoggedIn  = false



 const regularUser = {
    email: "sum@gmail.com",
    fullname : {
        userfullname : {
            firstname : "faisal",
            lastname : "rashid"
        }
    }
 }

 console.log(regularUser.fullname.userfullname.lastname);



 //combine
 const obj1 = {1: "a" , 2: "b"}
 const obj2 = {3: "a" , 4: "b"}

 //const obj3 = {obj1 ,obj2}
//const obj3 =Object.assign({},obj1 , obj2)
const obj3 = {...obj1,...obj2}
 console.log(obj3);


 const users = [
    {
    id : 1,
    email:"h@gmail.com"
 },
 {

 },
 {

 },
]


users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


