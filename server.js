const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const jwt = require('jsonwebtoken');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const addRun = require('./controllers/addRun');
const runData = require('./controllers/runData');
const validateJwt = require('./controllers/validateJwt');

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
app.post('/signin', (req, res) => {
  signin.handleSignin(req, res, db, bcrypt, jwt);
});

// I am using dependency injection
app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt, jwt);
});

app.get('/profile/:id', (req, res) => {
  profile.handleProfileGet(req, res, db);
});

app.post('/add-run', (req, res) => {
  addRun.handleAddRun(req, res, db);
});

app.get('/run-data/:user_id', (req, res) => {
  runData.handleRunData(req, res, db);
});

app.get('/validate', (req, res) => {
  validateJwt.handleValidateJwt(req, res, jwt);
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
