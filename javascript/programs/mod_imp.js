// const items = require("./mod_a.js")

// console.log(items);
// /**
//  * {    
//   items: { greetKrishna: [Function: greetKrishna], name: 'SAMBAIAH' },
//   users: {
//     getUsers: [Function: getUsers],
//     users: [ 'KRISHNA', 'VENU', 'Dr.ANNA', 'NARAYANA' ]
//   }
// }
//  */

// let name = items.name;

// name ="Srikanth";

// console.log(name)


const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }

  const doSomethingAsync2 = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something 2'), 3000)
    })
  }
  
  const doSomething = async () => {
    // console.log(await doSomethingAsync())
    // console.log(await doSomethingAsync2())
    return  await Promise.all([doSomethingAsync(),doSomethingAsync2()])
  }
  
  console.log('Before')
  doSomething().then(res=>console.log(res));

