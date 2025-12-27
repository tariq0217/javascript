// let arr = [1,2,3,4]
// let arr1 = [4,5,6,7]

// //Concat Method

// let newArr = arr.concat(arr1);
// let newArr1 = arr.concat(10,20,30)


// arr[0] = 11;
// console.log(arr);

/* //Slice method

let newArr = [10,2,3,4,5,6,7]

let slicedVal = newArr.slice()

newArr[0] = 123;

let slicedVal1 = newArr.slice(2,6) //(start,end-1) 2 to 6-1 =5 index

console.log(slicedVal1);
*/


/* /Flat method - remove the nested arrays

let arr = [1,2,3,[4,5,[6,7,[8,9,10,[11,12]]]]]

let newArr = arr.flat(Infinity) //in paranthesis we give the remove the nsted array count 

console.log(newArr);

*/


//fill method

let arr = [1,2,3,4]

arr.fill(101,0,1)
arr.fill(102,1,2)
console.log(arr);
