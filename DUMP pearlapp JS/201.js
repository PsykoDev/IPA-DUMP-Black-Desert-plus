var module18 = require('./18'),
  module193 = require('./193');

module.exports = function (o) {
  function l(l, c, s, u, p) {
    if (c[s]) {
      var f = c[s],
        y = typeof f;
      if ('object' !== y) module18(false, 'Invalid ' + (p || '(unknown)') + ' `' + s + '` of type `' + y + '` supplied to `' + u + '`, expected `object`.');

      for (var v = module193(c[s], o), b = arguments.length, j = new Array(b > 5 ? b - 5 : 0), k = 5; k < b; k++) j[k - 5] = arguments[k];

      for (var w in v) {
        var O = o[w];
        if (!O)
          module18(
            false,
            'Invalid props.' +
              s +
              ' key `' +
              w +
              '` supplied to `' +
              u +
              '`.\nBad object: ' +
              JSON.stringify(c[s], null, '  ') +
              '\nValid keys: ' +
              JSON.stringify(Object.keys(o), null, '  ')
          );
        var J = O.apply(undefined, [f, w, u, p].concat(j));
        if (J) module18(false, J.message + '\nBad object: ' + JSON.stringify(c[s], null, '  '));
      }
    } else l && module18(false, 'Required object `' + s + '` was not specified in `' + u + '`.');
  }

  function c(n, t, o, c) {
    for (var s = arguments.length, u = new Array(s > 4 ? s - 4 : 0), p = 4; p < s; p++) u[p - 4] = arguments[p];

    return l.apply(undefined, [false, n, t, o, c].concat(u));
  }

  c.isRequired = l.bind(null, true);
  return c;
};
