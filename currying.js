// function add(a,b,c){
//     console.log(a+b+c);
    
// }

// add(100,200,300)

function add(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
            
        }
    }
}

add(100)(200)(300)  //chaining call

let curry1 = add(100);
let curry2 = curry1(200);
curry2(300);