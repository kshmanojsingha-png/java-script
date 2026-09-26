let arr = ["Rahul", "Amit", "Priya", "Neha", "Rohan"];

console.log("Element at 4th Index:", arr[4]);

console.log("Element at 3rd Index:", arr[3]);

arr[2] = "Umama";
console.log("After updating 2nd Index:", arr);

arr.push("Ankit");
console.log("After inserting at end:", arr);

arr.unshift("Karan");
console.log("After inserting at front:", arr);

arr.pop();
console.log("After removing from end:", arr);

arr.shift();
console.log("After removing from front:", arr);