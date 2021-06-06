var module24 = require('./24'),
  module58 = 'android' === require('./58').default.OS ? module24.getEnforcing('IntentAndroid') : module24.getEnforcing('LinkingManager');

exports.default = module58;
