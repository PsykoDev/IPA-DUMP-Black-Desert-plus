var module6 = require('./6'),
  React = require('react'),
  module17 = require('./17'),
  module382 = require('./382'),
  f = new WeakMap();

function s(t, n) {
  if (null == t) return null;
  var l = f.get(t);

  if (!l) {
    l = module382.default(t, n);
    f.set(t, l);
  }

  return l;
}

module.exports = {
  get ScrollView() {
    return s(module17.default.ScrollView, {
      disallowInterruption: true,
      shouldCancelWhenOutside: false,
    });
  },

  get Switch() {
    return s(module17.default.Switch, {
      shouldCancelWhenOutside: false,
      shouldActivateOnStart: true,
      disallowInterruption: true,
    });
  },

  get TextInput() {
    return s(module17.default.TextInput);
  },

  get DrawerLayoutAndroid() {
    var t = s(module17.default.DrawerLayoutAndroid, {
      disallowInterruption: true,
    });
    t.positions = module17.default.DrawerLayoutAndroid.positions;
    return t;
  },

  get FlatList() {
    if (!f.FlatList) {
      var t = this.ScrollView;
      f.FlatList = React.default.forwardRef(function (o, f) {
        return React.default.createElement(
          module17.default.FlatList,
          module6.default(
            {
              ref: f,
            },
            o,
            {
              renderScrollComponent: function (n) {
                return React.default.createElement(t, n);
              },
            }
          )
        );
      });
    }

    return f.FlatList;
  },
};
