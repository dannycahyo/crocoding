/*
const PI = 3.1415;
const MAX_FILE_SIZE = 5242880;
const ADMIN_ROLE = 0;
const SERVICE_UNAVAILABLE_ERROR_CODE = "503";
*/

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

function checkUser(user) {
  if (user.role === 0) {
    console.log("You can access the page");
  }
}

// ======= MAGIC STRING ======= //

function handleErrors(error) {
  if (error === "503") {
    console.log("Do something!");
  }
}
