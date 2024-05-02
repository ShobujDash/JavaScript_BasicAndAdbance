// 2015 / es6
// class keyword
// class are fake

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called")
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "toon na na na la la ";
  }
  fucn(a) {
    return a
  }
}

const user1 = new CreateUser("shobuj", "das", "shobuj@email.com", 3, "laksam");
const user2 = new CreateUser("Mr.", "das", "shobuj@email.com", 23, "laksam");
console.log(user1)
console.log(user1.firstName)
console.log(user2.is18())
console.log(user2.fucn("shobuj das"))

console.log(Object.getPrototypeOf(user1));










