// user input
import inquirer from "inquirer";
console.log("***MY CALCULATOR ***");
let answer = await inquirer.prompt([
    {
        name: "Number1",
        type: "number",
        message3: "Enter your First number",
    },
    {
        name: "Number2",
        type: "number",
        message3: "Enter your second number"
    },
    {
        name: "operator",
        type: "list",
        message3: "select  operation ",
        choices: ["+", "-", "*", "/"],
    }
]);
// variable decleration
let numbers = answer.Number1;
let numbers1 = answer.Number2;
let opt = answer.operator;
// condition
if (opt === '+') {
    console.log(`The result : ${numbers} ${opt} ${numbers1} = ${numbers + numbers1}`);
    // console.log(answer.numb1+answer.numb2)
}
else if (opt === '-') {
    console.log(`The result : ${numbers} ${opt} ${numbers1} = ${numbers - numbers1}`);
}
else if (opt === '*') {
    console.log(`The result : ${numbers} ${opt} ${numbers1} = ${numbers * numbers1}`);
}
else if (opt === '/') {
    console.log(`The result : ${numbers} ${opt} ${numbers1} = ${numbers / numbers1}`);
}
