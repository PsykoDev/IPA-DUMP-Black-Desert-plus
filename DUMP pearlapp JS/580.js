var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module505 = require('./505'),
  module509 = require('./509'),
  module511 = require('./511'),
  module510 = require('./510'),
  module507 = require('./507'),
  module581 = require('./581'),
  module584 = require('./584'),
  module585 = require('./585'),
  module586 = require('./586'),
  module587 = require('./587'),
  module582 = require('./582'),
  module588 = require('./588'),
  module583 = require('./583');

function L() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var k = ['notifications_notification_displayed', 'notifications_notification_opened', 'notifications_notification_received'],
  j = 'RNFirebaseNotifications';
exports.MODULE_NAME = j;
var x = 'notifications';
exports.NAMESPACE = x;

var O = (function (t) {
  module9.default(_, t);

  var module511 = _,
    module581 = L(),
    S = function () {
      var t,
        n = module13.default(module511);

      if (module581) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function _(t) {
    var o;
    module7.default(this, _);
    (o = S.call(this, t, {
      events: k,
      hasCustomUrlSupport: false,
      moduleName: j,
      hasMultiAppSupport: false,
      namespace: x,
    }))._android = new module586.default(module12.default(o));
    o._ios = new module587.default(module12.default(o));
    module505.SharedEventEmitter.addListener('notifications_notification_displayed', function (t) {
      module505.SharedEventEmitter.emit('onNotificationDisplayed', new module588.default(t, module12.default(o)));
    });
    module505.SharedEventEmitter.addListener('notifications_notification_opened', function (t) {
      module505.SharedEventEmitter.emit('onNotificationOpened', {
        action: t.action,
        notification: new module588.default(t.notification, module12.default(o)),
        results: t.results,
      });
    });
    module505.SharedEventEmitter.addListener('notifications_notification_received', function (t) {
      module505.SharedEventEmitter.emit('onNotification', new module588.default(t, module12.default(o)));
    });
    if ('ios' === module17.Platform.OS) module510.getNativeModule(module12.default(o)).jsInitialised();
    return o;
  }

  module8.default(_, [
    {
      key: 'cancelAllNotifications',
      value: function () {
        return module510.getNativeModule(this).cancelAllNotifications();
      },
    },
    {
      key: 'cancelNotification',
      value: function (t) {
        return t ? module510.getNativeModule(this).cancelNotification(t) : Promise.reject(new Error('Notifications: cancelNotification expects a `notificationId`'));
      },
    },
    {
      key: 'displayNotification',
      value: function (t) {
        if (!(t instanceof module588.default)) return Promise.reject(new Error("Notifications:displayNotification expects a 'Notification' but got type " + typeof t));

        try {
          return module510.getNativeModule(this).displayNotification(t.build());
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'getBadge',
      value: function () {
        return module510.getNativeModule(this).getBadge();
      },
    },
    {
      key: 'getInitialNotification',
      value: function () {
        var t = this;
        return module510
          .getNativeModule(this)
          .getInitialNotification()
          .then(function (n) {
            return n
              ? {
                  action: n.action,
                  notification: new module588.default(n.notification, t),
                  results: n.results,
                }
              : null;
          });
      },
    },
    {
      key: 'getScheduledNotifications',
      value: function () {
        return module510.getNativeModule(this).getScheduledNotifications();
      },
    },
    {
      key: 'onNotification',
      value: function (t) {
        var n,
          o = this;
        if (module507.isFunction(t)) n = t;
        else {
          if (!module507.isObject(t) || !module507.isFunction(t.next))
            throw new Error('Notifications.onNotification failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module509.getLogger(this).info('Creating onNotification listener');
        module505.SharedEventEmitter.addListener('onNotification', n);
        return function () {
          module509.getLogger(o).info('Removing onNotification listener');
          module505.SharedEventEmitter.removeListener('onNotification', n);
        };
      },
    },
    {
      key: 'onNotificationDisplayed',
      value: function (t) {
        var n,
          o = this;
        if (module507.isFunction(t)) n = t;
        else {
          if (!module507.isObject(t) || !module507.isFunction(t.next))
            throw new Error('Notifications.onNotificationDisplayed failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module509.getLogger(this).info('Creating onNotificationDisplayed listener');
        module505.SharedEventEmitter.addListener('onNotificationDisplayed', n);
        return function () {
          module509.getLogger(o).info('Removing onNotificationDisplayed listener');
          module505.SharedEventEmitter.removeListener('onNotificationDisplayed', n);
        };
      },
    },
    {
      key: 'onNotificationOpened',
      value: function (t) {
        var n,
          o = this;
        if (module507.isFunction(t)) n = t;
        else {
          if (!module507.isObject(t) || !module507.isFunction(t.next))
            throw new Error('Notifications.onNotificationOpened failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module509.getLogger(this).info('Creating onNotificationOpened listener');
        module505.SharedEventEmitter.addListener('onNotificationOpened', n);
        return function () {
          module509.getLogger(o).info('Removing onNotificationOpened listener');
          module505.SharedEventEmitter.removeListener('onNotificationOpened', n);
        };
      },
    },
    {
      key: 'removeAllDeliveredNotifications',
      value: function () {
        return module510.getNativeModule(this).removeAllDeliveredNotifications();
      },
    },
    {
      key: 'removeDeliveredNotification',
      value: function (t) {
        return t
          ? module510.getNativeModule(this).removeDeliveredNotification(t)
          : Promise.reject(new Error('Notifications: removeDeliveredNotification expects a `notificationId`'));
      },
    },
    {
      key: 'scheduleNotification',
      value: function (t, n) {
        if (!(t instanceof module588.default)) return Promise.reject(new Error("Notifications:scheduleNotification expects a 'Notification' but got type " + typeof t));

        try {
          var o = t.build();
          o.schedule = n;
          return module510.getNativeModule(this).scheduleNotification(o);
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'setBadge',
      value: function (t) {
        return module510.getNativeModule(this).setBadge(t);
      },
    },
    {
      key: 'android',
      get: function () {
        return this._android;
      },
    },
    {
      key: 'ios',
      get: function () {
        return this._ios;
      },
    },
  ]);
  return _;
})(module511.default);

exports.default = O;
var P = {
  Android: {
    Action: module581.default,
    BadgeIconType: module583.BadgeIconType,
    Category: module583.Category,
    Channel: module584.default,
    ChannelGroup: module585.default,
    Defaults: module583.Defaults,
    GroupAlert: module583.GroupAlert,
    Importance: module583.Importance,
    Priority: module583.Priority,
    RemoteInput: module582.default,
    SemanticAction: module583.SemanticAction,
    Visibility: module583.Visibility,
  },
  Notification: module588.default,
};
exports.statics = P;
