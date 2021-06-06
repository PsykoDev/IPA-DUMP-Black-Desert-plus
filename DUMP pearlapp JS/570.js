var module7 = require('./7'),
  module571 = require('./571'),
  module572 = require('./572'),
  module573 = require('./573'),
  module574 = require('./574'),
  module575 = require('./575'),
  module576 = require('./576'),
  c = (function () {
    function t(s, c) {
      module7.default(this, t);
      this._analytics = new module571.default(this);
      this._android = new module572.default(this);
      this._domainURIPrefix = c;
      this._ios = new module573.default(this);
      this._itunes = new module574.default(this);
      this._link = s;
      this._navigation = new module575.default(this);
      this._social = new module576.default(this);
    }

    module8.default(t, [
      {
        key: 'build',
        value: function () {
          if (!this._link) throw new Error('DynamicLink: Missing required `link` property');
          if (!this._domainURIPrefix) throw new Error('DynamicLink: Missing required `domainURIPrefix` property');
          return {
            analytics: this._analytics.build(),
            android: this._android.build(),
            domainURIPrefix: this._domainURIPrefix,
            ios: this._ios.build(),
            itunes: this._itunes.build(),
            link: this._link,
            navigation: this._navigation.build(),
            social: this._social.build(),
          };
        },
      },
      {
        key: 'analytics',
        get: function () {
          return this._analytics;
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
      {
        key: 'itunes',
        get: function () {
          return this._itunes;
        },
      },
      {
        key: 'navigation',
        get: function () {
          return this._navigation;
        },
      },
      {
        key: 'social',
        get: function () {
          return this._social;
        },
      },
    ]);
    return t;
  })();

exports.default = c;
