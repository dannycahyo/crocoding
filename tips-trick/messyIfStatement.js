function checkUserRole(user) {
  if (
    user.role === "admin" ||
    user.role === "moderator" ||
    user.role === "superuser" ||
    user.role === "superadmin"
    // what if we have more roles?
  ) {
    return true;
  }
  return false;
}

// Simplified version
function checkUserRole2(user) {
  const roles = ["admin", "moderator", "superuser", "superadmin"];
  return roles.includes(user.role);
}

// Another example
function checkUserAge(user) {
  if (user.age >= 13 && user.age <= 19) {
    return "Teenager";
  }
  if (user.age >= 20 && user.age <= 29) {
    return "Young Adult";
  }
  if (user.age >= 30 && user.age <= 39) {
    return "Adult";
  }
  return "Other";
}

// Simplified version
function checkUserAge2(user) {
  const ageGroups = [
    { name: "Teenager", check: (age) => age >= 13 && age <= 19 },
    { name: "Young Adult", check: (age) => age >= 20 && age <= 29 },
    { name: "Adult", check: (age) => age >= 30 && age <= 39 },
  ];

  for (let group of ageGroups) {
    if (group.check(user.age)) {
      return group.name;
    }
  }

  return "Other";
}
