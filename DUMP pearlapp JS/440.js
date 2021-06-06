var n = function () {};

var o = function (o, t) {
  for (var f = arguments.length, l = new Array(f > 2 ? f - 2 : 0), u = 2; u < f; u++) l[u - 2] = arguments[u];

  if ((n(t), !o)) {
    var v;
    if (undefined === t) v = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
    else {
      var c = 0;
      (v = new Error(
        t.replace(/%s/g, function () {
          return l[c++];
        })
      )).name = 'Invariant Violation';
    }
    throw ((v.framesToPop = 1), v);
  }
};

exports.default = o;
