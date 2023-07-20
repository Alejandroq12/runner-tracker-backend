CREATE TABLE users(
    name text,
    age smallint,
    birthday date
  );

INSERT INTO users(name, age, birthday) VALUES ('Julio', 25, '1995-01-01');
INSERT INTO users(name, age, birthday) VALUES ('Jennifer', 20, '1990-01-01');
INSERT INTO users(name, age, birthday) VALUES ('Saumira', 30, '1950-01-01');

ALTER TABLE users ADD score smallint;
UPDATE users SET score=50 WHERE name='Julio';
UPDATE users SET score=100 WHERE name='Jennifer' OR name='Saumira';
SELECT * FROM users WHERE name LIKE 'J%';
SELECT * FROM users ORDER BY score DESC;
SELECT * FROM users ORDER BY score ASC;