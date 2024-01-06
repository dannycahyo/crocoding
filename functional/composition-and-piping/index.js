function pipe(...funcs) {
  return function piped(v) {
    return funcs.reduce((prevFunc, fn) => {
      return fn(prevFunc);
    }, v);
  };
}

const compose = (...funcs) => {
  return function composed(v) {
    return funcs.reduceRight((prevFunc, fn) => {
      return fn(prevFunc);
    }, v);
  };
};

const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const square = (x) => x * x;
const half = (x) => x / 2;

const doubleThenSubtractOneThenSquare = compose(
  square,
  subtractOne,
  half,
  double,
);

console.log(doubleThenSubtractOneThenSquare(6));

const trim = (str) => str.trim();
const formatToLowerCase = (str) => str.toLowerCase();
const replaceSpacesWithDashes = (str) => str.replace(/ /g, "-");

const createSlugWithCompose = compose(
  replaceSpacesWithDashes,
  formatToLowerCase,
  trim,
);
const createSlugWithPipe = pipe(
  trim,
  formatToLowerCase,
  replaceSpacesWithDashes,
);

const str = "  JavaScript Function Composition  ";
console.log(createSlugWithCompose(str));
console.log(createSlugWithPipe(str));
