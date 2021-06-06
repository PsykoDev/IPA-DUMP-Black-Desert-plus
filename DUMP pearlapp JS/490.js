var n,
  React = require('react'),
  module17 = require('./17'),
  module2 = require('./2'),
  module484 = require('./484'),
  module481 = require('./481');

function s() {
  return (s =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (t[f] = o[f]);
      }

      return t;
    }).apply(this, arguments);
}

function p(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(t);
    if (n)
      f = f.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, f);
  }

  return o;
}

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(o), true).forEach(function (n) {
        b(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      p(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function b(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

function h(t) {
  var n = t.onRefresh;

  if (n) {
    module481.default('boolean' == typeof t.refreshing, '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' + JSON.stringify(t.refreshing) + '`');
    return O({}, t, {
      refreshControl:
        null == t.refreshControl
          ? React.default.createElement(module17.RefreshControl, {
              refreshing: t.refreshing,
              onRefresh: n,
              progressViewOffset: t.progressViewOffset,
            })
          : t.refreshControl,
    });
  } else return t;
}

exports.ScrollView = n;
if ('android' === module17.Platform.OS) exports.ScrollView = n = module484.default(module17.ScrollView);
else exports.ScrollView = n = module484.default(module2.ScrollView);
var w = React.default.forwardRef(function (t, l) {
  return React.default.createElement(
    module17.FlatList,
    s(
      {
        ref: l,
      },
      t,
      {
        renderScrollComponent: function (t) {
          return React.default.createElement(n, h(t));
        },
      }
    )
  );
});
exports.FlatList = w;
var y = React.default.forwardRef(function (t, l) {
  return React.default.createElement(
    module17.SectionList,
    s(
      {
        ref: l,
      },
      t,
      {
        renderScrollComponent: function (t) {
          return React.default.createElement(n, h(t));
        },
      }
    )
  );
});
exports.SectionList = y;
