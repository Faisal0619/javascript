//Dates

let  myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023, 0, 23)//month starts from 0
// let myCreatedDate = new Date(2023, 0, 23 , 5 ,3)//1/23/2023 ,5 :03:00
//let myCreatedDate = new Date("2023-01-24")//1/24/2023,12:00:00
let myCreatedDate = new Date(" 05-05-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());



newDate.toLocaleString('default',{
    weekday: "long"
})






