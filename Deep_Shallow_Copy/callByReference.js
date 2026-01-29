//CALL BY REFERENCE

let obj1 = {
    name : "Tariq"
}

let arr1 = [1,2,3]

let obj2 = obj1  //obj2 stores the REFERENCE or address of the object1
let arr2 = arr1
console.log(obj1,obj2);
console.log(arr1 , arr2);


obj1.name = "Shafeek"  //it affects both becuse obj1 and obj2 have same reference so they change --> same memory address
obj2.role = "Developer"
arr1[0] = "One"
console.log(obj1,obj2);
console.log(arr1 , arr2);
