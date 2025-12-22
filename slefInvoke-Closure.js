// function normalFun(){
//     console.log("Executed whenevr i called");
    
// }

// normalFun();

// (function (uName ,age){
//     console.log("Self Invoked Functoion" + uName+age);
    
// })("Tariq" , 19)

//CLOUSER

function outerFunction(){
    let outerVar = "I am from outer stage"

    function innerFunction(){
        console.log(outerVar);
        
    }
    return innerFunction
}

let innerFun = outerFunction();
innerFun()