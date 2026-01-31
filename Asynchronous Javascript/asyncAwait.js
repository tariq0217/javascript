let newPromise = new Promise( (fullfilled,failure) => {
    let dataReceived = false
    if(dataReceived){
        fullfilled("Data fetched succesfully")
    }
    else{
        // failure("Data not found")
        throw new Error ("Search proper Data")
    }
} )

// newPromise.then( (message) => {console.log(message);
// } )

async function executePromise(){
    
    try{
        
        let message = await newPromise
        
        let newMessage = await newPromise

        console.log(message);

        console.log("NextMessage:"+newMessage);
        
    }
    catch(error) {
    
        console.log(error.message);
        
    
    }
    
    finally{
        console.log("End");
        
    }
}

executePromise()

console.log("Last");
