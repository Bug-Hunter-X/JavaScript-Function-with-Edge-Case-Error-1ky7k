function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect: should handle this edge case differently
  }
  return a / b;
}

console.log(foo(10, 0)); // Throws an error
console.log(foo(0, 10)); // Throws an error
console.log(foo(10, 2)); // Returns 5