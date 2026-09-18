var unit="355";
if(unit<=100){
    console.log("Low usage");
}
else if(unit<=300){
    console.log("Medium usage");
}
else{
    console.log("High usage");
}



let loggedIn="yes";
let active="yes";
if(loggedIn==="yes" && active==="yes"){
    console.log("Access allowed");
}
else if(loggedIn !=="yes"){
    console.log("Please log in");
}
else{
    console.log("Contact Support");
}