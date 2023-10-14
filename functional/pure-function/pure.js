/*
A pure function has two characteristics:

- No Side Effects: A pure function has no effect 
on the program or the world besides outputting its return value

- Deterministic: Given the same input values, 
a pure function will always return the same output. 
This is because its return value depends only on 
its input parameters, and not on any other information 
*/

const multipyBy2 = (x) => x * 2;
const four = multipyBy2(2);
console.log({ four });
const eight = multipyBy2(four);
console.log({ eight });

function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log(doubledNumbers);

function joinStrings(strings, separator) {
  return strings.reduce((acc, string) => acc + separator + string);
}

const strings = ["hello", "world", "how", "are", "you"];
const joinedString = joinStrings(strings, " |> ");
console.log(joinedString);
