const express = require('express');
const auth = require('./app');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Huy is the best!');
});

app.get('/ci-cd', (req, res) => {
  res.send('Run CI/CD');
});

app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
