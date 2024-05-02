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

const user1 = new CreateUser("shobuj", "das", "shobuj@email.com", 3, "laksam");
const user2 = new CreateUser(
  "harshit",
  "das",
  "shobuj@email.com",
  25,
  "laksam"
);
const user3 = new CreateUser("mohit", "das", "shobuj@email.com", 3, "laksam");
