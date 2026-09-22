function checkTemperature(Temperature){
    let message="";
    if(Temperature < 20){
        console.log("It's cold here");
    }

    else if(Temperature > 20 && Temperature < 30) {
        console.log("Calm dowm it's normal temperature");
    }

    else{
        console.log("Ohh shitt!! it's hot ");
    }
    return message;
}

checkTemperature(45);