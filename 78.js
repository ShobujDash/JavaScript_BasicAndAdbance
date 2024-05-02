

const usersMethods = {
  about : function () {
    console.log(`${this.firstName} is ${this.age} years old`);
  },
  is18: function () {
    return this.age >= 18;
  },
}

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = usersMethods.about;
  user.is18 = usersMethods.is18;

  return user;
}

const user1 = createUser("shobuj", "das", "shobuj@email.com", 3, "laksam");
const user2 = createUser("harshit", "das", "shobuj@email.com", 25, "laksam");
const user3 = createUser("mohit", "das", "shobuj@email.com", 3, "laksam");
user2.about()
console.log(user2.is18());