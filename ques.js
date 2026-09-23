let num=[ 12, 5, 78, 34, 9, 56];
let max=num[0];
let min=num[0];
for( let i=0; i < num.length; i++){
    if( num[i] > max){
        max=num[i];
    }
    if( num[i] < min){
        min=num[i];
    }
}
console.log("Maximum: ",max);
console.log("Minimum: ",min);


let arr=[1, 2, 3, 8, 5];
let issorted=true;
for( let j=0; j < arr.length; j++){
    if (arr[j] > arr[j+1]){
        issorted=false;
        break;
    }
}
if (issorted){
    console.log("Array is sorted");
}
else{
    console.log("Array is not sorted");
}
