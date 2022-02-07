const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/page', (req, res) => {
  res.send('Page 2!');
});


app.listen(port, () => {
  console.log(`App listen to PORT: ${port}`);
});