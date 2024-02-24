// block vs function scope

// let and canst are block scope
// var is function scope

// {
//   let firstName = "harshit";
//   console.log(firstName)
// }

// {
//   const firstName = "Shobuj"
//   console.log(firstName)
// }

// const firstName = "new";
// console.log(firstName)


// var theory
// {
//   var firstName = "harshit";
//   console.log(firstName);
// }
// {
//   console.log(firstName);
// }


// if (true) {
//   let firstName = "harshit";
//   console.log(firstName)
// }
// console.log(firstName)


function myApp() {
  if (true) {
    var firstName = "harshit";
    console.log(firstName)
  }
  console.log(firstName)
}
myApp()
console.log(firstName)