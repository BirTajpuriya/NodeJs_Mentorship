// async and await is way to manage Promise.
// mechanism to handle Promise
//the function with async keyword is always returned Promise

async function makeTea() {
  let container = ["chiyarang", "milk", "bhado"];

  //here we produce the promise
  return new Promise((resolve, reject) => {
    if (container.includes("milk") && container.includes("bhado")) 
    {
        resolve('tea can be made');
    }
    else{
        reject('failed to make tea');
    }
  })
}


// this is where the promise is consumed
// makeTea().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


// alternative way to consume Promise(Using async and await)
async function result(){
    try{
        let output=await makeTea();
        console.log(output);
    }
    catch(e){
    console.log(e);
    }
}
result();



//code start here

// function getItem(){
//     // console.log("this is method");
//     return 4;
// }

// console.log('hello');

// async function display()
// {
//     let item=await getItem();
//     console.log(item);
// }
// display();
// console.log('this is outside the block');

//code ends here


// code start here
// async function getItem(){
// return new Promise((resolve,reject)=>{
//     console.log(10);
// });
// }
// console.log(getItem());
// getItem().then((data)=>{
//     console.log(data);
// })

// async function display(){
// let item=await getItem();
// console.log(item);    
// }
// display();

//code ends here