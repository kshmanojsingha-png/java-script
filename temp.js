function checkTemperature(temperature){
    let message = " ";
    if ( temperature < 20 ) {
        console.log("Cold");
    }
    else if ( temperature > 20 && temperature < 30 ) {
        console.log("Normal");
    }
    else {
        console.log("Hot");
    }
    return message;
}

checkTemperature(45);