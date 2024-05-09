// clsoer
// closure : 30-40%
// analyse: 70-80%
// real example: 100%

// function can return function

// function outerFunction() {
//   function innerFunction() {
//     console.log("hello world")
//   }
//   return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans)
// ans();




// function printFullName(firstName,lastName) {
//   function printName() {
//     console.log(firstName, lastName);
//   }
//   return printName;
// }
// const ans = printFullName("Shobuj", "Das");
// console.log(ans);
// ans();

// function func() {
//   let counter = 0;
//   return function () {
//     if (counter < 1) {
//       console.log("hi you called me")
//       counter++
//     } else {
//       console.log("ami already ek bar call hoici")
//     }
//   }
// }

// const myFunc = func();
// myFunc();
// myFunc();
// myFunc();
 
