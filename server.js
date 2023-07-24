const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    port: '5432',
    password: '4991',
    database: 'smart-recognizer',
  },
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const database = {
  users: [
    {
      id: '123',
      name: 'Julio',
      email: 'julio@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '124',
      name: 'Alejandro',
      email: 'julio2@gmail.com',
      password: 'antihacker',
      entries: 0,
      joined: new Date(),
    },
  ],
  login: [
    {
      id: '987',
      hash: '',
      email: 'julio@gmail.com',
    },
  ],
};

app.get('/', (req, res) => {
  res.send(database.users);
});

// To test on Postman: localhost:3003/signin
// In the future I will use a database to store the users.
app.post('/signin', (req, res) => {
  // Load hash from your password DB.
  bcrypt.compare(
    'apples',
    '$2a$10$zg2S7YVrHvq73ZzNZytT7e17LIpwyr7gcfOlMnL.lqYg20spkoRCS',
    function (err, res) {
      console.log('first guess', res);
    }
  );
  bcrypt.compare(
    'veggies',
    '$2a$10$zg2S7YVrHvq73ZzNZytT7e17LIpwyr7gcfOlMnL.lqYg20spkoRCS',
    function (err, res) {
      console.log('second guess', res);
    }
  );
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json('error logging in');
  }
});

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  bcrypt.hash(password, null, null, function (err, hash) {
    console.log(hash);
  });
  db('users')
    .returning('*')
    .insert({
      email: email,
      name: name,
      joined: new Date(),
    })
    .then((user) => {
      res.json(user[0]);
    })
    .catch((err) => res.status(400).json('unable to register'));
});

// :id means that we can enter any id in the browser and it will return the user with that id.
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

app.put('/image', (req, res) => {
  const { id } = req.body;
  db.where('published_date', '<', 2000)
  .update({
    status: 'archived',
    thisKeyIsSkipped: undefined
  })
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
