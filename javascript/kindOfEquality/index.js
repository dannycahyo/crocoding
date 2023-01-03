// Javascript Equality Of Values
console.log("7" == 7, "first conditon");
console.log(NaN === NaN, "second conditon");
console.log(-0 === 0, "third conditon");
console.log([] == "", "fourth conditon");

/*
Sekilas kita bakal ngira =>
false first conditon
true second conditon
false third conditon
false fourth conditon
*/

/*
JS Comparison |>

Strict Equality: a === b (= 3 kali).

Loose Equality: a == b (= 2 kali).

Same Value Equality: Object.is(a, b).

*/
