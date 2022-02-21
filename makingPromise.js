let container=['daal','watery','salt'];
let makeDaal=new Promise((resolve,reject)=>{
    if(container.includes('daal')&&container.includes('water')){
        resolve("daal can be made");
    }
    else{
        reject('failed to make daal, sorry la');
    }
})

makeDaal.then((data)=>{
    console.log(data);
}).catch((dataFailed)=>{
console.log(dataFailed);
});