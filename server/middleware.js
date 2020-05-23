const bodyParser = require('body-parser');
const cors = require('cors');

const expressJwt = require('express-jwt');

const { jwtSecret } = require('./config');

module.exports = {
  cors: cors(),
  bodyJson: bodyParser.json(),
  jwt: expressJwt({
    secret: jwtSecret,
    credentialsRequired: false
  })
}