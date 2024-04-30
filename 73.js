
function about(hobby, favMusician) {
    console.log(this.firstName, this.age , hobby , favMusician)
  }

const user1 = {
  firstName: "harshit",
  age: 8,
  about,
}
const user2 = {
  firstName: "mohit",
  age: 9,
 
}

// user1.about();
 
// call
// user1.about.call()
// user1.about.call(user2, "guitar" , "mozrt")


// apply
// about.apply()
// about.apply(user1, ["guitar", "bach"]);


// bind
const fucn = about.bind(user1, "guitar" , "bach")
fucn();