//creating a function that returns a promise.

function ricePromise(){
    let bucket=['coffee','chips','vegetables','salty','rice'];
// to create a promise
return new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
       resolve("Fried rice"); 
    }
    else{
        // we can make error object here by adding new keyword
        reject("Failed to make fried rice");
        
        // reject(new Error("something is missing from bucket"));
    }
})
}

ricePromise().then((fulfilled)=>{
console.log(fulfilled);
},(failed)=>{
    console.log(failed);
}
)