exports.timeoutFetch = function (n) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : undefined,
    o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 8e3;
  return new Promise(function (u, c) {
    var f = setTimeout(function () {
      c(new Error('promise timeout'));
    }, o);
    fetch(n, t)
      .then(
        function (n) {
          return u(n);
        },
        function (n) {
          return c(n);
        }
      )
      .finally(function () {
        return clearTimeout(f);
      });
  });
};
