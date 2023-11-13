// Cat.js
class Cat {
    constructor(initialName = null) {
      this.name = initialName;
      this.age = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Set random age between 5 and 10
      this.favoriteFood = null;
      this.previousNames = [initialName];
      this.speakCount = 0;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getFavoriteFood() {
      return this.favoriteFood;
    }
  
    setName(newName) {
      this.previousNames.push(this.name);
      this.name = newName;
    }
  
    setAge(newAge) {
      this.age = newAge;
    }
  
    setFavoriteFood(newFavoriteFood) {
      this.favoriteFood = newFavoriteFood;
    }
  
    speak(message = "meow") {
      console.log(message);
      if (++this.speakCount % 5 === 0) {
        this.age++;
      }
    }
  
    getNames() {
      return this.previousNames;
    }
  
    getAverageNameLength() {
      const validNames = this.previousNames.filter(name => name !== null);
      const totalLength = validNames.reduce((sum, name) => sum + name.length, 0);
      return totalLength / (validNames.length || 1);
    }
  }
  
  module.exports = Cat;
  