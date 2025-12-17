//IF Statement

/*
if( cond){
    statement
}
*/

// let uAge = 25;
// if (uAge >= 18){
//     console.log("He is eligible to Vote");
// }

//IF-ELSE Statement

/*
 if (){
 statement
 }

 else{
    statement
    }

*/


// let uAge = 17;

// if (uAge >= 18)
// {
//     console.log("He is Eligible to Vote");
    
// }
// else{
//     console.log("He is not eligible to");
    
// }

// let pswd_input = true;

// if(pswd_input){
//     console.log("Welcome to Website");
    
// }
// else{
//     console.log("Incorrect Password");
    
// } 


//if else if

/* let hour = 0;

if(hour >= 1 && hour <=6){
    console.log("Early Morning");
    
}

else if(hour >= 7 && hour <=12){
    console.log(" Morning");

    
}

else if(hour >= 13 && hour <=18){
    console.log("Noon");
    
}
else if(hour >= 19 && hour <=24){
    console.log("Night");
    
}

else{

    console.log("It is an invalid hour");
    
}

let mark =60 ;

if (mark >= 40 && mark <= 60){
    console.log("E - Grade");
    
}

else if (mark >= 61 && mark <= 80){
    console.log("C - Grade");
    
}
else if (mark >= 81 && mark <= 90){
    console.log("B - Grade");
    
}

else if (mark >= 91 && mark <= 100){
    console.log("A - Grade");
    
}

else{
    console.log("Arreae");
    
}
*/

///SWITCH Statement
/*let trafficLight = "green";

switch(trafficLight){
    case "Red" : console.log("Stop");
    break;
    case "Yellow" : console.log("Go Slow");
    break;
    case "Green" : console.log("Go");
    break;
    default : console.log("Pay Fine");
    break;
    
}
*/

/* //Fall through Method
let day = "Monday";

switch (day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday": console.log("Weekday");
    break;
    case "Saturday":
    case "Sunday": console.log("Weekend");
    break;

    
    
}

*/

//Nested If
let age = 17;
let height = 190;
let weight = 45;


if (age >= 18){
    if(height >= 150){
        if (weight>=45) {
            
            console.log("You are Selected");
            
        }
        else{
            console.log("Weight is not matched");
            
        }

    }
    else{
        console.log("Height is not Matched");
        
    }
}
else {
    console.log("Age is not Valid");
    
}