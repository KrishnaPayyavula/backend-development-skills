/**
 * Symbols is also one more type key type that object accpets along with string type.
 * Symbols gives us guranteed unique indentifier. It is not possible with string tpye.
 * 
 * To create symbol we can make use of Symbol();
 * 
 * let id =Symbol("ID") // ID is just a descriptive name for the Symbol , 
 * 
 * To assgin a symbol to an object we can use the following syntax
 * 
 * let person={
 *      name:"krishna",
 *      age:26
 *      [id]:123456  // Adding symbol as a property here.
 * }
 */


const id = Symbol("ID");

const nameObject={  
    name:"krishna",
    loc:["BLGR", "AP"]
}

nameObject[id]=123456;

console.log(Symbol(nameObject[id]).description,"description")

console.log(Object.keys(nameObject))

console.log(nameObject[id])

for (const key in nameObject) {
    if (Object.hasOwnProperty.call(nameObject, key)) {
        const element = nameObject[key];
        console.log(element);
        
    }
}


let lib = {
    name: "ABC",
    };
    
    lib["id"] = 5;
    lib["id"] = 6; // The value is changed because it is String [KEY]!!
    
    lib[Symbol("id")] = 123;
    lib[Symbol("id")] = 124; //Not changed
    
    console.log(lib); // { name: "ABC", id: 6, Symbol(id): 123, Symbol(id): 124 }