var a=10;
var b=0;
var operator="/";
if(operator==="+"){
      console.log(a+b);
}
else if(operator==="-"){
      console.log(a-b);
}
else if(operator==="*"){
      console.log(a*b);
}
else if(operator==="/"){
       if(b==0){
            console.log("Cannot be divided by zero");
       }
       else{
               console.log(a/b);
        }
}
else{
        console.log("Invalid operator");
}