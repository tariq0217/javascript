let button1 = document.getElementById("listner")
let button2 = document.getElementById("handler")

// button1.addEventListener("click",function(){
//     console.log("First Listner");
    
// })
// button1.addEventListener("click",function(){
//     console.log("Second Listner");
    
// })
// button1.addEventListener("click",function(){
//     console.log("Third Listner");
    
// })

// button2.onclick = function(){
//     console.log("First Handler");

// }
// button2.onclick = function(){
//     console.log("Second Handler");

// }

// // function firstHandler() {
//     // console.log("First Handler");
    
    
// // }

// // function secondHandler() {
// //     console.log("Second Handler");
    
    
// // }

let image = document.querySelector("img")
let para = document.querySelector("p")

image.addEventListener("mouseover",function(){
    image.src = "img-2.jfif"
    para.innerText = "The fastest"
})
image.addEventListener("mouseout",function(){
    image.src = "img-3"
    para.innerText = "naked sport"

})