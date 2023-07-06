const express = require('express');

const app = express();

const database = {
  users: [
    {
      ide: '123',
      name: 'John',
      email: 'julio@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get('/', (req, res) => {
  res.send('This is working');
});

// To test on Postman: localhost:3003/signin
app.post('/signin', (req, res) => {
  res.json('signin');
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});

/*
Routes:
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/
