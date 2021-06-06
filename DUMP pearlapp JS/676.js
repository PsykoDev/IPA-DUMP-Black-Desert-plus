exports.default = function () {
  var o = module437.useTheme();
  return React.useMemo(
    function () {
      var u = module437.ThemeColors[o],
        t = 'dark' === o;
      return {
        dark: t,
        colors: {
          primary: t ? 'rgb(10, 132, 255)' : 'rgb(0, 122, 255)',
          background: t ? 'rgb(1, 1, 1)' : 'rgb(242, 242, 242)',
          card: u.header,
          text: u.label,
          border: u.headerBorder,
        },
      };
    },
    [o]
  );
};

var React = require('react'),
  module437 = require('./437');
