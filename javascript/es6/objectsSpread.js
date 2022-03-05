let wishPerson={
    name:'Krishna',
    city:"banglaore",
    greet : (name='krishna',city="delhi")=>{
        let greet =`Hey, I am ${name} and I live in ${city}`
        return greet
    }
}


console.log(wishPerson.greet("Venu","Vijayawada"));



//  Object Literals
let foods= (foodArray,city)=>{
    return {foodArray,
    city,
    "describe":()=>{
        let greet =`These are the foods ${foodArray} in the ${city}`;
        return greet
    }

    }
}

let functionDescription = foods(["Biryani","Burger","Frenc Fries"],"Bangalore")
console.log(foods(["Biryani","Burger","Frenc Fries"],"Bangalore"));

console.log(functionDescription.describe());

let laptops={
    names:["Apple","Dell","Lenovo","Vaio"],
    price:[1234,12345,123456,12,123]
}

let name="krishna";
let shallowCopy={
    name,//literal
    laptops
}


console.log(shallowCopy);
// {
//     name: 'krishna',
//     laptops: {
//       names: [ 'Apple', 'Dell', 'Lenovo', 'Vaio' ],
//       price: [ 1234, 12345, 123456, 12, 123 ]
//     }
//   }


let myfamily={
    name:'Daughter One',
    age:25,
    wife:"some x",
    children:"some y"
}

let mybrotherfamily={
    name:"Daughter Two",
    age:24,
    wife:"randon x",
    children:"randon y"
}

let wholefamily={
    father:"Obama",
    mother:"Michelle",
    ...myfamily,
    ...mybrotherfamily

}

console.log(wholefamily);


// Object Destructring


let weekendPlan={
    morning:{
        time:9,
        activity1:"Breakfast",
        activity2:"Bath"

    }
    ,afternoon:{
        time:1,
        activity1:"Lunch",
        activity2:"Sleep"
    },
    night:{
        time:9,
        activity1:'Dinner',
        activity2:'Gurrrr'
    }
}



