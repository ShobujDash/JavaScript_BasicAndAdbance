// proto , prototype , class



// function (that function create object)
// add key value pair 
// object ke return korbe
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    console.log(`${this.firstName} is ${this.age} years old`);
  };
  user.is18 = function(){
    return this.age >= 18;
  }

  return user;
}

const user1 = createUser("shobuj", "das", "shobuj@email.com", 3, "laksam");
const is18 = user1.is18();
console.log(is18);
