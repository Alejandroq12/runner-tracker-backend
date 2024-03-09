SELECT * FROM users;
SELECT * FROM users WHERE name LIKE 'J%';
SELECT * FROM users ORDER BY score DESC;
SELECT * FROM users ORDER BY score ASC;
SELECT AVG(score) FROM users;
SELECT SUM(age) FROM users;
SELECT COUNT(name) FROM users;