const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const userRoutes = require('./routes/user-routes');
// parses json requests and places it in a body object
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// const bcrypt = require("bcrypt");

// let password = 'myPassword';
// let salt = bcrypt.genSaltSync(12);
// let hashedPassword = bcrypt.hashSync(password, salt);
// console.log(`My hashed password is equal to -> ${hashedPassword}`);
// let compare = bcrypt.compareSync(password, hashedPassword);
// console.log(`If true the password compared to hashed result are equal -> ${compare}`);

app.get('/', (req, res) => {
  res.send('welcome');
})

app.use('/user', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});