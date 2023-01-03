console.log({ age: 1 } == { age: 1 });
console.log({ age: 1 } === { age: 1 });
console.log(Object.is({ age: 1 }, { age: 1 }));

console.log(["Danny"] == ["Danny"]);
console.log(["Danny"] === ["Danny"]);
console.log(Object.is(["Danny"], ["Danny"]));

const foo = () => {
  return "foo";
};
const foo2 = () => {
  return "foo";
};

console.log(foo == foo2);
console.log(foo === foo2);
console.log(Object.is(foo, foo2));
