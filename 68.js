// Maps
// map is iterable

// Store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key

// in maps you can use anyting as key
// like array , numbers , string



// object literal
// key -> string
// key -> symbol

// const person = {
//   firstName: "Shobuj",
//   age: 7,
//   1 :"one",
// }
// // console.log(person.firstName)
// // console.log(person["firstName"])
// for (let key in person) {
//   console.log(typeof key) // string
// }


// key value pair
// const person = new Map();
// person.set("firstName", "Shobuj")
// person.set("age", 22)
// person.set(1, 22)
// console.log(person);
// console.log(person.get("firstName"))
// console.log(person.get(1))
// console.log(person.keys())

// for (let key of person.keys()) {
//   console.log(key , typeof key)
// }


// Map are iteables

// for (let key of person) {
//   // console.log(Array.isArray(key)) // ture
//   console.log(key)
// }

// for (let [key , value] of person) {
//   // console.log(Array.isArray(key)) // ture
//   console.log(key , value)
// }



// const person = new Map([["firstName", "Shobuj"], ["age", 23]], ["city", "laskam"]);
// console.log(person)


const person1 = {
  id: 1,
  firstName: "shobuj"
};
const person2 = {
  id: 2,
  firstName: "shobu"
};
const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });
extraInfo.set(person2, { age: 8, gender: "female" });
// console.log(userInfo)
console.log(person1.id)
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person2).gender);