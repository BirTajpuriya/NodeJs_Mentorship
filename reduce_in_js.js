// the reduce method executes a reducer function on each element of array,
//resulting in single output value.

// kunai pani array xa but output ma malai aggregate form ma
//result chahiko bela reduce function is used.
// aggregate form bhanne le like:- sum, product, average chahiyeko bela reduce is better


//the reduce function takes four parameter arguments.
// 1.accumulator
// 2.Current value
// 3.Current Index
// 4.Source Array

let obj1=[1,2,3,4,5,6,7,8,9];
let aggregate=obj1.reduce((accu,current)=>{
    return current+accu;
})
console.log(aggregate);