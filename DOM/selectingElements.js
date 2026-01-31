console.log(document);


let heading = document.getElementsByTagName("h1")

console.log(heading);

let para1 = document.getElementsByClassName("para1")

console.log(para1);

let uniqPara = document.getElementById("unique-para")

console.log(uniqPara);


let nameAttri = document.getElementsByName("input-1")

// let selectOne = document.querySelector("h1")
// let selectOne = document.querySelector(".para1")
let selectOne = document.querySelector("#unique-para")



console.log(selectOne.innerHTML);


// let multiElement = document.querySelectorAll("h1")
// let multiElement = document.querySelectorAll(".para1")
let multiElement = document.querySelectorAll("#unique-para")
console.log(multiElement);

let newEle = document.createElement("h2")

newEle.innerText = "manipulating phase"

document.body.append( newEle)

console.log(newEle);
