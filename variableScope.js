// //VAR - function Scope

// function outerFunction(){
//     if(true){
//     var functionVar = "i am variable";
    
//     }
//     console.log(functionVar);

// }

// outerFunction()

// //VAR , CONST -BLOCK SCOPE

// function blockScope(){
//         let blockScopeVar = "I am block scope";

//     if (true){
//         const blockScopeVar1 = "I am block scope1";
//         console.log(blockScopeVar);

//         console.log(blockScopeVar1);
        
//     }

// }

// blockScope()

// var globalVar = "I am accesible throughout the global context";
// let blockScoped = "i am let var";
// const blockScoped1 = "i am const var";

// console.log(window.globalVar);
// console.log(window.blockScoped);
// console.log(window.blockScoped1);

var a = 10;
var b = 20;
var c = 30;

function accessGlobalLOcalVar(){
    // var a = 101;
    // var b = 202;
    // var c = 303;
    

    function innerFuncion(){
        // var a = 100;
        // var b = 200;
        // var c = 300;
    console.log(a+b+c);

    }
    innerFuncion()
    console.log(a+b+c);



    
}

accessGlobalLOcalVar()

    console.log(a+b+c);
