function timer(time){
    let data ='dfdf';
    console.log(`called at ${time}`);
    setTimeout(() => {
        console.log(`This is called after ${time} msecs`);
        data= "Done";
    }, time);
    return "data"
   }

// console.log(timer(3000))
/**
 * output
 * called at 3000
 * data
 * This is called after 3000 msecs
 */

// setTimeout(timer, 5000,3000);
/**
 * Output
 * Calls the function after 5 sec 
 * Gets the result back after 3 sec
 */

// const animal =(animalName,punch='!')=>{
//     const name= animalName.charAt(0).toUpperCase();
//     console.log(name);
//     console.log(animalName.slice(1))
//     animalName.slice(1,2)
//     console.log(`${name}${punch}`)
// }
// setTimeout(animal,2000,"DOG","?")


let count=0;
function inc(){
    count++;
    console.log(count);
}

let timers= setTimeout(function name(){
    inc();
    timers = setTimeout(name,1000)
},1000)