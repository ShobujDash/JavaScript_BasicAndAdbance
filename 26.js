// Intro to arrays
// reference type
// how  to create arrays

// An array in JavaScript is a type of global object that is used to store data. Arrays consist of an ordered collection or list containing zero or more data types, and use numbered indices starting from 0 to access specific items.

// জাভাস্ক্রিপ্টে একটি অ্যারে হ'ল এক ধরণের গ্লোবাল অবজেক্ট যা ডেটা সঞ্চয় করতে ব্যবহৃত হয়। অ্যারেগুলিতে শূন্য বা ততোধিক ডেটা প্রকারযুক্ত একটি অর্ডারযুক্ত সংগ্রহ বা তালিকা থাকে এবং নির্দিষ্ট আইটেমগুলি অ্যাক্সেস করতে 0 থেকে শুরু করে সংখ্যাযুক্ত সূচক ব্যবহার করে।

let fruits = ["apple", "mango", "grapes"];
let obj = {}
console.log(fruits);

// array indexing
let first = fruits[0];
console.log("first element ===>", first);

// changeing arrays indexing data
fruits[1] = "banana";
console.log(fruits);


// Array Datatype checking
console.log(typeof fruits);
console.log(typeof obj); //object literal
console.log(Array.isArray(fruits))