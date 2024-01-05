// Imperative approach
function fibonacciImperative(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}

console.log(fibonacciImperative(10)); // Output: 55

// Recursive approach
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

console.log(fibonacciRecursive(10)); // Output: 55
