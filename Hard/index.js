import inquirer from "inquirer";
// Question 1
/* in this code me decalre the function and take as parameter string and cahracter and inside
the function me using the for of loop to matching the character to the string and appear in
character in string finally outside the function me deaclare the function the variable and
asssign the values and call the function */
function countOccurrences(str, char) {
    let count = 0;
    for (const ch of str) {
        if (ch === char) {
            count++;
        }
    }
    return count;
}
const inputString = "hello world";
const inputCharacter = "l";
console.log(`The character '${inputCharacter}' appears ${countOccurrences(inputString, inputCharacter)} times in the string.`);
const todoList = [
    { task: "Do laundry", completed: true },
    { task: "Buy groceries", completed: false },
    { task: "Finish project", completed: false },
];
function logIncompleteTasks(todoList) {
    for (const todo of todoList) {
        if (!todo.completed) {
            console.log(todo.task);
        }
    }
}
logIncompleteTasks(todoList);
// Question 3
/* in this code me decalare the function in function me using the array method is
slice method and outside the function me decalre the variable to store the arrays values
and finally me show that the all array values
*/
function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(sortNumbers(numbers));
// Question 4
/* in this code me  declare the function and inside the function me using the for loop
and in loop me substrict the array length and finally me declare the variable and assign
the values of array finally me call the function */
function logReverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
const array = [1, 2, 3, 4, 5];
logReverseArray(array);
// Question 5
const firstNumberResponse = await inquirer.prompt([
    {
        name: "first",
        type: "input",
        message: "Please enter the first number:",
    }
]);
const secondNumberResponse = await inquirer.prompt([
    {
        name: "second",
        type: "input",
        message: "Please enter the second number:",
    }
]);
const choisesResponse = await inquirer.prompt([
    {
        name: "data",
        type: "list",
        message: "Select operation:",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
const firstNumber = parseFloat(firstNumberResponse.first);
const secondNumber = parseFloat(secondNumberResponse.second);
const choise = choisesResponse.data;
let result;
if (choise === "Addition") {
    result = firstNumber + secondNumber;
    console.log(`The sum of the numbers is ${result}`);
}
else if (choise === "Subtraction") {
    result = firstNumber - secondNumber;
    console.log(`The subtraction of the numbers is ${result}`);
}
else if (choise === "Multiplication") {
    result = firstNumber * secondNumber;
    console.log(`The multiplication of the numbers is ${result}`);
}
else if (choise === "Division") {
    result = firstNumber / secondNumber;
    console.log(`The division of the numbers is ${result}`);
}
