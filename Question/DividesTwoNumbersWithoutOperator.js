function divide(a, b) {
    // Handle division by zero
    if (b === 0) {
        return "Division by zero is not allowed";
    }

    // Handle negative numbers by taking their absolute values
    let sign = 1;
    if (a < 0) {
        a = -a;
        sign *= -1;
    }
    if (b < 0) {
        b = -b;
        sign *= -1;
    }

    let quotient = 0;

    // Keep subtracting the divisor from the dividend until the dividend becomes smaller than the divisor
    while (a >= b) {
        a -= b;
        quotient++;
    }

    // Apply the sign to the quotient
    return sign * quotient;
}

console.log(divide(10, 2));  // Output: 5
console.log(divide(-10, 2)); // Output: -5
console.log(divide(10, -2)); // Output: -5
console.log(divide(-10, -2));// Output: 5
