let fruits = ["Apple" , "Watermelon", "Muskmelon", "Banana"]

// fruits.forEach(printFruit)

// function printFruit(currentElement , index , totalArray ) {

//         console.log(currentElement,index,totalArray);
        
// }

// fruits.map( function(currentEle , ind , totalArr){
//     console.log(currentEle,ind,totalArr);
    
// })

// let newArr = fruits.forEach(cElement => {
//     console.log(cElement.toUpperCase());
    
//     return cElement                          //it doesn't return the value
    
// });

// let newArr1 = fruits.map((cElement , index) => {  //it returns the value

//     return { id: index , fruit:cElement}
    
// });

// console.log(newArr);
// console.log(newArr1);


//Chaining Method

// let newArr = fruits.map( cEle => cEle.toUpperCase()).sort().fill("123")
// console.log(newArr);


// let newArr1 = fruits.forEach( cEle => cEle.toUpperCase())
// console.log(newArr1);

//Condition Based Statement

let newArr2 = fruits.map( (cEle )=> { return cEle == "Apple"})
console.log(newArr2);


let newArr3 = fruits.forEach( val => console.log( val == "Apple"))
