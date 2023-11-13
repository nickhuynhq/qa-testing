// main.js
const Cat = require('./Cat');
const Dog = require('./Dog');
const Data = require('./Data');

const cat = new Cat();
const dog = new Dog();

console.log("Cat Name is currently " + cat.getName());
console.log("Dog Name is currently " + dog.getName());

cat.setName("Garfield");
dog.setName("Buddy");

console.log("Cat Name has been changed to " + cat.getName());
console.log("Dog Name has been changed to " + dog.getName());

const data = new Data("database");

data.insert("Cat", cat);
data.insert("Dog", dog);
