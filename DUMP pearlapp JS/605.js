exports.useOnMount = function (n, s) {
  var c = React.useState({
      loading: true,
      result: s,
    }),
    o = module26.default(c, 2),
    f = o[0],
    v = o[1];
  React.useEffect(
    function () {
      var u;
      regeneratorRuntime.default.async(
        function (l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                l.next = 2;
                return regeneratorRuntime.default.awrap(n());

              case 2:
                u = l.sent;
                v({
                  loading: false,
                  result: u,
                });

              case 4:
              case 'end':
                return l.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    [n]
  );
  return f;
};

var regeneratorRuntime = require('regenerator-runtime'),
  module26 = require('@babel/runtime/helpers/slicedToArray'),
  React = require('react');
