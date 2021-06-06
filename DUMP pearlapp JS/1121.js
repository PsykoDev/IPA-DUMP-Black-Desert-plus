var module17 = require('./17'),
  module755 = require('./755'),
  n = module17.StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 0.2,
      marginTop: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginButton: {
      flex: 0.3,
      alignItems: 'center',
      marginTop: 96,
    },
    platformAndRegion: {
      fontSize: 15,
      textAlign: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: module755.Color.borderBottom,
      borderRadius: 4,
      color: module755.Color.borderLine,
    },
    topBlank: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      lineHeight: 20,
      paddingTop: 4,
      color: module755.Color.headerTitle,
      marginTop: 8,
    },
    helperContainer: {
      flexDirection: 'row',
      marginTop: 24,
      marginBottom: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    helperText: {
      fontSize: 11,
      lineHeight: 11,
      paddingTop: 11,
      color: module755.Color.mainText,
    },
  });

exports.default = n;
