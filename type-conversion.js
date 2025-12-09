//Implicit Conversion
/* let str = "45";
let num = 100;

console.log(str + num);
console.log(typeof(str + num));

//string 

// console.log("hi" + true);
// console.log("hi" + null);
// console.log("hi" + [1,2]);
// console.log("hi"+{});

//string + anything == anything + string

//number

console.log(10 + true);
console.log(10 + false);

//true = 1 / false = 0
console.log(10 + undefined);
console.log(10 + null);
console.log(10 + [1,2]);
console.log(10 + {});
console.log(10 + ` `);

*/
//BOOLEAN
console.log(true + 10);
console.log(true + undefined);
console.log(true + null);

console.log(10 == '10');
console.log(10 - ' ');

//Explicit Conversion

console.log(10 + Number("10"));
console.log(10 + Number(" "));
console.log(10 + Number("abc"));
console.log(10 + Number(false));
console.log(10 + Number(undefined));
console.log(10 + Number([3,9]));
console.log(10 + Number({}));


console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean(-10));
console.log(Boolean(null));
console.log(Boolean([2]));
console.log(Boolean({}));


console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean(NaN));








