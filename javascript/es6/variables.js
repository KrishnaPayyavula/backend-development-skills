/**
 * Variable is global scoped
 */

// VAR KEY WORD
var A="Krishna";

if(true){
        var A= "Bhanu"
        console.log(A);
    }

console.log(A);//Bhanu because it is global scoped.


// LET KEY WORD

let B="B";

if(true){
    let B="BB";
    console.log(B);// B because it is block scoped.
}

console.log(B);// B because it is block scoped.

// CONST KEYWORD

const C="C";

if(true){
    const C="CC";// This C is block scoped
    console.log(C);
}
console.log(C);// C is outer scoped

