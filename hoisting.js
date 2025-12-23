//VARIABLE DECLARATION HOISTING 

//VAR a
//let b
//const c
var a = 10;

console.log( a );
let b = 20;

console.log(b);

const c = 30;

console.log(c);

//FUNCTION DECLARATION

sample()

function sample (){
    console.log("i am accesible");
    
}

let sample1 = function(){
    console.log("I am access");
    
}
sample1()

let sample2 = () => {
    console.log("access");
    
}

sample2()