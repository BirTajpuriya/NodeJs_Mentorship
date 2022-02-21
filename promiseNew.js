let newPromise=new Promise((resolve,reject)=>{
    resolve("this is the pass value");
//    return reject("failed");
});

// newPromise.then((data)=>{
//     console.log(data);
// },()=>{
//     console.log("sorry dear");
// });

async function getvalue(){
    let obj1=await newPromise;
    console.log(obj1);
}
getvalue();
