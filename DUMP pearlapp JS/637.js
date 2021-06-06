var module634 = require('./634');

exports.default = function (n, u) {
  var o;
  if (undefined === u) u = true;
  var c = new Promise(function (t) {
    o = setTimeout(t, n, u);
  });

  c[module634.CANCEL] = function () {
    clearTimeout(o);
  };

  return c;
};
