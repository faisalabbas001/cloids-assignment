//  Question 1
//  in this code me using that a function in function me used that the array as arguments
//  and using the filter method to set the condition its word start with 'a'
function filterWords(words) {
    return words.filter(word => word.startsWith('a'));
}
const words = ['apple', 'banana', 'avocado', 'orange'];
const filteredWords = filterWords(words);
console.log(filteredWords);
// Question 2
// in this code me declare the array and set the condition then fruits.length is greater 
// than 2 the in length decrease the length of fruits 
let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
let secondToLast = fruits[fruits.length - 2];
console.log("Second to last element:", secondToLast);
// Question 3
// in this code me using that the function and in function me add the parameters as array
//  in function me using the map method to set the condition is num is multiple is num
//  so you see that the output 
function squared(nums) {
    return nums.map(num => num * num);
}
const data = squared([1, 2, 3, 4, 5, 6, 7]);
console.log(data);
// Question 4
// in this code me using that declare the function and give as parameter and using the 
// for loop its totaly reverse the array length in using the push method 
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
const originalArray = [1, 2, 3, 4, 5];
console.log(reverseArray(originalArray));
// Question 5
// in this code me declare the function and in function me made the logic is that using foreach
//  method and using the condition if and else to find the maximum and minimum score in this code 
function countExceedsAndBelow(scores) {
    let max = scores[0], min = scores[0], exceeds = 0, below = 0;
    scores.forEach(score => {
        if (score > max) {
            max = score;
            exceeds++;
        }
        else if (score < min) {
            min = score;
            below++;
        }
    });
    console.log("Exceeded maximum score count:", exceeds);
    console.log("Fell below minimum score count:", below);
}
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countExceedsAndBelow(scores);
// Question 6
//  in this code me declare the function and in function that me using the filter method 
//  and in function me using the argument as null bolean string number and me remove the all 
//  null and undefined value only show that valid data types 
function removeFalseyValues(arr) {
    return arr.filter(value => !!value);
}
// Example usage:
const array = [false, null, 0, "", undefined, NaN, 42, "hello"];
const filteredArray = removeFalseyValues(array);
console.log(filteredArray); // Output: [42, "hello"]
// Question 7
//  in this code me using that the spread operator to concatenation to two array 
const firstarr = [1, 2, 3, 4, 5];
const secondarr = [6, 7, 8, 9, 10];
const thirdarr = [...firstarr, ...secondarr];
console.log(thirdarr);
// Question 8
// in this code me declare the sumof Elements function and in function and 
//  set the condition if the type of arr and is even or odd its check that the even 
//  odd number and give the sum of thease number 
function sumOfElements(arr, type) {
    return arr.reduce((acc, curr) => {
        if ((type === "even" && curr % 2 === 0) || (type === "odd" && curr % 2 !== 0)) {
            return acc + curr;
        }
        else {
            return acc;
        }
    }, 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of even numbers:", sumOfElements(numbers, "even"));
console.log("Sum of odd numbers:", sumOfElements(numbers, "odd"));
// Question 9
//  in this code me using the logic is that the using for loop and in for loop me using 
//  condition and if the condition is match that the ouput is right showed that 
function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
let arr = [1, 2, 3, 4, 5];
console.log(findIndex(arr, 3));
console.log(findIndex(arr, 6));
// Question 10
//  in this code me using that the logic is that if conditon is array kenth is equal to 0
//  its throw an error and the check match the all values of all array if its value is 
// small then show the small value 
function findSmallestNumber(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let smallest = arr[0]; // Assume the first element is the smallest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]; // Update smallest if a smaller number is found
        }
    }
    return smallest;
}
// Example usage:
const num = [4, 2, 7, 1, 9, 5];
console.log(findSmallestNumber(num)); // Output: 1
export {};
