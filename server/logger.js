class Logger {
  constructor(file) {
    this.file = file;
  }

  log(type, context, message) {
    console[type](`[${context}] ${this.file}:`, message);
  }

  error = (context, message) => this.log('error', context, message);
}

module.exports = Logger;
