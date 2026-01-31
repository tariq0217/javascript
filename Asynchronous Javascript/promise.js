let newPromise = new Promise( (resolve,reject) => {
    let dataReceived = true;
    if(dataReceived){
        resolve("Data received")

    }
    else{
        reject("Data not received")
    }

})
//then -> resolve
//catch -> reject
newPromise.then( (message) => {
    console.log("Success:" + message);
    return "Next Success:" + message
    
} ) 
.then( (nextMessege) => {console.log(nextMessege);
} )
.catch((error) => {
    console.log("Failure:" + error);
    
})
.finally( () => {
    console.log("End");
    
})

//Call Back Hell

// function fetchProf (successCallBck, errorCallBack){
//     let dataReceived = true;

//     if(dataReceived){
//         successCallBck("Data received");
        

//     }
//     else{
//         errorCallBack("Data not received");
        
//     }
// }

// fetchProf( (message) => {console.log("Success:"+ message);
            
//         fetchProf( (nextMessege) => {console.log("Next Messege:" + nextMessege);
//         },
//                     (nextError) => {console.log("Next Error:" + nextError);} )
// },
//              (error) => {console.log("Error:"+ error);
//              } )