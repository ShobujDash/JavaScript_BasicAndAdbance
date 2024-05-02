// new keyword

function CreateUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
CreateUser.prototype.about = function () {
  console.log(this.firstName , this.age)
}
const user = new CreateUser("harshit", 6);

// new keyword
// 1.) empty object this = {};
// 2.) return this 
// 3.) Object.create(CreateUser.prototype);

// console.log(user1)
// console.log(user1.about())

// -----------------------------------------
// 83.js file conver intro new keyword
function CreateUser(firstName, lastName, email, age, address) {
 
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;


}

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "toon na na na la la ";
};

const user1 =new CreateUser("shobuj", "das", "shobuj@email.com", 3, "laksam");
const user2 =new CreateUser("harshit", "das", "shobuj@email.com", 25, "laksam");
const user3 =new CreateUser("mohit", "das", "shobuj@email.com", 3, "laksam");
console.log(user1);
console.log(user2.about());
console.log(user2.is18());
console.log(user2.sing());
