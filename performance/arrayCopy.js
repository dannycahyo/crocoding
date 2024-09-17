// Create a large array for testing
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);

// Function to measure performance
function measurePerformance(copyFunction, label) {
  const start = performance.now();
  copyFunction();
  const end = performance.now();
  console.log(`${label}: ${end - start} ms`);
}

// Spread Operator
measurePerformance(() => {
  const copy = [...largeArray];
}, "Spread Operator");

// Array.prototype.slice()
measurePerformance(() => {
  const copy = largeArray.slice();
}, "Array.prototype.slice()");

// Array.prototype.slice with 0 arguments
measurePerformance(() => {
  const copy = largeArray.slice(0);
}, "Array.prototype.slice with 0 arguments");

// Array.from()
measurePerformance(() => {
  const copy = Array.from(largeArray);
}, "Array.from()");

// Array.prototype.concat()
measurePerformance(() => {
  const copy = [].concat(largeArray);
}, "Array.prototype.concat()");

// Array.prototype.map()
measurePerformance(() => {
  const copy = largeArray.map((x) => x);
}, "Array.prototype.map()");
