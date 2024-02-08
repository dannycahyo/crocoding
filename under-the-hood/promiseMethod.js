Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let resolvedCounter = 0;
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          resolvedCounter++;
          if (resolvedCounter === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 300);
});

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected promise");
  }, 1000);
});

Promise.myAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.myRace([promise1, promise2, promise3, rejectedPromise]).then(
  (value) => {
    console.log(value);
  },
);
