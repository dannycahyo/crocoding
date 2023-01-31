interface Person {
  name: string;
}

const person: Person = { name: "Danny" } as const;

person.name = "James";

// console.log(person);
