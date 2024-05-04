// Question 1
//  in this code me using the inquirer to get the input from the user and declare the function calculateArea
// using the formula πr2 and call the function 

import inquirer from "inquirer";
async function calculateArea() {
  let question = await inquirer.prompt([
    {
      name: "input",
      type: "input",
      message: "please enter the radius!..",
    },
  ]);

  let PI: number = 3.1419;
  let raduis = PI * question.input * question.input;
  console.log(raduis);
}

calculateArea(); 

// Question 2
// in this program me using the for loop to repeatedely and me set the condition when the 
// the number is divisble 3 and the divisible 5 print the BUZZ and number is divisible only 3 the 
//  prinit the Fizz and else show the number 

for(let i=0;i<=50;i++){
    if(i%3===0&&i%5===0){
        console.log("Buzz");
    }
    else if(i%3===0){
        console.log("Fizz")
    }
    else{
        console.log(i)
    }
}


// Question 3
// in this code me declare the array and using the for loop and in for loop 
// declare the condition variable max_temp is greater than arr show the highest number show
let arr = [23, 34, 56, 67, 89, 90];
let max_temp = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max_temp) {
        max_temp = arr[i];
    }
}
console.log("The highest temperature is: " + max_temp);

// Question 4
// in this code me using the inquirer to get the input from the user and and declare 
//  main using the set the condition age is equal to 18 to display is major is else is 
// not major 

async function main() {
    let question = await inquirer.prompt([
      {
        name: "input",
        type: "input",
        message: "Please enter the age: ",
      },
    ]);
    
    let age = "18";
  
    if (question.input === age) {
      console.log("You are major.");
    } else {
      console.log("You are not major.");
    }
  }
  
  main();

  // Question 5
  //  in this code me declare the function and function take paramter and return the arr
  // and me add the arguments as array
  const positive=(arr:number[])=>{
return arr;
  }
  positive([12,23,23,12,45])