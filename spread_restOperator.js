// // let hobbies = ["cricket" , "football" , "ff"]

// // let hobbies1 = ["movies" , "song"]

// // let newArr = [...hobbies, ...hobbies1]
// // console.log(newArr);


// //Object

// let empDet = {
//     empId : "IQ123",
//     empName : "Tariq",
//     empRole : "React"
// }

// let temp = {
//     ...empDet, empId: "IQ098", empSal : 10000, empDeg : "FS"
// }

// console.log(temp);


function restParam(a,b,...arr){
    console.log(a,b,arr);
    
}

restParam(1,2,3,4,5,6)
