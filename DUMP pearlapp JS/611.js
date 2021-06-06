exports.simpleAlert = function (t) {
  var o,
    l = module6.default(
      {
        title: '',
        content: '',
        confirmText: undefined,
        confirmOnPress: function () {},
        cancelText: undefined,
        cancelOnPress: function () {},
        alertTime: 0,
      },
      t
    ),
    s = l.title,
    f = l.content,
    u = l.confirmText,
    P = l.confirmOnPress,
    v = l.cancelText,
    x = l.cancelOnPress,
    T = l.alertTime;
  o =
    undefined == v
      ? [
          {
            text: u,
            onPress: function () {
              P();
            },
          },
        ]
      : [
          {
            text: v,
            onPress: function () {
              x();
            },
          },
          {
            text: u,
            onPress: function () {
              P();
            },
          },
        ];
  if (0 == T) module17.Alert.alert(s, f, o);
  else
    setTimeout(function () {
      return module17.Alert.alert(s, f, o);
    }, T);
};

var module6 = require('./6'),
  module17 = require('./17');
