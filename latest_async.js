

async function makeTea(){
    let container=['chiyarang','milk','bhaado'];
    return new Promise((res,rej)=>{
        if(container.includes('mil')&&container.includes('chiyarang'))
        {
            res('tea can be made');
        }
        else{
            rej('failed to make tea');
        }
    })

}
 async function result(){
    //  console.log('this is output section');
    try{
        let output=await makeTea();
        console.log(output);
    }
    catch(e){
        console.log(e);

    }
     
 }
result();