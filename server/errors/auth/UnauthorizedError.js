class UnauthorizedError extends Error {
  constructor() {
    super();

    this.name = 'UNAUTHORIZED_ERROR';
    this.status = 401;
  }
}

module.exports = UnauthorizedError;