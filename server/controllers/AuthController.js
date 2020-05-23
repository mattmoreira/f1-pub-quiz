const express = require('express');

const Logger = require('../logger');

const logger = new Logger('AuthController');

const { authenticate } = require('../services/AuthService');

const login = (req, res) => {
  try {
    const token = authenticate(req.body);
    res.send({ token });
  } catch (error) {
    if (error.name !== 'UNAUTHORIZED_ERROR') {
      logger.error('Login', error.name);
    }

    res.sendStatus(401);
  }
}

module.exports = function AuthController() {
  const router = express.Router();

  router.post('/login', login);

  return router;
}
