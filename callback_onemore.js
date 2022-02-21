//function bhitra another function lai as parameter pass garya xa bhne teslai 
//callback function bhaninxa.
// callback function will only execute after successful execution of that function where that is passed to.


let obj1=function(calling){
    console.log('hello');
    calling();
}

obj1(calling=>{
    console.log('this is called after successful execution of main function');
})