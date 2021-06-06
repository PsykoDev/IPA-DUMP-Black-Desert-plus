require('./370');

require('./58');

var module7 = require('./7'),
  module333 = require('./333'),
  module18 = require('./18'),
  module82 = require('./82'),
  l = (function () {
    function t() {
      module7.default(this, t);
    }

    module8.default(t, null, [
      {
        key: 'share',
        value: function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
          module18('object' == typeof t && null !== t, 'Content to share must be a valid object');
          module18('string' == typeof t.url || 'string' == typeof t.message, 'At least one of URL and message is required');
          module18('object' == typeof n && null !== n, 'Options must be a valid object');
          return new Promise(function (o, l) {
            var f = module82(n.tintColor);
            module18(module333.default, 'NativeActionSheetManager is not registered on iOS, but it should be.');
            module333.default.showShareActionSheetWithOptions(
              {
                message: 'string' == typeof t.message ? t.message : undefined,
                url: 'string' == typeof t.url ? t.url : undefined,
                subject: n.subject,
                tintColor: null != f ? f : undefined,
                excludedActivityTypes: n.excludedActivityTypes,
              },
              function (t) {
                return l(t);
              },
              function (t, n) {
                o(
                  t
                    ? {
                        action: 'sharedAction',
                        activityType: n,
                      }
                    : {
                        action: 'dismissedAction',
                      }
                );
              }
            );
          });
        },
      },
    ]);
    return t;
  })();

l.sharedAction = 'sharedAction';
l.dismissedAction = 'dismissedAction';
module.exports = l;
