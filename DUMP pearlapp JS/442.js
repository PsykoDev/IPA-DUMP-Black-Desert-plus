var module443 = require('./443'),
  module440 = require('./440'),
  s = function (t) {
    return {
      goBack: function (n) {
        var s = n;

        if (undefined === n && t.key) {
          module440.default('string' == typeof t.key, 'key should be a string');
          s = t.key;
        }

        return module443.back({
          key: s,
        });
      },
      navigate: function (t, n, s) {
        if ('string' == typeof t)
          return module443.navigate({
            routeName: t,
            params: n,
            action: s,
          });
        else {
          module440.default('object' == typeof t, 'Must navigateTo an object or a string');
          module440.default(null == n, 'Params must not be provided to .navigate() when specifying an object');
          module440.default(null == s, 'Child action must not be provided to .navigate() when specifying an object');
          return module443.navigate(t);
        }
      },
      setParams: function (n) {
        module440.default(t.key && 'string' == typeof t.key, 'setParams cannot be called by root navigator');
        return module443.setParams({
          params: n,
          key: t.key,
        });
      },
    };
  };

exports.default = s;
