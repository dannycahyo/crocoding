// SAME EQUALITY
const sevenNumber = 7;
const sevenString = "7";
const threePlusFour = 3 + 4;

console.log(Object.is(sevenNumber, sevenString));

console.log(Object.is(sevenString, threePlusFour));

console.log(Object.is(threePlusFour, sevenNumber));
/* Object.is ga hanya untuk 
ngebandingin object aja */
