/**
 * This Question is about Runtime Encoding of str. Wehave to figure out how many times ,
 * a character is available for times.
 * Ex: "AABBCCCCDEFF"
 * Output: A2B2C4D1E1F2
 * Ex: "ABCDD"
 * Output: "A1B1C1D2"
 */

function charEncoder(str="123"){
    let encodedstr="";
    for (let index = 0; index < str.length; index++) {
        let count=1;
        while(str.charAt(index)===str.charAt(index+1)){
            count++;
            index++;
        }
        encodedstr=encodedstr.concat(str.charAt(index),count);        
    }
    return encodedstr
}

console.log(charEncoder("AABBCCCCDEFF"))


// function encoder(str='ABCD'){
//     let count=1;
//     let encodedString=""
//     for (let index = 0; index <str.length; index++) {
//         // console.log(str.charAt(index))
//         if(str.charAt(index)==str.charAt(index+1)){
//             count++;
//         }else{
//             // encodedString=encodedString.concat(str.charAt(index));
//             encodedString=encodedString.concat(count);
//             count=1;
//         }
//     }
//     return encodedString;
// }

// console.log(encoder("AABBCCCCED"));
// console.log(encoder("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));