// const usersMethods = {
//   about: function () {
//     console.log(`${this.firstName} is ${this.age} years old`);
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "toon na na na la la ";
//   },
// };

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // {}
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "toon na na na la la ";
};

const user1 = createUser("shobuj", "das", "shobuj@email.com", 3, "laksam");
const user2 = createUser("harshit", "das", "shobuj@email.com", 25, "laksam");
const user3 = createUser("mohit", "das", "shobuj@email.com", 3, "laksam");
console.log(user1);
console.log(user2.about())
console.log(user2.is18())
console.log(user2.sing())
