//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

document.writeln(`The value of a after swapping: ${a}`);
document.writeln(`The value of b after swapping: ${b}`);