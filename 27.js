// Array push pop
let fruits = ["apple", "mango", "grapes"];
console.log(fruits)
//push
fruits.push("banana");
console.log(fruits)

//pop
fruits.pop();
let popValue = fruits.pop();
console.log(popValue)
console.log(fruits);


// Array shift unshift 
fruits.unshift("banana");
console.log(fruits)
let shiftFruits = fruits.shift();
console.log(shiftFruits)
console.log(fruits)


const arr = ["item1","item2","item3"]
const arr2 = arr.slice(0)
console.log("arr2" , arr2)