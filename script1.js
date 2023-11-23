/* Question No-1

1. How to compare two JSON have the same properties without order?
a. let obj1 = { name: "Person 1", age:5 }
b. let obj2 = { age:5, name: "Person 1"};

*/

var obj1 = {
  name: "jack",
  age: 24,
};

var obj2 = {
  age: 20,
  name: "sparrow",
};

console.log(obj1.name);
console.log(obj1.age);

console.log(obj2.name);
console.log(obj2.age);
