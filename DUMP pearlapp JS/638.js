function n() {
  var n = {};
  n.promise = new Promise(function (t, u) {
    n.resolve = t;
    n.reject = u;
  });
  return n;
}

exports.arrayOfDeferred = function (t) {
  for (var u = [], o = 0; o < t; o++) u.push(n());

  return u;
};

exports.default = n;
