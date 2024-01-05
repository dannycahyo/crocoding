// MUTATION

const userPhoneNumbers = ["08597379947", "0850508305"];
userPhoneNumbers.push("0813949759");
console.log(userPhoneNumbers);

const userData = {
  name: "John Doe",
  age: 20,
  school: "SMK Negeri 2 Kraksaan",
};
userData.school = "SMAN 1 Probolinggo";

// NO MUTATION
const userPhoneNumbers2 = ["08597379947", "0850508305"];
const newUserPhoneNumbers2 = [...userPhoneNumbers, "0813949759"];

const userData2 = {
  name: "John Doe",
  age: 20,
  school: "SMK Negeri 2 Kraksaan",
};
const newUserData = { ...userData, school: "SMAN 1 Probolinggo" };
