exports.__esModule = true;

require('prop-types');

var React = require('react'),
  module408 = require('./408'),
  module409 = require('./409');

var c = function (t) {
  var n = t.store,
    c = t.context,
    f = t.children,
    l = React.useMemo(
      function () {
        var t = new module409.default(n);
        t.onStateChange = t.notifyNestedSubs;
        return {
          store: n,
          subscription: t,
        };
      },
      [n]
    ),
    v = React.useMemo(
      function () {
        return n.getState();
      },
      [n]
    );
  React.useEffect(
    function () {
      var t = l.subscription;
      t.trySubscribe();
      if (v !== n.getState()) t.notifyNestedSubs();
      return function () {
        t.tryUnsubscribe();
        t.onStateChange = null;
      };
    },
    [l, v]
  );
  var b = c || module408.ReactReduxContext;
  return React.default.createElement(
    b.Provider,
    {
      value: l,
    },
    f
  );
};

exports.default = c;
