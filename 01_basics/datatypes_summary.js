//  primitive  =>call by value

// 7  types : String , Number,Boolean, null(empty), undefined, Symbol,BigInt

   const score = 100 // return type Number
   const scoreValue = 100.3 //return type Number

   const isLoggedIn = false
   const outSideTemp = null // Object
   let userEmail;


   const id = Symbol('123') // Symbol

   const anotherId =Symbol('123')     // Symbol


  // console.log(id === anotherId);   //False

   const bigNumber = 32458787875n     // BigInt






//Reference type (Non Primitive)
// Array , Objects, Functions

            const heros= ["shaktiman","naagraj","doga"];// array

      let myObj=      {
                name: "faisal",   // object
                age:18,
            }
               
           const myFunction= function()
            {
//console.log("Hello World");
            }
      

          //  console.log(typeof anotherId);


            //************************************************************************************//

// Stack(primitive), Heap(Non-primitive)


let myYoutubeName = "faisalrashid.com";

let anotherName = myYoutubeName
anotherName = "chaiaurcode";
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
   email: "useratgoogle.com",
   upi:"user@ybl"
}
let userTwo = userOne;
userTwo.email = "hitest@google.com";
console.log(userOne.email);
console.log(userTwo.email);






















