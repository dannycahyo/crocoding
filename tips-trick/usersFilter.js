/* 
const users = [
  "Danny",
  "Aka",
  "Pak Arif",
  "Munir",
  "Damar",
  "Ilham",
  "Samsul",
];
const activeUsers = ["Munir", "Aka", "Damar"];

const result = users.filter((user) => {
  return activeUsers.includes(user);
});

console.log(result);
*/

const users = [
  "Danny",
  "Aka",
  "Pak Arif",
  "Munir",
  "Damar",
  "Ilham",
  "Samsul",
];
const activeUsers = new Set(    
  ["Munir", "Aka", "Damar"]
);

const result = users.filter((user) => {
  return activeUsers.has(user);
});
console.log(result);
