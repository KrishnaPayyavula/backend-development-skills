/**
 * Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
 */

let courses = new Map();

courses.set(new Date(), "Current Date");

console.log(courses.keys());

courses.set(true, "Boolean TRUE");
courses.set(true, "Again Boolean - TRUE");
courses.set("name", "Venaktakrishna Payyavula");
courses.set("age", 26);

courses.forEach((item, key, map) => {
  console.log("Item", item);
  console.log(`key :${key}`);
  console.log(`map : ${map}`);
});


let profile=new Map();

let name={name:"Krishna"};
let age ={age:27};
let location={location:"Bangalore"}

profile.set(name,'Venkatakrishna');
profile.set(location,'Galipalem');
profile.set('Age',27);

console.log(profile);
//Map(3) {
//    { name: 'Krishna' } => 'Venkatakrishna',
//    { location: 'Bangalore' } => 'Galipalem',
//    'Age' => 27
//  }

console.log(profile.get(name));
//Venkatakrishna

console.log(new Map([[1,2],[3,4],{name:"krishna"},[6,6]]))
//Map(4) { 1 => 2, 3 => 4, undefined => undefined, 6 => 6 }
