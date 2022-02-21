//Spread operator are useful when we have to make clone
// for example : euta old naamak array xa ani arko newArray naamak array.
// aba malai newArray ma old array ko ni items chahiyo ani sangai naya items ni
//chahine huda, tyo bela Spread operator use garinxa
//we 3 dots and arrayName to concatinate.

//let's watch example:
let old_array = [
  { name: "Ram", Salary: 1000 },
  { name: "Shyam", Salary: 1500 },
  { name: "Suresh", Salary: 2000 }
];

let newArray=[...old_array,{name:"Prakash",Salary:2500}];
console.table(newArray);

