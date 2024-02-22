// how to iterate object
const person = {
  name: "shobuj",
  age: 23,
  "person hobbies": ["guitar", "Learning", "music", "work", "inteligence"],
};

// for in loop
// Object.kyes

// for (let key in person) {
//   console.log(key)
//   console.log(person[key])
//   console.log(key ," : ", person[key])
// }

// console.log(typeof (Object.keys(person))) // retuned an array
// console.log(Array.isArray(Object.keys(person)))

for (let key of Object.keys(person)) {
  console.log(key);
  console.log(key , " : ", person[key] )
}
