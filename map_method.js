// this method make a new array 
// we can perform certain operation on orginal array and store in another using map
// let container=[1,2,3,4,5,6,7];
// let new_array=container.map((old_array)=>{
//    return old_array*10;
   
// })
// console.log(new_array);

//forEach loop ra map ma k pharak xa bhane , forEach loop mainly array ko items iterate garna ka lagi
//use garinxa .. ForEach loop is best alternative to for loop.
//map le iterate garnu ko saath saathai euta New array pani return garxa.

//map ka upyogi huna sakxa bhanda, let euta array xa tyo array ko element haru ma 
// certain operation(increment or decrement) gari kunai naya array ma store garnu parda..
// yesta yestai situation ka laagi map method is best.

//let's see example
let details=[{name:"Ram",salary:1000},
               {name:"Shyam",salary:2000},
               {name:"Suresh",salary:3000}               
]
// console.log(typeof details);// output: object

// using forEach loop
// details.forEach((data)=>{
//   // console.log(data.name);//name will be display
// })

//now using map method

let upDated=details.map((data)=>{
   // console.log(data.name);// name will be display
   data.salary=+100;
  //console.log(items);//output: salary will display with increment of 100
  return data;
})
console.table(upDated);
