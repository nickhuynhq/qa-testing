// cat.test.js
const Cat = require('./Cat');

test('Cat\'s initial age is a random number between 5 and 10', () => {
  const cat = new Cat();
  expect(cat.getAge()).toBeGreaterThanOrEqual(5);
  expect(cat.getAge()).toBeLessThanOrEqual(10);
});

test('speak() method is properly functioning', () => {
  const cat = new Cat();
  const mockLog = jest.spyOn(console, 'log');
  
  cat.speak();
  expect(mockLog).toHaveBeenCalledWith('meow');
  
  cat.speak('Hello!');
  expect(mockLog).toHaveBeenCalledWith('Hello!');
});
