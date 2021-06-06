exports.default = function () {
  var t = module62.default.get('window'),
    n = React.useState(false)[1].bind(null, function (t) {
      return !t;
    }),
    c = React.useState(t)[0];
  React.useEffect(
    function () {
      module62.default.addEventListener('change', n);
      if (module62.default.get('window') !== c) n();
      return function () {
        module62.default.removeEventListener('change', n);
      };
    },
    [n, c]
  );
  return t;
};

var module62 = require('./62'),
  React = require('react');
