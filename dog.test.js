// dog.test.js
const Dog = require('./Dog');

test('Dog\'s initial age is a random number between 5 and 10', () => {
  const dog = new Dog();
  expect(dog.getAge()).toBeGreaterThanOrEqual(5);
  expect(dog.getAge()).toBeLessThanOrEqual(10);
});

test('bark() method is properly functioning', () => {
  const dog = new Dog();
  const mockLog = jest.spyOn(console, 'log');
  
  dog.bark();
  expect(mockLog).toHaveBeenCalledWith('woof');
  
  dog.bark('Hello!');
  expect(mockLog).toHaveBeenCalledWith('Hello!');
});
