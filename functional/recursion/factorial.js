// Imperative approach
function factorialImperative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialImperative(5)); // Output: 120

// Recursive approach
function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

console.log(factorialRecursive(5)); // Output: 120
