//FOR LOOP

/* for(let i =1 ; i<=10; i++){
    if(i %2 != 0) console.log("i =" + i);
*/

//While LOOP
/*
let num = 1234;
let sum = 0;


while(num > 0){
   let last = num % 10;
   num = parseInt(num / 10);

   sum = sum + last;
    
    
}

console.log(sum);
*/

//DO WHILE

// let num = 30;

// do{
//     console.log(num);
//     num ++;
    
// }
// while( num <= 20)


// for (let i = 0 ; i<=20 ; i++){
//     if(i %2== 0){
//         if(i == 10 ){
//             break;
//         }
//         console.log(i);
        
//     }
// }

for (let i = 0 ; i<=20 ; i++){
    if(i %2== 0){
        if(i == 10 ){
            continue;
        }
        console.log(i);
        
    }
}