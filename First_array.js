// First array in class 

const colors = ["Red", "Green", "Blue"];
colors[0] = "Yellow";

console.log(colors[colors.length - 1]);
console.log(colors[0]);
console.log(colors[5]);

// Using push = It removes the element  

const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);


// Using pop = It remove the first element from the array  

const num = [10, 20, 30, 40]

const remove_item = num.pop();

console.log("Removed:", remove_item);
console.log("Remaining arrays:",num);

// Using Unshift = It add the element in the first index

const numb = [10, 20, 30];

numb.unshift(5);

console.log(numb);

// Using shift = It removes the element from the first index

const nos = [5, 10, 20, 30];

const removed_first = nos.shift();

console.log("Removed:", removed_first);
console.log("Remaining array:", nos);