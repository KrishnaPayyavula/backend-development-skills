function print(firstName){

    console.log("Hello ", firstName, " This is Normal String Printing");

}

print('Krishna');


const templateStringFunction =(firstName='',salary=0, city="India")=>{
    console.log(` Hi My name is ${firstName}
        I live in ${city}
        I earn around $${salary}/-
    `)
}

templateStringFunction("Krishna",20000,"Bangalore");

