/* Creating Promises */
const datingPromises = new Promise((resolve, reject) => {
  // resolve("Ketemu jam 8 di Coffe! :D");
  reject("Ga jadi, karena dia nge date sama cowok lain :'(");
});

// console.log(datingPromises);

/* Handling Promises */

// Chaining Promises
datingPromises.then(console.log).catch(console.error);
