Array.prototype.myMap = function (callbackFn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const result = callbackFn(this[i], i, this);
    newArray.push(result);
  }
  return newArray;
};

const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.myMap((num) => num * 2);

console.log(doubleNums); // [2, 4, 6, 8, 10]

Array.prototype.myFilter = function (callbackFn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const evenNums = nums.myFilter((num) => num % 2 === 0);
console.log(evenNums); // [2, 4]

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let i = initialValue === undefined ? 1 : 0;
  for (; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i], i, this);
  }
  return accumulator;
};

const sum = nums.myReduce((acc, num) => acc + num, 0);
console.log(sum); // 15
