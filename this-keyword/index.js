// Uncomment the line below to see the effect of "use strict" on the "this" keyword
// "use strict";

// This in Global Scope =============================
console.log(this);

function logThis() {
  console.log(this);
}

const arrowLogThis = () => {
  console.log(this);
};

logThis();

// This in Objects ===================================
const obj = {
  str: "Hello",
  logThis,
};

obj.logThis();

// This in event listeners ===========================
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this);
});

// This in Classes ===================================
class MyClass {
  constructor(name) {
    this.name = name;
    console.log(this);
  }

  logThis() {
    console.log(this);
  }
}

const myClass = new MyClass("John");
myClass.logThis();
