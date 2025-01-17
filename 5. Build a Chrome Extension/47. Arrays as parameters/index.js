// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(array) {
  if (Array.isArray(array)) {
    return array[0];
  }
  return undefined;
}

// Call it with an array as an argument to verify that it works
console.log(getFirst());
console.log(getFirst([]));
console.log(getFirst([1, 2, 3]));
