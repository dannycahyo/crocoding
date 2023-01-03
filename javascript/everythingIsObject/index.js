// STRING CASE
const misuh = "COK";
misuh;

console.log(String.prototype);

// NUMBER CASE
const number = 0;
number;
console.log(Number.prototype);

// OBJECT CASE
const object = {};

console.log(object);

// ARRAY CASE

const array = [];

console.log(array);

// FUNCTION CASE

const fun = () => {};

fun.fooBar = "foo";

console.log(fun.fooBar);

console.log(Object.getPrototypeOf(fun));

console.log(fun.__proto__);

// Make our own prototype
const userFunctionStore = {
  sayName: function () {
    console.log(`Hello my name is ${this.name}`);
  },
  increment: function () {
    this.score++;
  },
};

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const user1 = userCreator("Danny", 100);

console.log(user1);
