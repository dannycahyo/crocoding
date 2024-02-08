function flat(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return flatArray(value);
  }

  return flatObject(value);
}

function flatArray(array) {
  return array.reduce((acc, curr) => acc.concat(flat(curr)), []);
}

function flatObject(object) {
  const flatedObject = {};

  for (const [key, value] of Object.entries(object)) {
    const isValueObject =
      typeof value === "object" && value !== null && !Array.isArray(value);

    const flatedValue = flat(value);

    if (isValueObject) {
      Object.assign(flatedObject, flatedValue);
    } else {
      flatedObject[key] = flatedValue;
    }
  }

  return flatedObject;
}

console.log(flatArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));
console.log(flatObject({ a: 1, b: { c: 2, d: { e: 3, f: { g: 4 } } } }));
