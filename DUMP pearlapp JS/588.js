var module7 = require('./7'),
  module17 = require('./17'),
  module589 = require('./589'),
  module590 = require('./590'),
  module507 = require('./507'),
  _ = (function () {
    function t(o, s) {
      module7.default(this, t);

      if (o) {
        this._body = o.body;
        this._data = o.data;
        this._notificationId = o.notificationId;
        this._sound = o.sound;
        this._subtitle = o.subtitle;
        this._title = o.title;
      }

      this._android = new module589.default(this, o && o.android);
      this._ios = new module590.default(this, s, o && o.ios);
      this._data = this._data || {};
      this._notificationId = this._notificationId || module507.generatePushID();
    }

    module8.default(t, [
      {
        key: 'setBody',
        value: function (t) {
          this._body = t;
          return this;
        },
      },
      {
        key: 'setData',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
          if (!module507.isObject(t)) throw new Error("Notification:withData expects an object but got type '" + typeof t + "'.");
          this._data = t;
          return this;
        },
      },
      {
        key: 'setNotificationId',
        value: function (t) {
          this._notificationId = t;
          return this;
        },
      },
      {
        key: 'setSound',
        value: function (t) {
          this._sound = t;
          return this;
        },
      },
      {
        key: 'setSubtitle',
        value: function (t) {
          this._subtitle = t;
          return this;
        },
      },
      {
        key: 'setTitle',
        value: function (t) {
          this._title = t;
          return this;
        },
      },
      {
        key: 'build',
        value: function () {
          if (!this._notificationId) throw new Error('Notification: Missing required `notificationId` property');
          return {
            android: 'android' === module17.Platform.OS ? this._android.build() : undefined,
            body: this._body,
            data: this._data,
            ios: 'ios' === module17.Platform.OS ? this._ios.build() : undefined,
            notificationId: this._notificationId,
            sound: this._sound,
            subtitle: this._subtitle,
            title: this._title,
          };
        },
      },
      {
        key: 'android',
        get: function () {
          return this._android;
        },
      },
      {
        key: 'body',
        get: function () {
          return this._body;
        },
      },
      {
        key: 'data',
        get: function () {
          return this._data;
        },
      },
      {
        key: 'ios',
        get: function () {
          return this._ios;
        },
      },
      {
        key: 'notificationId',
        get: function () {
          return this._notificationId;
        },
      },
      {
        key: 'sound',
        get: function () {
          return this._sound;
        },
      },
      {
        key: 'subtitle',
        get: function () {
          return this._subtitle;
        },
      },
      {
        key: 'title',
        get: function () {
          return this._title;
        },
      },
    ]);
    return t;
  })();

exports.default = _;
