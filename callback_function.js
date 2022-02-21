// yas ma k hunxa bhnda kheri
//function bhitra arko funtion as a argument pass garya xa bhane tyo nai call back function ho.

const add=(rank,thisIsCalledBack)=>{
    console.log(`i am ${rank} function`);
}

const back=()=>{
    console.log("i am that function that is called after above function");
}

add("first",back);
back();

