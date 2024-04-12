// important array methods

const numbers = [1, 2, 3, 4, 5];

// function multiplyBy2(number, index) {
//   console.log("index is ", index)
//   console.log(`${number} * 2 = ${number*2}`)
// }

// for (let i = 0; i < numbers.length; i++){
//   // console.log(i)
//   multiplyBy2(numbers[i],i)
// }


// numbers.forEach(function (number, index) {
//    console.log(`${number} * 2 = ${number * 2}`);
// });


const users = [
  {firstName : "Shobuj", age : 23},
  {firstName : "Shanto", age : 21},
  {firstName : "Joy", age : 23},
  {firstName : "Antor", age : 23},
  {firstName : "Punom", age : 22},
]

users.forEach(function (user) {
  console.log(user.firstName)
})

for (let user of users) {
  console.log(user.age)
}


