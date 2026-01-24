let person = {
    pName: "Tariq",
    age : 19
}

console.log(person);

//Object.crete 
//it is send a another object as a prototype and acces the that object and also acces a our own object

let newObj = Object.create( person )
newObj.location = "tamilnadu"
console.log(newObj.__proto__);
console.log(Object.getPrototypeOf( newObj));

// console.log(newObj.age)
// console.log(newObj);

