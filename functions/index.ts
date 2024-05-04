// Question 1

// in this code me using the logic is me used the function and in function parameter ma
// passad the array and in function me set the logic is using the reduce method to iterete 
// all the element of array 

function calculateProduct(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    return arr.reduce((acc, curr) => acc * curr, 1);
}

const numbers = [1, 2, 3, 4, 5];
console.log(calculateProduct(numbers)); 

// Question 2

/* in this code me using the logic is me declare the function in function me suppose 
the number and string arr and in function inside me using the filter method 
and store the all value in the variable and call the variable function argument*/

function filterByLength(arr: string[], n: number): string[] {
    return arr.filter((str) => str.length > n);
}
const strings = ["apple", "banana", "orange", "kiwi", "grape"];
const n = 4;
console.log(filterByLength(strings, n)); 

// Question 3

/* in this code me declare the function and in function me let as array and in function me 
using the for of loop using to display the duplication of the array and in for of loop 
me set the condition items has been matched the duplicates items has been pushed */

function findDuplicates(arr: any[]): any[] {
    const duplicates: any[] = [];
    const seen: any = {};

    for (const item of arr) {
        if (seen[item]) {
            duplicates.push(item);
        } else {
            seen[item] = true;
        }
    }

    return duplicates;
}

const array = [1, 2, 3, 2, 4,3,12,12, 5, 1, 6, 7, 7];
console.log("Duplicates found:", findDuplicates(array)); // Output: Duplicates found: [2, 1, 7]

// Question 4

/* in this code me using the simple logic is me declare the function in function paramter
 me let the array and inside the function me using the map method to set the condition 
 is increament 1 number and finally declare the variable in variable me assign the valye 
 and call the function */

function increamentAll(num:number[]){
    return num.map((num)=>num+1)
}
const arr=[1,2,3,4,5,6,7];
console.log("my original array is :",arr)
console.log("the increment the array is that :",increamentAll(arr))

// Question 5

/* in this code me using the simple logic is that declare the function and function let parameter
as array and inside the function me using the for of loop and set the sondition is that 
that items is equal to array then return the count increament and finally me declare the variable 
and in variable me give the all value and call the function */

function countOccurrences(arr: any[], target: any): number {
    let count = 0;
    for (const item of arr) {
        if (item === target) {
            count++;
        }
    }
    return count;
}

const arr1 = [1, 2, 3, 4, 2, 2, 5];
const target = 2;
console.log(`The element ${target} appears ${countOccurrences(arr1, target)} times in the array.`);

// Question 6

/* in this code me using the logic is declare the function and inside the function me using the for loop and check that 
condition is actually array elemnt is grater the value the return the sorted elemnt is false or then return the true 
value and simply call the function values ...*/

function isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; 
        }
    }
    return true; 
}

const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [3, 1, 5, 2, 4];

console.log("Is sorted:", isSorted(sortedArray));
console.log("Is sorted:", isSorted(unsortedArray)); 


// Question 7

/* in this code me decalre the function as formatName and inside the function me using the coditional statement 
then name.length is equal to 0 and the further values then if names.length is equal to 2 then return the and to concate the name
and else that me using the slice method to join all values 
*/
function formatNames(names: string[]): string {
    if (names.length === 0) {
        return "";
    } else if (names.length === 1) {
        return names[0];
    } else if (names.length === 2) {
        return names.join(" and ");
    } else {
        const lastTwoNames = names.slice(-2).join(" and ");
        const remainingNames = names.slice(0, -2).join(", ");
        return `${remainingNames}, ${lastTwoNames}`;
    }
}

const names1 = ["Alice", "Bob", "Charlie"];
const names2 = ["Alice", "Bob"];
const names3 = ["Alice"];

console.log(formatNames(names1)); 
console.log(formatNames(names2)); 
console.log(formatNames(names3)); 


// Question 8


/* in this code me using the simple logic is that me declare the function and function inside me declare the varibale 
and using the formula convert the temprature farnihite to celcuies and function call and set the valeus as the argument */

function fahrenheitToCelsius(tempsFahrenheit: number[]): void {
    const tempsCelsius = tempsFahrenheit.map((tempF) => (tempF - 32) * 5 / 9);
    console.log("Temperatures in Celsius:", tempsCelsius);
}

const fahrenheitTemperatures = [32, 68, 86, 104, 122];
fahrenheitToCelsius(fahrenheitTemperatures);

// Question 9

/* in this code me using the logic is that the declare the function and inside the function me using the for loop 
inside using the if else statement check that minimum and maximum number finally check that average of minimum
and maximim number */

function minMaxAverage(numbers: number[]): { min: number, max: number, average: number } {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }

    let min = numbers[0];
    let max = numbers[0];
    let sum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const num = numbers[i];
        sum += num;
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    const average = sum / numbers.length;

    return { min, max, average };
}
const numeric = [1, 2, 3, 4, 5];
console.log(minMaxAverage(numeric));


// Question 10

/* in this code me using the logic is that declare the function and in function me dealcre varibales the first variable 
is sweap to second variable and second variable is sweap in this first variable and show the results as */

function swapElements(arr: any[], index1: number, index2: number): void {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Indices are out of range");
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


const array3 = [1, 2, 3, 4, 5];
swapElements(array3, 1, 3);
console.log("Array after swapping:", array3); 
