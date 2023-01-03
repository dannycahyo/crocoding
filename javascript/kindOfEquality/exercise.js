// EXERCISE EQUALITY
let fingernails = "mustache";
let toes = fingernails;
let nose = "must" + "ache";

console.log(fingernails === toes);
console.log(fingernails === nose);
console.log(nose === toes);

let tomato = {};
let oregano = tomato;
let potato = {};
tomato = {};

console.log(tomato === oregano);
console.log(potato === tomato);
console.log(oregano === tomato);

const tree = {};
const water = tree;
const stone = {};

console.log(tree === water);
console.log(tree === stone);

let ticket = { id: 0 };
if (ticket == { id: 0 }) {
  console.log("Bad ticket");
}

let ticketId = 0;
if (ticketId === 0) {
  console.log("Bad ticket");
}

let tea = function () {
  return 0 / 0;
};
let coffee = function () {
  return 0 / 0;
};
let matcha = tea();
let latte = coffee();

console.log(matcha === latte);
console.log(Object.is(matcha, latte));
