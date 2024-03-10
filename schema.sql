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


CREATE TABLE login (
  ID serial NOT NULL PRIMARY KEY,
  secret VARCHAR (100) NOT NULL,
  name text UNIQUE NOT NULL
)

INSERT INTO login (secret, name) VALUES ('123456', 'Julio');
INSERT INTO login (secret, name) VALUES ('123456', 'Jennifer');
INSERT INTO login (secret, name) VALUES ('123456', 'Saumira');

SELECT * FROM users JOIN login ON users.name = login.name;
DELETE FROM users WHERE name='Julio';
DROP TABLE users;
DROP TABLE login;

---------------------------------------

CREATE DATABASE runner;

CREATE TABLE users (
    id serial PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    age smallint,
    joined TIMESTAMP NOT NULL
);

CREATE TABLE run_data (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id),
    date DATE NOT NULL,
    distance_km DECIMAL(5, 2),
    time_minutes INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE login (
  id serial PRIMARY KEY,
  hash VARCHAR(100) NOT NULL,
  email text UNIQUE NOT NULL
);