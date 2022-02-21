
// start here (section 1)
// let employees=[{name:"ram",salary:1000},{name:"shyam",salary:2000},{name:"suresh",salary:300}
// ];
// // console.log(typeof employees);

// let newOne=[];
// employees.forEach(iterate=>{
//     iterate.salary=iterate.salary+100;
//     newOne.push(iterate);
//     // console.log(iterate.salary);
// })

// // console.log(newOne);
// console.table(newOne);

// ends here



// start here
// let newArray=[1,2,3,4,5];
// newArray.forEach(i=>{
//     console.log(i);
// })
// console.table(newArray);
// ends here


// Map ko main khasiyat k ho bhanda kheri--> yeslai array iterate(print) garxa Sathsathai New Array Return garxa.
// mathi ko Section 1 ma forEach loop le array ko items lai display garne kaam matra garya xa ra.
//salary increment garer arko array ma store hos bhani naya newOne naamak array banako xau.
//yadi kunai pani array ko items haru ma certain operation perform garer New Array ma store garnu xa bhane Mao method of array is the best one.
// Let's see examples

// code start here
let employees=[{name:'ram',salary:1000},{name:'shyam',salary:2000}];
let newData=employees.map(loop=>{
    loop.salary+=500;
   // console.log(loop);
   // Yaha console.log kina na gareko bhanda console le print matra garne kaam garxa but return le tyo block baata aaune output kunai variables ma assign garxa.
    // yaha hamle yo block baata aaune output lai naya array ma store garauna lai return garya xeu.
    //yasari return garda newData bhanne naya obj print garda old array ko values newData ma dekhauxa.
    // if console gareko baye, out of this block baata console.log garda undefined aauthyo 
    return loop;
})
console.table(newData);

//code ends here