setTimeout(() => {
  console.log(datingPromises);
}, 1001);

/* Handling Promises */

// Satisfy fullfilled promise
datingPromises.then((value) => console.log(value));

// Satify rejected promise
datingPromises.catch((value) => console.log(value));

// Chaining Promises
datingPromises.then(console.log).catch(console.error);
