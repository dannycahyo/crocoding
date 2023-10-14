let four = 0;
const multipyBy2 = (x) => {
  four = x * 2;
  return four;
};
four = multipyBy2(2);
console.log({ four });
const eight = multipyBy2(four);
console.log({ eight });

function doubleNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
  return numbers;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log(doubledNumbers);

let joinedString = "";
function joinStrings(strings, separator) {
  for (const string of strings) {
    joinedString += string + separator;
  }
  return joinedString.slice(0, -separator.length);
}

const strings = ["hello", "world", "how", "are", "you"];
joinedString = joinStrings(strings, " |> ");
console.log(joinedString);
