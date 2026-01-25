let person = {
    pName: "Tariq",
    age : 19
}

// console.log(person);

//Object.crete 
//it is send a another object as a prototype and acces the that object and also acces a our own object

// let newObj = Object.create( person )
// newObj.location = "tamilnadu"
// console.log(newObj.__proto__);
// console.log(Object.getPrototypeOf( newObj));

// console.log(newObj.age)
// console.log(newObj);

//Object.assign
//it is used for merge 2 objects

let person1 = {
    id: "QUI123",
    name1:"Tariq"
}

let newObj1 = Object.assign( person1 , { role: "Front-end" , salary : 100000})

console.log(person1);
console.log(newObj1);


//Object.entries
//it is used to convert keyvalues into array
let employee = {
    eName : "Tariq",
    eRole : "Back-end"
}

let mulArr = Object.entries( employee )
mulArr.push(["name","Saleem"])
console.log(mulArr);

//Object.fromEntries
//it is used to convert back to object from enties 

let normalObject = Object.fromEntries( mulArr)

console.log(normalObject);

//Object.keys
//It is used store a key from object

let onlyKeys = Object.keys( normalObject )

console.log(onlyKeys);

//Object.values 
//it is used to store a values from object

let onlyValues = Object.values( normalObject )

console.log( onlyValues);

//Object.freeze 
//it is used to freeze the object then we can't able to create any new property

let newObj2 = {
    id: 1
}

Object.freeze(newObj2)

newObj2.name1 = "Javascript"
newObj2.id = 3

console.log(newObj2);


//Object.isFrozen
//it is used to check the object is freeze or not

console.log(Object.isFrozen(newObj2));
