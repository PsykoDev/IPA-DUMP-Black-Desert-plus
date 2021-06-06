var module17 = require('./17').NativeModules,
  o = module17.PlatformLocalStorage || module17.RNC_AsyncSQLiteDBStorage || module17.RNCAsyncStorage;

exports.default = o;
