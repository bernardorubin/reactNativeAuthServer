const router = require("express").Router();
const authenticate = require('../middleware/authenticate');

router.post('/private', authenticate, (req, res) => {
  let obj = {
    message: 'This is a secret ROUTE',
    secret: 'You may pass',
    _id: req._id
  };
  res.status(200).send(obj)
})

module.exports = router;