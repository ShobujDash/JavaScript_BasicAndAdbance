class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eathing`
  }

  isSuperCute() {
    return this.age <= 5;
  }
  isCute() {
    return true;
  }

}

// const animal = new Animal("ton", 10)
// console.log(animal)
// console.log(animal.eat())
// console.log(animal.isSuperCute())
// console.log(animal.isCute())

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  eat() {
    return `Modified eat ... ${this.name} is eathing`;
  }
  run() {
    return `${this.name} is running at ${this.speed} km/s`
  }
}

// object / instance
const tommy = new Dog("tommy", 3, 45);
console.log(tommy)
console.log(tommy.run())
console.log(tommy.eat())