/* // //Array

// let arr = [10,20,30,40]


// for(let i = 0; i<arr.length ; i++){
// console.log(arr[i]);
// }

// //String

// let str = "javascript";

// for (let i = 0; i<str.length ; i++){
//     console.log(str[i]);
    
// }

*/ 

/*

//For-of loop 

//Array
// let arr = [10,100,1000,10000]

// for (let he of arr){
//     console.log(he);
    
// }

// //string

// let str = "javascript";
// for (let char of str){
//     console.log(char);
    
// }




//function

function* grnFun(){
    yield 1
    yield 2
    yield 3
}

let iterator = grnFun();

for (let val of iterator){
    console.log(val);
    
}

function* genFun(){

    yield "one"
    yield "two"
    yield "three"
}

let iterator1 = genFun();

for (let val1 of iterator1){
    console.log(val1);
    
}


//Object 
in for of we can iterative in object
*/


/*For in loop

//Object 

let person1 = {
    uName : "Tariq",
    age : 19,
    hobbies : ["ff", "crct", "movies"],
    familDet : {
        totalmem : 5,
        siblings : ["a", "b","c","d"]
    },
    walk(){
        console.log("I am goimg to walk ");
        
    }
}

for(let key in person1){
    console.log(person1[key]);
    
}
*/

//Array 

// let arr = [10,20,30,40]

// for (let key in arr){
//     console.log(key);
    
// }


// String 

let str = "java script"

for (let key in str){
    console.log(str[key]);
    
}