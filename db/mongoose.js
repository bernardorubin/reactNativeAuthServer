const mongoose = require('mongoose');
const { databasePassword, databaseUsername } = require('../config');
// allows us to use promises in our mongoose code
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://${databaseUsername}:${databasePassword}@ds235401.mlab.com:35401/express-auth`)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

module.exports = mongoose;