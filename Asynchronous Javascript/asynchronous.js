function f1 (){

    console.log("First");
    
}
function f2 (){

    console.log("second");

}
function f3 (){

    console.log("third");
}

f1();
setTimeout( f2 , 2000)
f3();


// call back queue -- > 
//                     micro task queue -> first priority
                           //promise
                        
//                     macro task queue -> second priority
//                       setTimeout
//                      // setInterval