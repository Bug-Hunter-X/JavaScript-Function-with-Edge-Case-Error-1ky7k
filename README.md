# JavaScript Function with Edge Case Error

This repository demonstrates a common error in JavaScript functions: the improper handling of edge cases. The `foo` function attempts to divide two numbers but fails to correctly handle the case where either of the inputs is zero, resulting in a division by zero error. The solution shows a more robust way to handle these edge cases.

## Bug

The original `foo` function returns 0 when either `a` or `b` is 0. This is incorrect behavior, as it should ideally throw an error or return `Infinity` or `NaN` depending on the desired outcome. 

## Solution

The corrected `foo` function employs a conditional statement to explicitly check for zero values and return `NaN` in such cases, preventing a runtime error.