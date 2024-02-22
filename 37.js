// different between dot and bracket notation
const key = "email"
const person = {
  name: "shobuj",
  age: 23,
  "person hobbies": ["guitar", "Learning", "music", "work", "inteligence"],
};

console.log(person["person hobbies"])

// person.key = "shobujd6@gmail.com";
person[key] = "shobujd6@gmail.com"
console.log(person)





