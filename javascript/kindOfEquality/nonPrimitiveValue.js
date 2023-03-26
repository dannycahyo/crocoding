// OBJECT
const misuh = { title: "COK" };
const misuh2 = { title: "COK" };
console.log({} === {});
console.log(misuh === misuh2);

/* Pointing Value */
let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

// ARRAY
console.log([] === []);
const students = ["Danny", "Denny", "Donny"];
const students2 = ["Danny", "Denny", "Donny"];
console.log(students === students2);

// Function
let foo = function () {
  return 0 / 0;
};
let bar = function () {
  return 0 / 0;
};
console.log(foo === bar);
