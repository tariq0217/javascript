//Date.getFullYear()

let date = new Date()
// console.log(date);
// console.log(date.getFullYear());

// //Date.getMonth()

// console.log(date.getMonth()+1); // it take index months if  we want 8 month means add+1

// //Date.getDate()
// console.log(date.getDate());

// //Date.getHours()
// console.log(date.getHours());


// // //Date.setFullYear(year,month,day)
// // date.setFullYear(2022,1,24)
// // console.log(date);

// //Date.setMonth(month,day)
// date.setMonth(7,2)
// console.log(date);  // we need to give index for months if 8 month means give 7

//To Methods

console.log(date.toLocaleDateString()); //it gives the local our indian timing date and time
console.log(date.toDateString()); 
console.log(date.toLocaleString()); 
console.log(date.toLocaleTimeString()); 
