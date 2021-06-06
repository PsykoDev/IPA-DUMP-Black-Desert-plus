exports.default = function (t) {
  var l = t.style,
    u =
      undefined === l
        ? {
            flex: 1,
            paddingTop: 16,
            paddingBottom: 16,
            paddingStart: 16,
            paddingEnd: 16,
          }
        : l,
    c = t.title,
    v = undefined === c ? 'undefined' : c,
    p = t.value,
    x = undefined === p ? 'undefined' : p;
  return React.default.createElement(
    module17.View,
    {
      style: u,
    },
    React.default.createElement(
      module17.View,
      {
        style: [f.content],
      },
      React.default.createElement(
        module17.Text,
        {
          style: f.titleText,
        },
        v
      ),
      React.default.createElement(module17.View, {
        style: f.border,
      }),
      React.default.createElement(
        module17.Text,
        {
          style: f.valueText,
        },
        x
      )
    )
  );
};

var React = require('react'),
  module17 = require('./17'),
  module755 = require('./755');

var f = module17.StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  border: {
    marginTop: 4,
    marginBottom: 4,
  },
  titleText: {
    color: module755.Color.optionText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  valueText: {
    color: module755.Color.optionText,
    fontSize: 15,
    fontWeight: 'normal',
  },
});
