// CODING — 6 marks | 15 minutes
// JavaScript Coding — Count Even Numbers
// Write a function `countEvenNumbers(numbers)` that returns how many even numbers are present in the array.
// Requirements:
// •	• Use a `for` loop.
// •	• Use `continue` to skip odd numbers.
// •	• Return the final count.
// Example: `countEvenNumbers([3, 8, 11, 14, 20])` should return `3`.
// Teacher scoring note: 6 marks can be awarded across logic/approach (2), correctness/output (2), syntax/structure (1), and use of the requested concepts (1).

function countEvenNumbers(numbers){
    let count=0;
    for(let i=0;i<numbers.length;i++){
            if(numbers[i]%2===0){
                count++;
            }
    }
    return count;
}
let result=countEvenNumbers([3,8,11,14,20]);
console.log(result);

// CODING — 6 marks | 15 minutes
// JavaScript Coding — Find the First Failing Mark
// Write a function `firstFail(marks, passMark = 40)` that returns the index of the first mark below `passMark`.
// Requirements:
// •	• Use a `for` loop.
// •	• Use `break` as soon as the first failing mark is found.
// •	• Return `-1` if no mark is below the pass mark.
// Example: `firstFail([65, 72, 33, 80])` should return `2`.
// Teacher scoring note: 6 marks can be awarded across logic/approach (2), correctness/output (2), syntax/structure (1), and use of the requested concepts (1).


// function firstFail(marks,passMarks=40){

// }
// let result=firstFail([65,72,33,80]);
// console.log(result);


//  Temperature Checker                                                                (DATE - 27/08/2026)

// Create a function:

// ```jsx
// checkTemperature(temperature)
// ```

// The function should return:

// - `"Cold"` if temperature is below 20
// - `"Normal"` if temperature is between 20 and 30
// - `"Hot"` if temperature is above 30

// ### Extra Challenge

// Create a variable **inside the function**:

// ```jsx
// let message = " " ;
// ```

// Use that variable to store the result before returning it.

function checkTemperature(temperature){
    if(temperature<20){
        console.log("Cold");
    }
    else if(temperature > 20 && temperature < 30){
        console.log("Normal");
    }
    else{
        console.log("Hot");
    }
}
checkTemperature(49);