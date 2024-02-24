// Rest Parametewr

// function myFucn(a, b, ...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log('c is ', c);
// }
// myFucn(1,2,3,4,5,56,7,7,88,9,10)

function addAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total = total + num;
  }
  return total;
}
const ans = addAll(1, 2, 3, 4, 5, 6);
console.log(ans);
