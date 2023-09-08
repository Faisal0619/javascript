//Reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (accumulator,curentvalue){
//     console.log(`acc:${accumulator} and current value : ${curentvalue}` );
//     return accumulator+curentvalue
// },0)
//const myTotal = myNums.reduce( (acc,currvalu) => (acc+currvalu),0)
//console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:9999
    },
    {
        itemName:"java course",
        price:599
    },
]


const priceToPay = shoppingCart.reduce((acc,itemName) => acc + (itemName.price), 0)
console.log(priceToPay);

