// fill method

// value , start  , end

// const myArray = new Array(10).fill(-1)
// console.log(myArray)


const myArray = [1, 2, 3, 4, 5, 6, 7,8,9,10]
// const result = myArray.fill(0, 2, 5);
const result = myArray.slice(0).fill(0, 2, 5);
console.log(result)
console.log(myArray)