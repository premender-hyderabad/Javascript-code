// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    document.writeln("The number is positive");
}

// check if number is 0
else if (number == 0) {
  document.writeln("The number is zero");
}

// if number is less than 0
else {
     document.writeln("The number is negative");
}