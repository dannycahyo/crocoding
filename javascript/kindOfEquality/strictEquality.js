// STRICT EQUALITY
console.log(2 === 2);
console.log(7 === "7");

/* Special Case */
const nan = NaN;
console.log(nan === nan);
console.log(Object.is(nan, nan));

console.log(-0 === 0);
console.log(Object.is(0, -0));
