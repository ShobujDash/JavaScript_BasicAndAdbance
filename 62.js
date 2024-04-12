// every method
const numbers = [1,2,3,4,5,4,5,6,7,78,74,3]
const ans = numbers.every((number) => number % 2 === 0);
console.log(ans)
// callback function ====> true / false (boolean)
// every method ====> true / false (boolean)




const userCart = [
  { productId: 1, productName: "mobile ", price: 12000 },
  { productId: 2, productName: "laptop ", price: 22000 },
  { productId: 3, productName: "tv ", price: 20000 },
];

// check every product < 3000
const result = userCart.every((cartItem) => {
 return cartItem.price < 30000
})

console.log(result)
