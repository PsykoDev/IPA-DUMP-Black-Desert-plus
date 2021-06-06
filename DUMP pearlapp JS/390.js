exports.default = function (t) {
  var l = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : undefined;

  function c(u) {
    return React.default.createElement(
      module392.default,
      {
        style: [f.container, l],
      },
      React.default.createElement(t, u)
    );
  }

  c.displayName = 'gestureHandlerRootHOC(' + (t.displayName || t.name) + ')';
  module391.default(c, t);
  return c;
};

var React = require('react'),
  module17 = require('./17'),
  module391 = require('./391'),
  module392 = require('./392');

var f = module17.StyleSheet.create({
  container: {
    flex: 1,
  },
});
