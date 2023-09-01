/* array  is an object
java script arrays are resizable and can contain a mix of diiferent data types.
javascript arrays are zero-indexed 
java script  array-copy operations create shallow copies( means a shallow copy of an object is acopy whose properties share the same reference )
deep copy of an object is a copy whose properties do not share the same reference 
*/
const myArr = [0,1,2,3,4,5] 
 
const myHeros = ["dore", "comics"]

const myArr2 = new Array(1,2,3,4)


//console.log(myArr[0]);
//console.log(myArr2[0]);

// Array Methods
  
// myArr.push(6);
// myArr.push(7);
// myArr.pop();// no argument
// console.log(myArr);


//myArr.unshift(9)//add value  at start of an array { problem  is we have to shift all values of an array}
  myArr.shift()  // removes first element of an array


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArray = myArr.join() // adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(newArray);
// console.log(typeof(newArray));


// Slice , splice

// console.log("A ",myArr);

// const myn1 = myArr.slice(1,3) // Returns a copy of a section of an array. (also not include 3)
// console.log(myn1);

// console.log("B ",myArr);

// const myn2 = myArr.splice(1,3) // includes 3 and original array manuplates (Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.)
// console.log("c ",myArr);
// console.log(myn2);


const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//flash

// const allHeros = marvel_heros.concat(dc_heros) // Combines two or more arrays. This method returns a new array without modifying any existing arrays
// console.log(allHeros[3]);

// const allNewHeros = [...marvel_heros,...dc_heros] // spread operator
// console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

                                                      // this infinity means here depth we can enter there 2 3 4 etc
     console.log(real_another_array); 
     
     

    console.log(Array.isArray("faisal"))
    console.log(Array.from("faisal")) //Creates an array from an iterable object.
    console.log(Array.from({name:"faisal"})) // interesting for interviews

    let score1 = 100
    let score2 = 200
    let score3 = 300

    console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements.

    








