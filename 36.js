// objects reference type

// /arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
const person = {
  name: "shobuj",
  age: 23,
  hobbies: ["guitar", "Learning", "music", "work", "inteligence"],
};
console.log(person);

// how to access data from objects
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies)
// console.log(person.hobbies[3])

console.log(person["name"]);

//how to add key value pair to objects
// person.gender = "male"
// person["gender"] = "female"
// console.log(person)
