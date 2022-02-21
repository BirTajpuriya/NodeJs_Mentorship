
// Code start here
// function newPromise(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("success");
//         },2000)
        

//     })
// }

// newPromise().then((data)=>{
//     console.log(data);
// })

// code ends 


//code start here


//code start here
// async function  doInput(){
//     return 5;
// }
// console.log(doInput());
// doInput().then((data)=>{
// console.log(data);
// })

// async function result(){
//     let output=await doInput();
//     console.log(output);
// }
// result();

//code ends here

function display(){
    return 3;
    // console.log('this is display function');
}

console.log('hello');
async function hello(){
console.log('this is node js class');
let item=await display();
console.log(item);
}
hello();
console.log('this is outside the block');


