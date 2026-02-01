function manipulateElements(){
    //creating element
    // let newListElement = document.createElement("li")
    //add content for created element
    // newListElement.innerText = "<a>Link<a/>item-4"
    // newListElement.innerHTML = "<a>Link<a/>item-5"
    // newListElement.textContent = "<a>Link<a/>Item-6"

    let newListElement = document.createElement("li")
    
    
    let input = document.querySelector("input")
    // console.log(input.value);

    //store the input values to newelementss/list
    
    newListElement.innerText = input.value
    
    // console.log(newListElement);

    //to add to the ui 

    let orderList = document.querySelector("ol")
    //append method -> it is added in last
    // orderList.append("Text node ",newListElement) // it consider both text and element node
    // orderList.appendChild(newListElement) //it only consider element node 
    
    //insert Before 

    // orderList.insertBefore(newListElement,orderList.children[2])

    //replace 

    // orderList.replaceChild(newListElement,orderList.children[2])

    //removwe

    // orderList.removeChild(orderList.children[0])

    // orderList.remove()  // remove the element

    //prepand -> it is added in begining / first
    // orderList.prepend("heyy",newListElement)


    //style adding / dynamic cascading -> to manipulate style
    newListElement.style.color = "White"
    newListElement.style.textShadow = "10px 10px 1px blue"
    orderList.appendChild(newListElement) 

}

