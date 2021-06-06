require('@babel/runtime/helpers/interopRequireDefault')(require('react'));

var o,
  module17 = require('./17'),
  module18 = require('./18'),
  l = module17.NativeModules.RNCookieManagerIOS,
  c = module17.NativeModules.RNCookieManagerAndroid;

if ('ios' === module17.Platform.OS) {
  module18(l, 'react-native-cookies: Add RNCookieManagerIOS.h and RNCookieManagerIOS.m to your Xcode project');
  o = l;
} else if ('android' === module17.Platform.OS) {
  module18(c, 'react-native-cookies: Import libraries to android "react-native link react-native-cookies"');
  o = c;
} else module18(o, 'react-native-cookies: Invalid platform. This library only supports Android and iOS.');

var s = ['setFromResponse', 'getFromResponse', 'clearByName'];
module.exports = {
  getAll:
    'android' == module17.Platform.OS
      ? function () {
          return o.getAll();
        }
      : function () {
          var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
          return o.getAll(t);
        },
  clearAll:
    'android' == module17.Platform.OS
      ? function () {
          return o.clearAll();
        }
      : function () {
          var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
          return o.clearAll(t);
        },
  get:
    'android' == module17.Platform.OS
      ? function (t) {
          return o.get(t);
        }
      : function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
          return o.get(t, n);
        },
  set:
    'android' == module17.Platform.OS
      ? function (t) {
          return o.set(t);
        }
      : function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
          return o.set(t, n);
        },
};

for (var u = 0; u < s.length; u++) module.exports[s[u]] = o[s[u]];
