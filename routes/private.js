const router = require("express").Router();

router.get('/private', (req, res) => {
  let obj = {
    message: 'This is a secret ROUTE',
    secret: 'You may pass',
    _id: req._id
  };
  res.status(200).send(obj)
})

module.exports = router;