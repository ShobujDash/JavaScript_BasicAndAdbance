// find method

const myArray = ["hello", "cat", "dog", "lion"];

function isLength3(string) {
  return string.length === 3;
}

const ans =myArray.find(isLength3);
console.log(ans)


const users = [
  { userId: 1, firstName: "Shobuj", age: 23 },
  { userId: 2, firstName: "Shanto", age: 21 },
  { userId: 3, firstName: "Joy", age: 23 },
  { userId: 4, firstName: "Antor", age: 23 },
  { userId: 5, firstName: "Punom", age: 22 },
];
const myUser = users.find((user) => {
  return user.userId === 1
});
console.log(myUser)