function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.log("Error: Division by zero");
  }
}

console.log(add(5, 3));
console.log(add(8, 10));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));
