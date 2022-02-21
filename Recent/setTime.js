let count=0;
let greet=()=>{
count++;
    console.log('hello world '+count);
};

setInterval(greet,1000);