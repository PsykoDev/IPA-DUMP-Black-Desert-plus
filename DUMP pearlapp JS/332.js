var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module333 = require('./333'),
  module18 = require('./18'),
  module82 = require('./82'),
  u = {
    showActionSheetWithOptions: function (t, u) {
      module18('object' == typeof t && null !== t, 'Options must be a valid object');
      module18('function' == typeof u, 'Must provide a valid callback');
      module18(module333.default, "ActionSheetManager does't exist");
      var f = t.tintColor,
        h = module56.default(t, ['tintColor']);
      module333.default.showActionSheetWithOptions(
        module6.default({}, h, {
          tintColor: module82(f),
        }),
        u
      );
    },
    showShareActionSheetWithOptions: function (t, n, u) {
      module18('object' == typeof t && null !== t, 'Options must be a valid object');
      module18('function' == typeof n, 'Must provide a valid failureCallback');
      module18('function' == typeof u, 'Must provide a valid successCallback');
      module18(module333.default, "ActionSheetManager does't exist");
      module333.default.showShareActionSheetWithOptions(
        module6.default({}, t, {
          tintColor: module82(t.tintColor),
        }),
        n,
        u
      );
    },
  };

module.exports = u;
