// map method

const numbers = [3, 4, 55, 6, 76];


// map method returns a new array
// call back e return na korle undefined pabo.
// so  sob somoy callback e return korte hobe . tahole notun array pawya jabe

// const squareNumber = numbers.map((number, index) => {
//   return number * number
//   // return `index : ${index}, ${number * number}`
// });

// console.log(squareNumber); // [ 9, 16, 3025, 36, 5776 ]



const users = [
  { firstName: "Shobuj", age: 23 },
  { firstName: "Shanto", age: 21 },
  { firstName: "Joy", age: 23 },
  { firstName: "Antor", age: 23 },
  { firstName: "Punom", age: 22 },
];


const userNames = users.map((user) => {
  return user.firstName;
})

console.log(userNames)