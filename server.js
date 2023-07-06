const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is working');
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
