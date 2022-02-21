//represents future value
// tyo value jun chai hamlai ahile thaha xaina but coming future ma tha hunxa.
let bucket=['coffee','chips','vegetables','salty','rice'];
// to create a promise
let friedRicePromise=new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
       resolve("Fried rice"); 
    }
    else{
        // we can make error object here by adding new keyword
        reject("Failed to make fried rice");
        
        // reject(new Error("something is missing from bucket"));
    }
})
//upto here, we produce promise.
//now, we have to consume promise.

// then() ma tyo value aauxa, jun resolve gare paschat aauxa.
friedRicePromise.then(
    //jaba promise run hunxa taba yo run hunxa
    (myfriedRice)=>{
console.log("lets eat", myfriedRice);
}
//,
//jaba promise reject/failed hunxa tetibela yo run hunxa.
// (error)=>{
//     console.log(error);
// }
).catch(
    (err)=>{
        console.log(err);

})

// hamle then() bhitra 2 ta condition baare care garya xeu, yadi succed bhaye yo hune, reject/failed bhaye arko hune bhaner 2 ta parameter pass garya xeu.i.e one is for sucees and another for failed.

// but hamle then() bhitra succeed huda k hunxa bhani pani lekhna sakxeu

// ani reject/ failed bhako condition lai .catch() le join gari chaining garna sakxeu.



// promise microtask queue ma add hunxa



