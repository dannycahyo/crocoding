function debounce(callback, delay) {
  let timerID = null;

  return function (...args) {
    if (timerID) {
      clearTimeout(timerID);
    }

    timerID = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const logWithOneSecondDelays = debounce((val) => console.log(val), 1000);
logWithOneSecondDelays("Hello World!");
