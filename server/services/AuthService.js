const jwt = require('jsonwebtoken');

const db = require('../db');

const { jwtSecret } = require('../config');

const { UnauthorizedError } = require('../errors/auth');

const authenticate = ({ email, password }) => {
  const { password: userPassword, ...user } = db
    .users
    .list()
    .find(user => user.email === email) || {};

  if (userPassword !== password) {
    throw new UnauthorizedError();
  }
  
  return jwt.sign(user, jwtSecret);
};


module.exports = { authenticate }