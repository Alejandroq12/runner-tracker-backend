CREATE TABLE users(
    name text,
    age smallint,
    birthday date
  );

INSERT INTO users(name, age, birthday) VALUES ('Julio', 25, '1995-01-01');
INSERT INTO users(name, age, birthday) VALUES ('Jennifer', 20, '1990-01-01');

ALTER TABLE users ADD score smallint;