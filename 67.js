// Sets (it is iterable)
// store data
// sets also have its own methos
// no index-hased access
// Order is not guaranted
// unique items only (no duplicates allowed)


// const numbers = new Set([1,2,3,3]);
// console.log(numbers)

// const char = new Set("abc");
// console.log(char)



// const items = ["itemq1", "item2", "item3", "item4"];

// const numbers = new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(4)
// numbers.add(items)
// // if (numbers.has(1)) {
// //   console.log("1 is present")
// // } else{
// //   console.log("1 is not present")
// //   }
// // console.log(numbers)
// for (let item of numbers) {
//   console.log(item)
// }

const myArray = [1,2,4,4,5,6,7,6,5]
const uniqueElements = new Set(myArray);
let length = 0;
for (let elem of uniqueElements) {
  length++
}
console.log(length)
console.log(uniqueElements);
