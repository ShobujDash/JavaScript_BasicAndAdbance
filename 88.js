// getters and setters
class Person{
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

}

const person1 =new Person("harshit", "sharma", 5);
// console.log(person1)
// console.log(person1.fullName)

console.log(person1.firstName)
console.log(person1.lastName)
person1.fullName = "mohit Vashistha"
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);







