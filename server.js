const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');

app.get('/', (req, res) => {
  res.send('welcome');
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});