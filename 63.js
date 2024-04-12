// some method

const numbers = [3,4,4567,87,889,4]
// je kono ekta number even hole
// true

const ans = numbers.some((number)=> number % 2 === 0)
console.log(ans)



const userCart = [
  { productId: 1, productName: "mobile ", price: 12000 },
  { productId: 2, productName: "laptop ", price: 22000 },
  { productId: 3, productName: "tv ", price: 20000000 },
];

const result = userCart.some((cartItem) => {
  return cartItem.price > 100000;
}
)
console.log(result)