// let userProfile = {
//     userName : "tariq",
//     age : 19,
//     hairColor : "Black",
//     eyeColor : "blue",
//     eat : function(){
//         console.log("I m gonna eat ice cream ");
//         return "Choco"
//     }
// }

// console.log(userProfile.hairColor);
// let iceCreamTye = userProfile.eat();
// console.log(iceCreamTye);

// let vehicle = {
//     "vehicleType" : "twoWheeler",
//     "price" : 20000,
//     fuelType : "petrol" ,
//     "seater Type" : ["two" , "three" , "Four"]
// }

// console.log(vehicle.vehicleType);
// console.log(vehicle["vehicleType"]);
// console.log(vehicle["fuelType"]);
// console.log(vehicle["seater Type"]);
// console.log(vehicle["seater Type"][2]);

//Softhand Assigned property 

let uName = "Tariq";
let age = 19;

// let person1 = {
//     uName,
//     age,
// }

// console.log(uName , age);


//Dynamic property

let dynamicProperty = "empId";

let person1 ={
    uName,
    age,
    ["dynamicProperty"] : "Ifsc234",
    [dynamicProperty] : "uidh"

}

console.log(person1.uName , person1.age , person1.dynamicProperty , person1[dynamicProperty] );
