const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is working');
});

// To test on Postman: localhost:3003/signin
app.post('/signin', (req, res) => {
  res.send('Signin');
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
