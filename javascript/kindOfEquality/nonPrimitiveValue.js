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
const dStudents = ["Danny", "Denny", "Donny"];
console.log(students === dStudents);

// Function
let foo = function () {
  return 0 / 0;
};
let bar = function () {
  return 0 / 0;
};
console.log(foo === bar);
