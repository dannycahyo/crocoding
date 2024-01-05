const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Doe", age: 35 },
];

// Bad: This modifies the original users array, which is not immutable
for (let i = 0; i < users.length; i++) {
  if (users[i].id === 2) {
    users[i].age = 31;
  }
}

// Good: This creates a new users array with the updated age, which is immutable
const updatedUsers = users.map((user) =>
  user.id === 2 ? { ...user, age: 31 } : user,
);

console.log(users); // Original users array is modified
console.log(updatedUsers); // New users array with updated age

// Bad: This modifies the original users array, which is not immutable
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    users.splice(i, 1);
    i--;
  }
}

// Good: This creates a new users array without the users under 30, which is immutable
const filteredUsers = users.filter((user) => user.age >= 30);

console.log(users); // Original users array is modified
console.log(filteredUsers); // New users array without users under 30
