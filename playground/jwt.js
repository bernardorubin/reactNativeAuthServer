const jwt = require('jsonwebtoken');

//JWT
let payload = {
  _id: 'Hello JWT'
};

let secret = '12345678';

// jwt.sign(payload, secret, options || callback);
let token = jwt.sign(payload, secret, {
  algorithm: 'HS384',
  expiresIn: 60 * 60,
});

console.log(token);

let decoded = jwt.verify(token, secret);

console.log(decoded);