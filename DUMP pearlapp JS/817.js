exports.default = function (t) {
  var o = t.style,
    u =
      undefined === o
        ? {
            paddingTop: 16,
            paddingBottom: 16,
            paddingStart: 16,
            paddingEnd: 16,
          }
        : o,
    f = t.title,
    v = undefined === f ? 'undefined' : f,
    x = t.value,
    s = undefined === x ? '' : x;
  return React.default.createElement(
    module17.View,
    {
      style: [c.content, u],
    },
    React.default.createElement(
      module17.Text,
      {
        style: c.titleText,
      },
      v
    ),
    React.default.createElement(
      module17.View,
      {
        style: c.valueTextContent,
      },
      React.default.createElement(
        module17.Text,
        {
          style: c.valueText,
        },
        s
      )
    )
  );
};

var React = require('react'),
  module17 = require('./17'),
  module755 = require('./755');

var c = module17.StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: module755.Color.optionText,
    fontSize: 18,
  },
  valueTextContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    color: '#927F75',
    textAlign: 'right',
    marginRight: 10,
    fontSize: 14,
  },
});
