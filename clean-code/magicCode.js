// ======= MAGIC NUMBER ======= //

function calculateCircleArea(radius) {
  return 3.1415 * radius * radius;
}

const file = {
  name: "file1",
  size: 1000,
};

if (file.size > 5242880) {
  console.log("File is too large");
}

// ======= MAGIC STRING ======= //

function checkUser(user) {
  if (user.role === "personal") {
    console.log("You can access the page");
  }
}

function handleErrors(error) {
  if (error.code === "503") {
    console.log("Not found");
  }
}
