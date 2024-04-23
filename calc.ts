class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage
const calculator = new Calculator();
console.log("Addition:", calculator.add(5, 3)); // Output: 8
console.log("Subtraction:", calculator.subtract(5, 3)); // Output: 2
console.log("Multiplication:", calculator.multiply(5, 3)); // Output: 15
console.log("Division:", calculator.divide(6, 3)); // Output: 2
