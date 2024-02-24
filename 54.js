// callback function
function myFucn2(name) {
  console.log("indese my func 2")
  console.log(`your name is ${name}`)
}

function myFucn(callback) {
  
  console.log("hello there i am a function and i can ...")
  callback("Shobuj")
}


// myFucn([1,2,3,4])
// myFucn({name:"shobuj",age:23})

myFucn(myFucn2);












