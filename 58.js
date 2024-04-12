// filter method

const numbers = [1,2,34,45,5,6]


const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers)