// MUTATION => DANGEROUS

const userPhoneNumbers = [08597379947, 0850508305];
userPhoneNumbers.push(0813949759);

console.log(userPhoneNumbers);
// [08597379947, 0850508305, 0813949759];

const userData = {
  name: "John Doe",
  age: 20,
  school: "SMK Negeri 2 Kraksaan",
};

userData.school = "SMAN 1 Probolinggo";
// { name: "John Doe", age: 20, school: "SMAN 1 Probolinggo" };
