let employees = [
    {empName:"tariq", salary:50000},
    {empName:"saleem", salary:40000},
    {empName:"irfan", salary:30000}
]

let filterData = employees.filter( (val,index,array) => {
    console.log(index);
    
    return val.salary > 31000
})
// let filterData = employees.filter( val => val.salary > 31000).fill({id:1, name:"xyz"})


// employees.filter( val => console.log(val))

console.log(filterData);


//find method 

let filterDataByFind = employees.find((val,index,array) => {
    console.log(index);
    
    return val.salary>20000
})

console.log(filterDataByFind);   //the execution is stop after the condition is satisfy it exactly print 1st time the value occur
