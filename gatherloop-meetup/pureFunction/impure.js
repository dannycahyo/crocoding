function getDate() {
  return new Date().toDateString();
}

const date = getDate();

let num = 0;

function incrementByOne() {
  return num++;
}

const result = incrementByOne();

function addNumbers(x, y, z) {
  let total = x + y + z;
  console.log(total);
}

function extraNumbers(x = 2, ...args) {
  return addNumbers(x, 40, ...args);
}

extraNumbers(3, 3);
