const person = { name: "Danny" };

// TANDA SEBUAH OBJECT DI JAVASCRIPT

/* 1. Access value berdasarkan key pake dot "." */
const danny1 = person.name;

/* 2. Access value berdasarkan key pake ["key"] */
const danny2 = person["name"];

/* 3. Destructuring */
const { name: danny3 } = person;

console.log(danny1, danny2, danny3);
