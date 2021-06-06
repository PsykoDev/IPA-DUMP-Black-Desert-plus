var module24 = require('./24'),
  c = module24.get('AsyncSQLiteDBStorage') || module24.get('AsyncLocalStorage');

exports.default = c;
