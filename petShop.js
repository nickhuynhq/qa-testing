// petShop.js
const Cat = require('./Cat');
const Dog = require('./Dog');
const Data = require('./Data');

function saveTest() {
  const cat = new Cat('Fluffy');
  const dog = new Dog('Buddy');

  const data = new Data();
  data.insert('Cat', cat);
  data.insert('Dog', dog);
}

function savePetShop() {
  const cats = Array.from({ length: 3 }, () => new Cat());
  const dogs = Array.from({ length: 3 }, () => new Dog());

  const allPets = cats.concat(dogs);

  const data = new Data();
  let catCount = 0;
  let dogCount = 0;

  allPets.forEach(pet => {
    data.insert(pet.constructor.name, pet);

    // Manually increment count based on the type of pet
    if (pet instanceof Cat) {
      catCount++;
    } else if (pet instanceof Dog) {
      dogCount++;
    }
  });

  // Log the counts
  console.log(`Number of Cats in the database: ${catCount}`);
  console.log(`Number of Dogs in the database: ${dogCount}`);
}

function logStats() {
  // You can create a new Data instance here if needed, depending on your logic
  console.log('Printing interesting information about the script’s execution results to STDOUT.');
}

saveTest();
savePetShop();
logStats();
