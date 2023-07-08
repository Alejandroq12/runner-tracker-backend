const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

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
bcrypt.compare("apples", '$2a$10$zg2S7YVrHvq73ZzNZytT7e17LIpwyr7gcfOlMnL.lqYg20spkoRCS', function(err, res) {
  console.log('first guess', res)
});
bcrypt.compare("veggies", '$2a$10$zg2S7YVrHvq73ZzNZytT7e17LIpwyr7gcfOlMnL.lqYg20spkoRCS', function(err, res) {
  console.log('second guess', res)
});
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json('success');
  } else {
    res.status(400).json('error logging in');
  }
});

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  bcrypt.hash(password, null, null, function(err, hash) {
    console.log(hash);

  });
  database.users.push({
    id: '125',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

// :id means that we can enter any id in the browser and it will return the user with that id.
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json('not found');
  }
});

app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(400).json('not found');
  }
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
