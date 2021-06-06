var module7 = require('./7'),
  module507 = require('./507'),
  module509 = require('./509'),
  module510 = require('./510'),
  u = (function () {
    function t(o, u, f) {
      if (
        (module7.default(this, t),
        (this._notification = o),
        f
          ? ((this._alertAction = f.alertAction),
            (this._attachments = f.attachments || []),
            (this._badge = f.badge),
            (this._category = f.category),
            (this._hasAction = f.hasAction),
            (this._launchImage = f.launchImage),
            (this._threadIdentifier = f.threadIdentifier))
          : (this._attachments = []),
        !module507.isIOS || !u || !u.ios)
      )
        return this;

      var l = function (t) {
        var n = o.notificationId;

        if (n && u) {
          module509.getLogger(u).debug('Completion handler called for notificationId=' + n);
          module510.getNativeModule(u).complete(n, t);
        }
      };

      if (u.ios.shouldAutoComplete) l(u.ios.backgroundFetchResult.noData);
      else this._complete = l;
    }

    module8.default(t, [
      {
        key: 'addAttachment',
        value: function (t, n, o) {
          this._attachments.push({
            identifier: t,
            options: o,
            url: n,
          });

          return this._notification;
        },
      },
      {
        key: 'setAlertAction',
        value: function (t) {
          this._alertAction = t;
          return this._notification;
        },
      },
      {
        key: 'setBadge',
        value: function (t) {
          this._badge = t;
          return this._notification;
        },
      },
      {
        key: 'setCategory',
        value: function (t) {
          this._category = t;
          return this._notification;
        },
      },
      {
        key: 'setHasAction',
        value: function (t) {
          this._hasAction = t;
          return this._notification;
        },
      },
      {
        key: 'setLaunchImage',
        value: function (t) {
          this._launchImage = t;
          return this._notification;
        },
      },
      {
        key: 'setThreadIdentifier',
        value: function (t) {
          this._threadIdentifier = t;
          return this._notification;
        },
      },
      {
        key: 'build',
        value: function () {
          return {
            alertAction: this._alertAction,
            attachments: this._attachments,
            badge: this._badge,
            category: this._category,
            hasAction: this._hasAction,
            launchImage: this._launchImage,
            threadIdentifier: this._threadIdentifier,
          };
        },
      },
      {
        key: 'alertAction',
        get: function () {
          return this._alertAction;
        },
      },
      {
        key: 'attachments',
        get: function () {
          return this._attachments;
        },
      },
      {
        key: 'badge',
        get: function () {
          return this._badge;
        },
      },
      {
        key: 'category',
        get: function () {
          return this._category;
        },
      },
      {
        key: 'hasAction',
        get: function () {
          return this._hasAction;
        },
      },
      {
        key: 'launchImage',
        get: function () {
          return this._launchImage;
        },
      },
      {
        key: 'threadIdentifier',
        get: function () {
          return this._threadIdentifier;
        },
      },
      {
        key: 'complete',
        get: function () {
          return this._complete;
        },
      },
    ]);
    return t;
  })();

exports.default = u;
