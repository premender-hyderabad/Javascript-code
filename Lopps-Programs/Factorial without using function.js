// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    document.writeln('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    document.writeln(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    document.writeln(`The factorial of ${number} is ${fact}.`);
}