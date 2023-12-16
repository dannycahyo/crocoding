// TODO: Bad variable and function names
let arr = ["apple", "banana", "cherry"];
let obj = { name: "John", age: 25 };

function f(item) {
  return item.name;
}

console.log(f(obj));

// TODO: Good variable and function names
let fruits = ["apple", "banana", "cherry"]; // 'fruits' is descriptive
let user = { name: "John", age: 25 }; // 'user' is descriptive

function getUserName(user) {
  // 'getUserName' and 'user' are descriptive
  return user.name;
}

console.log(getUserName(user)); // It's clear what this line does even without looking at the function definition
