let counter=0;

const incrementor=()=>{
    counter++;
    console.log(counter);
}

const incr=setInterval(incrementor,1000);


setTimeout(()=>clearInterval(incr),5000);
/**
 * It will clear the setInterval after 5 sec.
 * RECOMMANDED 
 */

// setInterval(clearInterval(incr),5000)
/**
 * It also will clear the setInterval after 5 sec but it won't stop the program and continiously monitors the application for every 5 secs.
 * NOT RECOMMANDED
 */
