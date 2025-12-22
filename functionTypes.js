// // //Named Function

// // function add(){
// //     console.log("Named Function");
    

// // }
// // add()

// // //ANONOMOUS FUNCTION

// // let ananFun = function(){
// //     console.log("Ananomous Function");
    
// // }

// // ananFun();// call var name for funcname

// // //ARROW FUNCTIOM

// // let funArrow = () => {
// //     console.log("Arrow function");
    
// // }

// // funArrow();

// let newFun = name1=> console.log(name1);

// newFun("Tariq")


// let firstName = "Harish";

// let  returnFun = name2 => name2 

// let Val = returnFun("Abisheik");

// console.log(Val);



//HIGHER ORDER / CALL BACK 

/*function function1() {
    console.log("I am HO");
    
}

function function2() {
    console.log("I am call back");
    
}
function1(function2())
*/

function add(callback ,a,b) {
    callback(100,200)

    console.log(a+b);
    
    
}

function sub(num1 , num2) {
    
    console.log(num1+num2);

    
}

add(sub , 10,20)