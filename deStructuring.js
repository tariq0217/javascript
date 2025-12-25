//Array

// let arr = [10,20,30,4,5,6,7,8,9]

// let fVal = arr[0];
// let [a,b,c] = arr;

// let [a,,c] = arr

// //restoperator

// let [a,b,c,...d] = arr
// console.log(a,c,d);


// // nested DeStructure - array

// let arr = [1,2,[10,20,30,[100,200,300,4000]]]

// let [a,b,[a1,b1,c1,[a11,b11,c11,d11]]] = arr

// console.log(a,a1,a11);

//Object Destructuring

// let obj = {
//     id:1,
//     name1:"Tariq",
// }

// let {id , name1} = obj
// console.log(id,name1);


//Nested Destructuring - object

let nestObj = {
    id:1,
    name:"tariq",
    persDet :{
        age:19,
        Degree : "B.E",
        branch : "CSE"
    }
}

let {id , name,persDet:{age,Degree,branch}} = nestObj

console.log(name , age , Degree);
