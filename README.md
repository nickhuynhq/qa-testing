# Project Name
Homework

## How to Run

1. Install Node.js.
2. Clone the repository.
3. Open a terminal and navigate to the project folder.
4. Run `npm install` to install dependencies.
5. Run `node main.js` to execute the main script.

## Project Overview

This project implements a simple pet management system using JavaScript classes.

## File Structure

- `Cat.js`: Contains the Cat class definition.
- `Dog.js`: Contains the Dog class definition.
- `Data.js`: Contains the Data class definition for database operations.
- `main.js`: The main script that demonstrates the functionality.
- `petShop.js`: Implements functions for testing and logging stats.
- `homework.sql`: SQL statements for creating tables and inserting sample data.
- `cat.test.js`: JEST tests for the Cat class.
- `dog.test.js`: JEST tests for the Dog class.
- `README.md`: Documentation file.

## Approach

- Random Age: The initial age of the Cat and Dog is set to a random number between 5 and 10 to introduce variability.
- Optional Initial Name: The constructor now supports an optional initial name for the Cat and Dog, providing flexibility.
- Speak/Bark Method: The speak method for Cat and bark method for Dog were added as per the requirements, with the option to include a custom message.
- Name History: The setName method keeps a history of all the names the Cat or Dog has ever had, accessible through the getNames method.
- Age Increase: The age of the Cat and Dog increases by 1 every five times the speak or bark method is called.

## Future Improvements

No major disagreements with the requirements. However, in a real-world scenario, I might consider using TypeScript for stronger type checking and improved code maintainability.

# qa-testing
