module.exports = class unauthorizedError extends Error {
  constructor() {
    super('Unauthorized user');
    this.name = 'unauthorizedError';
  }
};
