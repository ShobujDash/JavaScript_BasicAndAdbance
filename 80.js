// [[prototype]] or __proto__

// const obj1 = {
//   key1: "value1",
//   key2:"value2",
// }

// const obj2 = Object.create(obj1);
// obj2.key3 = "value3"
// // obj2.key2 = "value22"
// console.log(obj2.key2)
// console.log(obj2)
// console.log(obj2.__proto__)

const usersMethods = {
  about: function () {
    console.log(`${this.firstName} is ${this.age} years old`);
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "toon na na na la la ";
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(usersMethods); // {}
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}

const user1 = createUser("shobuj", "das", "shobuj@email.com", 3, "laksam");
const user2 = createUser("harshit", "das", "shobuj@email.com", 25, "laksam");
const user3 = createUser("mohit", "das", "shobuj@email.com", 3, "laksam");
console.log(user1);
user2.about();

// console.log(user2.is18());
// console.log(user2.sing());
