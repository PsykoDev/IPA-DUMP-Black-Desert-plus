var module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module7 = require('./7');

function c(t, n) {
  var u;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (u = f(t)) || (n && t && 'number' == typeof t.length)) {
      if (u) t = u;
      var o = 0;
      return function () {
        return o >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[o++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (u = t[Symbol.iterator]()).next.bind(u);
}

function f(t, n) {
  if (t) {
    if ('string' == typeof t) return v(t, n);
    var u = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === u && t.constructor) u = t.constructor.name;
    return 'Map' === u || 'Set' === u ? Array.from(t) : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? v(t, n) : undefined;
  }
}

function v(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var u = 0, o = new Array(n); u < n; u++) o[u] = t[u];

  return o;
}

function y(t) {
  var n = p();
  return function () {
    var s,
      l = module13.default(t);

    if (n) {
      var c = module13.default(this).constructor;
      s = Reflect.construct(l, arguments, c);
    } else s = l.apply(this, arguments);

    return module11.default(this, s);
  };
}

function p() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var h = (function () {
    function t(n) {
      module7.default(this, t);
      this.bossData = n;
    }

    module8.default(t, [
      {
        key: 'convert24HoursTo12Hours',
        value: function (t) {
          var n = t.split(':'),
            u = parseInt(n[0]),
            o = n[1],
            s = 'AM';

          if (u >= 13) {
            u -= 12;
            s = 'PM';
          }

          return {
            time: u + ':' + o,
            meridiem: s,
          };
        },
      },
      {
        key: 'generate',
        value: function (t) {},
      },
    ]);
    return t;
  })(),
  b = (function (t) {
    module9.default(o, t);
    var u = y(o);

    function o(t, n) {
      var l;
      module7.default(this, o);
      (l = u.call(this, n)).timeZone = t;
      return l;
    }

    module8.default(o, [
      {
        key: 'getAllTimes',
        value: function (t) {
          var n = this,
            u = new Array();
          Object.keys(this.bossData).map(function (o) {
            n.bossData[o].map(function (n) {
              if (t.includes(n.week)) u.push(n.time);
            });
          });
          return u;
        },
      },
      {
        key: 'deduplicate',
        value: function (t) {
          for (var n, u = {}, o = c(t); !(n = o()).done; ) {
            var s = n.value;
            if (undefined == u[s]) u[s] = '';
          }

          return Object.keys(u);
        },
      },
      {
        key: 'sortByTime',
        value: function (t) {
          return t.sort(function (t, n) {
            var u = t.split(':'),
              o = n.split(':'),
              s = 60 * parseInt(u[0]) + parseInt(u[1]),
              l = 60 * parseInt(o[0]) + parseInt(o[1]);
            return s > l ? 1 : s < l ? -1 : 0;
          });
        },
      },
      {
        key: 'generate',
        value: function (t) {
          var n = this,
            u = this.deduplicate(this.getAllTimes(t));
          return this.sortByTime(u).map(function (t) {
            return n.convert24HoursTo12Hours(t);
          });
        },
      },
    ]);
    return o;
  })(h);

exports.TimeCell = b;

var k = (function (t) {
  module9.default(o, t);
  var u = y(o);

  function o(t) {
    module7.default(this, o);
    return u.call(this, t);
  }

  module8.default(o, [
    {
      key: 'generateKey',
      value: function (t, n, u) {
        return t + '_' + n + '_' + u;
      },
    },
    {
      key: 'generate',
      value: function (t) {
        var n = this,
          u = {};
        Object.keys(this.bossData).map(function (o) {
          n.bossData[o].map(function (s) {
            if (t.includes(s.week)) {
              var l = n.convert24HoursTo12Hours(s.time),
                c = n.generateKey(s.week, l.time, l.meridiem);
              if (undefined == u[c]) u[c] = new Array();
              u[c].push(o);
            }
          });
        });
        return u;
      },
    },
  ]);
  return o;
})(h);

exports.BossCell = k;
