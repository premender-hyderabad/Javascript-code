// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {
    const result = i * number;
    document.writeln(`${number} * ${i} = ${result} <br/>`);
}