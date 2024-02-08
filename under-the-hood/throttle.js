function throttle(callback, delay) {
  let timerID;
  let lastCalledTime = 0;

  const throttledFunction = function (...args) {
    const currentTime = Date.now();
    const timeSinceLastCall = currentTime - lastCalledTime;
    const delayRemaining = delay - timeSinceLastCall;

    if (delayRemaining <= 0) {
      lastCalledTime = currentTime;
      callback.apply(this, args);
    } else {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        lastCalledTime = Date.now();
        callback.apply(this, args);
      }, delayRemaining);
    }
  };

  throttledFunction.cancel = function () {
    clearTimeout(timerID);
  };

  return throttledFunction;
}

async function makeApiRequest(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

// Create a throttled version of the function, limiting it to one call per second
const throttledMakeApiRequest = throttle(makeApiRequest, 1000);

const urls = [
  "http://dummyjson.com/products/1",
  "http://dummyjson.com/products/2",
  "http://dummyjson.com/products/3",
];

// Start an interval that calls the throttled function every 300 milliseconds
let index = 0;
setInterval(() => {
  throttledMakeApiRequest(urls[index]);
  index = (index + 1) % urls.length; // Cycle through the URLs
}, 300);
