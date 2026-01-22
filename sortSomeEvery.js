// let  arr = [10,5,100,30,6,2]

// arr.sort((a,b) => {return a-b}) // a-b is used for sort in ascending order
//                                 // a-b = positive => swapping
//                                 // a-b = negative => noswapping

// console.log(arr);


// let newArr = [10,20,30,1,4,true,"100"]

// let desSort = newArr.sort((a,b) => { return b-a})

// console.log(desSort);


// Some & Every  -> some like logical or nd every like logical and


let arr1 = [1,2,3,4,5]

let value = arr1.some((ele,ind,arr) => {
    return ele%2 == 0
})


let value1 = arr1.every((ele,ind,arr) => {
    return ele%2 == 0
})

console.log(value, value1);
