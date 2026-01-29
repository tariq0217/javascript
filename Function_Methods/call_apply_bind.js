// this is used for use a another object for a temporary variable / just for access

// let employee = {
//     eName : "tariq",
//     eSal:1000,
//     introYoueself : function(a,b){
//         console.log(a+b+ this.eName);
//         // console.log(this.eName);  //this -> in norml funciton It points / refers current object
        
        
//     }
// }



// console.log(employee.eName);
// employee.introYoueself(10,20);

// var eName = "Saleem"

// let employee1 = {
//     eName : "tariq",
//     eSal:1000,
//     introYoueself : (a,b) => {
//         console.log(this.eName);
//         // console.log(this.eName);  //this -> In arrow function it points / refers global object
        
        
//     }
// }


// employee1.introYoueself(10,20)
let person = {
    perFName : "Mohammed",
    perLName : "Shafeek"
}
let person1 = {
    perId : "UQI123",
    perFName : "Mohammed",
    perLName: "Tariq",
    introYourself : function (a,b) {
        
        console.log(this.perFName+ " "+ this.perLName + (a+b));
        return (a+b)
        
        
    }
}

person1.introYourself.call(person,10,20) 
person1.introYourself.apply(person,[100,200]) // in apply method we shoud give the parameters values in array


let newFun = person1.introYourself.bind(person,100,200)
console.log(newFun());
