function printHello() {
  console.log("Hello");
}

function sayMeFirst() {
  console.log("Me First!");
}

function printHi() {
  console.log("Hi");
}

function saySecondFirst() {
  console.log("Second First!");
}

setTimeout(printHi, 0);

sayMeFirst();

setTimeout(printHello, 1000);

saySecondFirst();
