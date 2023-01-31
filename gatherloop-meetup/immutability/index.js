// NO MUTATION => SAFE

const userPhoneNumbers = [08597379947, 0850508305];
const newUserPhoneNumbers = [...userPhoneNumbers, 0813949759];

newUserPhoneNumbers;
// [08597379947, 0850508305, 0813949759];

const userData = {
  name: "John Doe",
  age: 20,
  school: "SMK Negeri 2 Kraksaan",
};

const newUserData = { ...userData, school: "SMAN 1 Probolinggo" };
newUserData;
// { name: "John Doe", age: 20, school: "SMAN 1 Probolinggo" };
