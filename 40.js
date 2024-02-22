// spread operator

// const array1 = [1,2,3,4,5]
// const array2 = [6, 7, 8]

// // const newArray = array1.slice(0)
// // const newArray = array1.slice(0).concat(array2, 69);
// const newArray = [...array1, ...array2,69];
// console.log(newArray)

//spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};
// const newObjects = {...obj1, ...obj2}
// const newObjects = {...obj1, ...obj2,key3:"value33434",key69:"value69"}
// const newObjects = { ..."abc" };
// const newObjects = { ...["item1","item2"]}; // dorkar hoy na temon
console.log(newObjects);
