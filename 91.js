// static methods and properties 

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static classInfo() {
    return "this is calssInfo methos"
  }
  static dsce = "hi there"

  eat() {
    return `${this.firstName} is eathing`;
  }

  isSuperCute() {
    return this.age <= 5;
  }
  isCute() {
    return true;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("harshit", "sharma , 8");
// console.log(person1.eat())


const info = Person.classInfo();
console.log(info)
console.log(Person.dsce)




