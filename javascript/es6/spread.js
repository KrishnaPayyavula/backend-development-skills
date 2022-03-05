let names =["krishna", 'venu','anna', 'narayana'];

let ages =[27,24,30,28];

let combined = ['new combined data',...names,...ages];

console.log(combined);

let array= new Array(10);

console.log(array.length);

array[7]='&'

array.forEach((item,index)=>{
    console.log(item,index)
})

// & 7


let cities=["Bangalore", "Chennai","Hyderabad","Pune", "Mumbai","Delhi"];

let [,,biryaniCity, ,financialCapital,...all] =cities;

console.log(biryaniCity,financialCapital,all);

console.log(cities.includes("Banglaore"));//True





