module.exports = function (n, t) {
  if (null == n) return {};
  var f,
    u,
    o = {},
    c = Object.keys(n);

  for (u = 0; u < c.length; u++) {
    f = c[u];
    if (!(t.indexOf(f) >= 0)) o[f] = n[f];
  }

  return o;
};
