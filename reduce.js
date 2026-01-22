let arr = [10,2,3,4,5]

let totalVal = 0;

for (let i = 0; i < arr.length; i++) {

    totalVal = totalVal + arr[i]
    
}

console.log(totalVal);

let totalVal1 = arr.reduce((acc,cElement,index,arr) => {
    return acc+cElement
},0)

console.log(totalVal);

let employees = [
    {empName:"tariq" , salary:10000},
    {empName:"irfan" , salary:20000},
    {empName:"saleem" , salary:30000},
    {empName:"harish" , salary:40000}
]

let calSalary = employees.reduce((acc,cElement) => {
    return acc+cElement.salary
},0)

console.log(calSalary);
