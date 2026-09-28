function findNumber(numbers,target){
    let result;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]==target){
            result="Found";
            break;
        }
        else if(numbers[i]<0){
            continue;
        }
        else{
            result="Not Found";
        }
    }
    return result;
    
}
console.log(findNumber([-5,10,-2,7,20],7));
