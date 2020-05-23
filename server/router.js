const app = require('./server');

const AuthController = require('./controllers/AuthController');

const authController = new AuthController(app);

app.use('/auth', authController);

module.exports = app;