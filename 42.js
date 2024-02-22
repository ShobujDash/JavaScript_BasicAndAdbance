// objects inside array
// vary useful in real world application

const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "nitish", gender: "male" },
  { userId: 3, firstName: "mohit", gender: "male" },
];

// console.log(users)

// for (let user of users) {
//   // console.log(user)
//   console.log(user.firstName)
// }


const [user1,user2,user3] = users;
const [{firstName},,{gender}] = users;
console.log(firstName)
console.log(gender)