exports.default = function (t) {
  var l = t.onPress,
    s = t.accessibilityLabel;
  return React.default.createElement(
    module17.TouchableOpacity,
    {
      style: {
        borderRadius: Math.round(module17.Dimensions.get('window').width + module17.Dimensions.get('window').height) / 2,
        borderColor: '#413e3e',
        borderWidth: 1,
        width: 20,
        height: 20,
        backgroundColor: '#413e3e',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 4,
        marginStart: 4,
      },
      onPress: function () {
        l();
      },
      accessibilityLabel: s,
    },
    React.default.createElement(
      module17.Text,
      {
        style: {
          fontSize: 12,
          color: '#87827a',
          textAlign: 'center',
        },
      },
      'X'
    )
  );
};

var React = require('react'),
  module17 = require('./17');
