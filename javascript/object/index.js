const joko = {
  sayHelloToTheWorld: function () {
    console.log("Hello, world!");
  },
  name: "Joko Andreas",
  lastName: "Saputro Purnomo",
  age: 42,
  getFullName: function () {
    return `${this.name} ${this.lastName}`;
  },
};

joko.sayHelloToTheWorld();

console.log(joko.getFullName());

joko["name"] = "Danny";

console.log(joko.getFullName());
