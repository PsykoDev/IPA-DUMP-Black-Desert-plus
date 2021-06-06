exports.default = function (o) {
  var l = o.color,
    u = undefined === l ? '#3D4041' : l,
    v = o.marginTop,
    c = undefined === v ? 6 : v,
    f = o.marginBottom,
    B = undefined === f ? 6 : f;
  return React.default.createElement(module17.View, {
    style: {
      width: '100%',
      borderBottomColor: u,
      borderBottomWidth: 1,
      marginTop: c,
      marginBottom: B,
    },
  });
};

var React = require('react'),
  module17 = require('./17');
