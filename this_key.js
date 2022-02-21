let obj={
    name:'maruti',
    type:'car',
    model:'123',
    color:'blue',
    details:function(){
        console.log('The name of object is :'+this.name+' and the model no. is '+this.model);

    }
};
console.log(obj.details());


// it is used to refers the "owner"of method
// this keyword is used to represent the items of current instance