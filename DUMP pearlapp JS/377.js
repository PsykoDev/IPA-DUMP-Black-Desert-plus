require('./58');

var module378 = require('@babel/runtime/helpers/interopRequireDefault')(require('./378')),
  n = false,
  o = 0;

function u(u) {
  var l = arguments.length > 1 && undefined !== arguments[1] && arguments[1];

  if (!n) {
    n = true;

    if (0 === u[0]) {
      module378.default.vibrate();
      u = u.slice(1);
    }

    if (0 !== u.length)
      setTimeout(function () {
        return f(++o, u, l, 1);
      }, u[0]);
    else n = false;
  }
}

function f(u, l, v, c) {
  if (n && u === o) {
    if ((module378.default.vibrate(), c >= l.length)) {
      if (!v) return void (n = false);
      c = 0;
    }

    setTimeout(function () {
      return f(u, l, v, c + 1);
    }, l[c]);
  }
}

var l = {
  vibrate: function () {
    var o = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 400,
      f = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
    if (!n)
      if ('number' == typeof o) module378.default.vibrate();
      else {
        if (!Array.isArray(o)) throw new Error('Vibration pattern should be a number or array');
        u(o, f);
      }
  },
  cancel: function () {
    n = false;
  },
};
module.exports = l;
