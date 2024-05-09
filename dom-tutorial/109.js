// get multiple elements using getElements by class name
// get multiple elements items using querySlectorAll

// array like object ===> idexing , length property
// let navItems = document.getElementsByTagName("a"); // HTMLcollections
// console.log(navItems)
// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// simple for loop
// for of loop
// forEach

// for (let i = 0; i < navItems.length; i++){
//   // console.log(navItems[i])
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff"
//   navItem.style.color = "green"
// }
// for (let navItem of navItems) {

//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
// }

// navItems = Array.from(navItems);
// // console.log(Array.isArray(navItems))
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
// });




//node list

const navItems = document.querySelectorAll("a"); // nodelist
console.log(navItems)
