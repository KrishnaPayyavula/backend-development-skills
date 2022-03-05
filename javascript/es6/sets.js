let books =new Set();

books.add("TATAs books");
books.add("101 starters");
console.log(books.has("TATAs books"))

console.log(books.size);

// Add

books.add(1);
books.add("1");


// has

books.has(1) //true

console.log(books.delete(1));

console.log(books);

//Entries

const set1 = new Set();
set1.add(42);
set1.add('forty two');

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // expected output: [42, 42]
  // expected output: ["forty two", "forty two"]
}


// ForEach
function logSetElements(value1, value2, set) {
    console.log(`s[${value1}] = ${value2}`);
  }
  
  new Set(['foo', 'bar', undefined]).forEach(logSetElements);
  
  // expected output: "s[foo] = foo"
  // expected output: "s[bar] = bar"
  // expected output: "s[undefined] = undefined"