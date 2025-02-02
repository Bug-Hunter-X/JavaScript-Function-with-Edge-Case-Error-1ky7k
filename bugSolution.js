function foo(a, b) {
  if (a === 0 || b === 0) {
    return NaN; // Correct: Handles the edge case of division by zero
  }
  return a / b;
}

console.log(foo(10, 0)); // Returns NaN
console.log(foo(0, 10)); // Returns NaN
console.log(foo(10, 2)); // Returns 5