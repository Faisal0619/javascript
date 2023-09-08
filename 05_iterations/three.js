// for of loop
// array specific loop
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5,]

for (const num of arr) {
   // console.log(num);
    
}

const greetings = "hello world!"
for (const  greet of greetings) {
  //  console.log(`each char is ${greet}`);
}


//Maps -->map objects are collections of key_value pairs ,key is the map may only occur once,it is unique in the maps coolection

const map = new Map()
map.set('USA',"UNITED STATES OF AMERICA")
map.set('IN',"INDIA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")


//console.log(map);
// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }


// const myObject = {         ---> myObject is not iterable
//     "game1":'NFS',
//     "game2":'spiderman'
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    
// }