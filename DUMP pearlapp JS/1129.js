var module17 = require('./17'),
  module755 = require('./755'),
  n = module17.StyleSheet.create({
    headerStyle: {
      backgroundColor: module755.Color.mainTheme,
    },
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    appLogo: {
      width: 125,
      resizeMode: 'contain',
    },
    alarmVersionText: {
      fontSize: 18,
      color: '#C6A567',
    },
    updateButton: {
      width: 190,
      height: 43.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    updateButtonText: {
      fontSize: 16,
      lineHeight: 25,
      color: 'white',
    },
    nowVersionText: {
      fontSize: 16,
      color: '#D6D0C3',
      marginTop: 16,
    },
    nowVersionNumber: {
      fontSize: 16,
      color: '#D6D0C3',
      marginTop: 8,
    },
  });

exports.default = n;
