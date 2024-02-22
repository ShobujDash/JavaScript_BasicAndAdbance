//for in loop in array
const fruits = ["apple", "mango", "banana"];
const fruits2 = []
for (let index in fruits) {
  console.log(index);
  console.log(fruits[index])
  fruits2.push(fruits[index].toUpperCase())
}


console.log(fruits2)