const grandparent = document.querySelector(".grandParent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");



// // event capturing
// child.addEventListener("click", () => {
//   console.log("Capture !!!! child")
// },true)

// parent.addEventListener("click", () => {
//   console.log("Capture !!!! parent")
// },true)
// grandparent.addEventListener("click", () => {
//   console.log("Capture !!!! grandParent")
// }, true)



// // event bubbling or event propagation
// child.addEventListener("click", () => {
//   console.log("Bubbling !!!! child")
// })

// parent.addEventListener("click", () => {
//   console.log("Bubbling !!!! parent")
// })
// grandparent.addEventListener("click", () => {
//   console.log("Bubbling !!!! grandParent")
// })



// event delegation
grandparent.addEventListener("click", () => {
  console.log("You clicked something !!!!")
})

