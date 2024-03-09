const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const jwt = require('jsonwebtoken');
const register = require('./controllers/register')
const signin = require('./controllers/signin')

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    port: '5432',
    password: '4991',
    database: 'runner',
  },
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('success');
});

// To test on Postman: localhost:3003/signin
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt, jwt) });

// I am using dependency injection
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt, jwt) });


app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  db.select('*')
    .from('users')
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('Not found');
      }
    })
    .catch((err) => res.status(400).json('error getting user'));
});

app.post('/add-run', (req, res) => {
  const { user_id, date, distance_km, time_minutes } = req.body;
  db('run_data')
    .insert({ user_id, date, distance_km, time_minutes })
    .returning('*')
    .then((data) => res.json(data[0]))
    .catch((err) => res.status(400).json('Unable to add run data'));
});

app.get('/run-data/:user_id', (req, res) => {
  const { user_id } = req.params;
  db.select('*')
    .from('run_data')
    .where({ user_id })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error retrieving run data'));
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});

app.get('/validate', (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json('Unauthorized');
  }
  const token = authorization.split(' ')[1];
  jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.status(401).json('Unauthorized');
    }
    return res.json(decoded);
  });
});
