//var c=300
let a=300
if(true)
{
    let a = 10
    const  b =20
    var c = 30                           //block scope
//    console.log("INNER: ",a);
}





//console.log(a);
//console.log(b);
console.log(a);                               //global scope



//nested scope
function one()
{
    const username = "hitesh"

    function two()
    {
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);

    two()
}
one()
if(true){
    const username = "hitesh"
    if(username=="hitesh")
    {
        //const website = " youtube"
        //console.log(username + website);
    }

   // console.log(website);  error
}
//console.log(username);  error


// ********************* INTERESTING ************************
console.log(addone(5)); // valid
function addone(num){
    return num +1
}



console.log(addTwo(5)); // invalid    concept of  hoisting  ->Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}



