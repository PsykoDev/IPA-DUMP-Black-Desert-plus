exports.default = function (n) {
  var t = {},
    u = function (u, o) {
      var f = t[u] ? t[u][n] : undefined;

      if (f) {
        var c = f.indexOf(o);
        f.splice(c, 1);
      }
    };

  return {
    addListener: function (o, f) {
      t[o] = t[o] || {};
      t[o][n] = t[o][n] || [];
      t[o][n].push(f);
      return {
        remove: function () {
          return u(o, f);
        },
      };
    },
    emit: function (u, o) {
      var f = t[u] || {},
        c = f[n] && f[n].slice();
      if (!(null === c || undefined === c))
        c.forEach(function (n) {
          return n(o);
        });
    },
  };
};
