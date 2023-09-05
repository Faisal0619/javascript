// this refers current context

const user= {
    username : "hitesh",
    price: 999,

    welcomeMessage:function(){
       // console.log(`${this.username},welcome to website`);
      // console.log(this);
    }


}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this); here this refers to empty

// function chai()
// {                        undefined cannot use this in function
//     let username = "faisal"
//     console.log(this.username);
// }

// chai()

const chai= () => {
    let username = "faisal"
    console.log(this);

}


//chai()

//() => {}   arrow function

// const addTwo = (num1,num2) => {
//     return num1 + num2      explicit return 
// }
// const addTwo = (num1,num2) =>  num1 + num2
//const addTwo = (num1,num2) =>  (num1 + num2)   implicit return
const addTwo = (num1,num2) =>  ({username:"faisal"})

console.log(addTwo(5,5));



const myArray = [2,5,4,3,7]
myArray.forEach(()=>())