function makeCounter() {
  let count = 0;
  function incrementCount() {
    count++;
  }

  return incrementCount;
}

const counter1 = makeCounter();
counter1();
counter1();
