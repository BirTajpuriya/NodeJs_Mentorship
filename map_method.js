// this method make a new array 
// we can perform certain operation on orginal array and store in another using map
let container=[1,2,3,4,5,6,7];
let new_array=container.map((old_array)=>{
   return old_array*10;
   
})
console.log(new_array);