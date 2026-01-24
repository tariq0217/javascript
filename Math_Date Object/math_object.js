//Math.abs(x)
//it converts negative to positive and give absolute value
console.log( Math.abs(50));
console.log( Math.abs(0));
console.log( Math.abs(-50));

//Math.sign(x)
//it is used to find a sign pos or neg or 0
console.log( Math.sign(10));
console.log( Math.sign(0));
console.log( Math.sign(-10));

//Math.sqrt
console.log( Math.sqrt(25));

//Math.cbrt
console.log(Math.cbrt(27));


// Math.pow(base,exponent)

console.log(Math.pow(2,7));

//Math.min(...values)

let arr = [1,2,3,4,5]
console.log(Math.min(...arr));

//Math.min(...values)

let arr1 = [1,2,3,4,5]
console.log(Math.max(...arr1,100,50));

//Math.random()
let randomNum = Math.random();
console.log(randomNum.toFixed());

//Math.ceil()
//it gives the nearset greater rounded value 2.7 -> 3
console.log(Math.ceil(9.8));


//Math.floor()
//it gives the nearset smaller  rounded value 2.7 -> 2
console.log(Math.floor(9.8));

//Math.round

console.log(Math.round(2.7)); //-> 3
console.log(Math.round(2.4));// ->2

//Math.trunc(x)

console.log(Math.trunc(2.999999999)); //-> it removes the decimal value ->2

