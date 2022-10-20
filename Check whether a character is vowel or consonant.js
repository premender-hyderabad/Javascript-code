var input = prompt("Enter a character:")
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') 
{
    document.writeln("Its a vowel");
} 
else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
document.writeln("Its a consonant");
} 
else {
    document.writeln("Invalid input please enter an alphabet");
 }