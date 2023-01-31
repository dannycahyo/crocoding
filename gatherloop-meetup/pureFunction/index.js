function getUserName(user) {
  return user.name;
}

getUserName({ name: "John" }); // 'John'

function sortedSquaredArray(nums) {
  const result = [];

  nums.forEach((num) => {
    result.push(num * num);
  });

  return result.sort((a, b) => a - b);
}

sortedSquaredArray([-4, -1, 0, 3, 10]); // [0, 1, 9, 16, 100]

function getWorkshopDate() {
  return new Date(2023, 0, 14).toDateString();
}

console.log(getWorkshopDate());
