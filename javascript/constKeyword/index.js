// MEMPERTANYAKAN KEMBALI KEYWORD CONST

// Make an object with a property name and value Danny
const person = {
  name: "Danny",
};

// person = { name: "John" }; // Can't Reassign

// NON PRIMITIVE VALUE
person.name = "Dwi";
console.log(person); // { name: "Dwi" }

// PRIMITIVE VALUE
const danny = "Danny";
danny[0] = "L";
console.log(danny); // Danny

// What is the result of the block code below
const res = 9 + 9 + 10 + 26 + 16 + 6 + 21;
console.log(res); // 99
