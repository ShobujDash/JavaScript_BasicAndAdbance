// sort method
// sort main array ke change kore dibe
const number = [1,2,34,45,5,56,3]
// number.sort();
// console.log(number)

number.sort((a, b) => {
  return a-b
})
console.log(number)


const products = [
  {productId:1, productName:"p1", price:300},
  {productId:2, productName:"p1", price:200},
  {productId:3, productName:"p1", price:8000},
  {productId:4, productName:"p1", price:500},
]

// low to high


// const lowToHigh = [...products]

const lowToHigh=  products.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(products)
console.log(lowToHigh);