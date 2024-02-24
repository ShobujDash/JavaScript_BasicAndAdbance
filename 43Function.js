// Function Declaration

// console.log("hi")
// console.log("hi")



// function singHappyBirthday() {
//   console.log("Happy Birthday to you ....")
// }

// singHappyBirthday()
// singHappyBirthday()

// function sumThreeNumbers(number1, number2, number3) {
//   return number1 + number2 + number3;
// }

// const returnedValue = sumThreeNumbers(2, 3, 4);
// console.log(returnedValue)

//odd or even
// input : 1 number
// outpus : ture , false

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log(isEven(34))





//function
// input : string
// output : firstCharecter

// function firstChar(anyStr) {
//   return anyStr[0]
// }
// console.log(firstChar("Shoubj Das"))





// funciton 
// input : array, target (number)
// output : index of target persent in array

// [1,2,3,4,5,6] 4

function newFunc(array, target){
  for (let i = 0; i < array.length; i++){
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
let arr  = [22,333,4,5,6,6,7,7,7999]
const ans = newFunc(arr, 7999);
console.log(ans)





// Function Declaration
function singHappyBirthday() {
  console.log("Happy Birthday to you ....")
}

// Funciton Expression
const singHappyBirthday = function () {
  console.log("Happy birthday to you .....")
}


