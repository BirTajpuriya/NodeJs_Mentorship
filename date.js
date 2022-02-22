// in order to use date in JS, we have to create object of Data() type


let currentTime=new Date();
console.log(currentTime);
// this method is used to current date in more readable format
console.log(currentTime.toDateString());

// this method will only show taarik
console.log(currentTime.getDate());

//this method only shows year like 2022
console.log(currentTime.getFullYear());

// getMonth() is used to print the current month
// 0 means january, 1 means February
console.log(currentTime.getMonth());

// it will shows the day, 0 means sunday, 1 means monday
console.log(currentTime.getDay());


// if we want to know the day of specific year, we can use following
// basically can be used by mentioning date in new Date()
let obj2=new Date('2022 22 feb');
let result=obj2.getDay();
console.log(result);


//****************************************************
// the following is for showing time hours, minutes and seconds.
let Curr_Time=new Date();

//getHours will show current hr time.. like kati bajyo
let output=Curr_Time.getHours();
console.log(output);
// similary this will show current minutes
console.log(Curr_Time.getMinutes());

console.log(Curr_Time.getSeconds()); // this will show seconds
console.log(Curr_Time.getMilliseconds());// this will show milliseconds



// methods to setDate in function

let newTime=new Date();
newTime.setDate(2);
console.log(newTime);