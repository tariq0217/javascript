let person1 = {
    name : "tariq"
}

let empId ;
let newId =  empId || 3214;
console.log(newId);

function printUserName(uName = "tariq", uAge = 18){

    // if (uAge <= 20)
    console.log(`hi ${uName} , your age is ${uAge}` );
    
}

printUserName("tariq" , 19)
printUserName("aslm" , 13)
printUserName("harish" , 20)
printUserName()