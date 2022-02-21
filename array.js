// array is the single element that store multiple values
// 2 ways of array initializing and declaring
//1.const bike=['ducati','yamaha','pulsor','jawa'];
// 2.const bike=new Array("ducati","yamaha","pulsor",'jawa');

// const numbers=new Array(10,20,30,40,50,60); // contains 6 elements with defined elements
// const numbers=new Array(6);// contains 6 elements with undefined elements

// for stroing the num type of data above line no. 6 is better way of doing(preferable for number type of data).
// line no. 7 is better for String and boolean data types.



// creating new array of undefined data types
// let laptop=new Array(5);

// assigning value in the Array
// laptop[0]="apple"
// laptop[1]="lenovo"
// laptop[2]="Toshiba"
// laptop[3]="dell"
// laptop[4]="hp"

// accessing the array element
// console.log(laptop[1]);

// this is the way for checking the length of array
// let size=laptop.length;
// console.log("The size of Array is: "+size);


// random example which loop till the size of array length
// let bike=['ducati','yamaha','bullet','jawa','honda'];
// let size=bike.length;// assigning the array length
// for(let i=0; i<=size;i++){
//     alert("your bike is "+bike[i]);
// }



// let obj=[];
// let add_item=obj.push('apple','mango','banana','pineapple');
//  console.log('Recently added item are '+obj);// fetching the items of array
//  let remove_item=obj.pop();// this will delete the last element of array
//  console.log(remove_item);


// array splice method

// let items=['apple','mango','banana','pineapple'];
// let  replace=items.splice(0,2,'guava');// here we are deleting 
// console.log(items);

// push and pop are used to add or remove from last position of the array. so we use unshift and shift for adding elements to specific position

// unshift is used to add Element in array with very first location
// let items=['apple','mango','banana','pineapple'];
// let  replace=items.unshift('peanut');
// console.log(items);// shows the all items of array with recently updated.
// console.log(replace);// this will return the size of array.

// likewise, Shift method is used to remove the element of array from location , very first of the array

// 


// concating two array using concat() method

// let obj1=[1,2,3,4];
// let obj2=[5,6,7];
// let join=obj1.concat(obj2);// this will join the elements of two array
// console.log(join);

// slice method
let obj1=[1,2,3,4];
let display=obj1.slice(0,1);
console.log(display);
