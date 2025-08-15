// The slow, classic recursive way
function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  // Each call makes two more calls
  return fib(n - 1) + fib(n - 2);
}

// Trying to run this for a number like
// 40 will be PAINFULLY slow.
console.time('Slow Fib');
fib(40);
// This would take several seconds!
console.timeEnd('Slow Fib');

// The fast, memoized way
function memoizedFib(
  n: number,
  cache: { [key: number]: number } = {},
): number {
  // 1. If the result is already in our cache,
  // just return it.
  if (n in cache) {
    return cache[n];
  }

  // Base case
  if (n <= 1) {
    return n;
  }

  // 2. If not, calculate it like before...
  const result =
    memoizedFib(n - 1, cache) + memoizedFib(n - 2, cache);

  // 3. ...but before returning, save the result in our cache.
  cache[n] = result;

  return result;
}

// Now, running for 40 is INSTANT.
console.time('Fast Fib');
// Outputs the result almost immediately
console.log(memoizedFib(40));
console.timeEnd('Fast Fib');
