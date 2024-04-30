// methods
// function inside object


 function personInfo() {
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    // console.log(this)
  }

const person1 = {
  firstName : "Harshit",
  age: 8,
  about :personInfo,
}

const person2 = {
  firstName : "Mohit",
  age: 88,
  about :personInfo,
}

const person3 = {
  firstName : "Nithish",
  age: 48,
  about :personInfo,
}

person2.about();
// personInfo()
















