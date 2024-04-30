const user1 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake 
// const myFunc = user1.about; // this is the mistake
// myFunc() // this is the mistake

const myFunc = user1.about.bind(user1); // this is the right way
myFunc() // this is the right way

