-- homework.sql
CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  type VARCHAR(20),
  name VARCHAR(50),
  age INT,
  favoriteFood VARCHAR(50),
  previousNames JSONB
);

-- Sample insert statements
INSERT INTO animals (type, name, age, favoriteFood, previousNames)
VALUES ('Cat', 'Fluffy', 8, 'Tuna', '["Whiskers"]'),
       ('Dog', 'Buddy', 6, 'Bones', '[]');
