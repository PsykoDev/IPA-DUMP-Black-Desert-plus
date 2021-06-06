var module829 = require('./829'),
  React = require('react'),
  module17 = require('./17'),
  module830 = require('./830'),
  f =
    (this && this.__spreadArrays) ||
    function () {
      for (var t = 0, n = 0, l = arguments.length; n < l; n++) t += arguments[n].length;

      var u = Array(t),
        o = 0;

      for (n = 0; n < l; n++) for (var f = arguments[n], c = 0, s = f.length; c < s; c++, o++) u[o] = f[c];

      return u;
    };

exports.defaultOriginWhitelist = ['http://*', 'https://*'];

var c = function (t) {
    var n = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(t);
    return null === n ? '' : n[0];
  },
  s = function (t) {
    return '^' + module829.default(t).replace(/\\\*/g, '.*');
  },
  E = function (t, n) {
    var l = c(n);
    return t.some(function (t) {
      return new RegExp(t).test(l);
    });
  },
  v = function (t) {
    return f(['about:blank'], t || []).map(s);
  };

exports.createOnShouldStartLoadWithRequest = function (t, n, l) {
  return function (o) {
    var f = o.nativeEvent,
      c = true,
      s = f.url,
      h = f.lockIdentifier;

    if (!E(v(n), s)) {
      module17.Linking.openURL(s);
      c = false;
    }

    if (l) c = l(f);
    t(c, s, h);
  };
};

exports.defaultRenderLoading = function () {
  return React.default.createElement(
    module17.View,
    {
      style: module830.default.loadingOrErrorView,
    },
    React.default.createElement(module17.ActivityIndicator, null)
  );
};

exports.defaultRenderError = function (t, n, f) {
  return React.default.createElement(
    module17.View,
    {
      style: module830.default.loadingOrErrorView,
    },
    React.default.createElement(
      module17.Text,
      {
        style: module830.default.errorTextTitle,
      },
      'Error loading page'
    ),
    React.default.createElement(
      module17.Text,
      {
        style: module830.default.errorText,
      },
      'Domain: ' + t
    ),
    React.default.createElement(
      module17.Text,
      {
        style: module830.default.errorText,
      },
      'Error Code: ' + n
    ),
    React.default.createElement(
      module17.Text,
      {
        style: module830.default.errorText,
      },
      'Description: ' + f
    )
  );
};
