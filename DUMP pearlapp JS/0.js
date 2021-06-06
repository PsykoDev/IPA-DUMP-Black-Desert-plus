require('./2');

var module17 = require('./17'),
  module405 = require('./405'),
  module1157 = require('./1157'),
  module1158 = require('./1158');

module17.AppRegistry.registerComponent(module1158.name, function () {
  return module405.default;
});
module17.AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', function () {
  return module1157.default;
});
