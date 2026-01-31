// // //DEEP COPY 
// // let a= 10;
// // let b = a;

// // a=20;

// // console.log(a,b);

// // let obj1 = {
// //     name1 : "Tariq",
// //     role : "Developer"
// // }

// // let obj2 = {...obj1};

// // obj2.name1 = "Shafeek"

// // console.log(obj1 , obj2);


// object - SHALLOW COPY // in nested we change the reference without affect the originall its called shallow




// let person = {
//     name1 : "Jhony",
//     role : "Youtuber",
//     hobbies : {
//         cricket : "t20player",
//         football : "60 mins"
//     }
// }

//deepcopy - object

// let person2 = {...person, hobbies : {...person.hobbies} }

// // let person3 = JSON.stringify( person )

// let newObj = JSON.parse(JSON.stringify(person))

// person.hobbies.cricket = "ipl player"

// console.log(person , person2);




// console.log(newObj);

//array - shallow copy
let arr = [1,2,3,[4,5,6]] // in nested we change the reference without affect the originall its called shallow

let arr1 = [...arr]

//deep copy -array
let newArr = JSON.parse( JSON.stringify(arr) )


arr[0]= "One";
arr[3][0]= "Four";


newArr[3][1] = "Five"


console.log(arr , arr1);
console.log(newArr);

