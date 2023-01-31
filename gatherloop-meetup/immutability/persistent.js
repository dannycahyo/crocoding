const zoos = [
  "motak",
  "kelinci",
  "panda",
  "beruang",
  "gurita",
  "kodok",
  "harimau",
  "koala",
];

const newZoos = zoos.map((zoo) => (zoo === "kelinci" ? "Aliens" : zoo));

// ["motak", "Aliens", "panda", "beruang", "gurita", "kodok", "harimau", "koala"];
