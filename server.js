const express = require('express');
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, err => {
  if(err) throw new Error('Error!!!')
  console.log(`Listening on PORT: ${PORT}..`)
})