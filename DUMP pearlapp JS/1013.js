var module17 = require('./17'),
  module498 = require('./498'),
  module755 = require('./755'),
  l = module17.StyleSheet.create({
    titleStyle: {
      fontSize: 25,
      lineHeight: 25,
      paddingTop: 25,
      color: module755.Color.headerTitle,
      textAlign: 'center',
    },
    contentStyle: {
      fontSize: 20,
      lineHeight: 20,
      paddingTop: 20,
      color: module755.Color.activeRadioText,
      textAlign: 'center',
      marginTop: 5,
    },
    nav: {
      flexDirection: 'row',
      marginTop: module498.UIManager.marginSizeWithMax(5, 10),
    },
    activeNav: {
      width: 13,
      resizeMode: 'contain',
      marginLeft: 3,
    },
    nonActiveNav: {
      width: 4,
      resizeMode: 'contain',
      marginLeft: 3,
    },
    logo: {
      width: 300,
      height: 55,
      resizeMode: 'contain',
    },
    background: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    headerStyle: {
      backgroundColor: module755.Color.mainTheme,
    },
    container: {
      flex: 1,
    },
    title: {
      flex: 0.25,
    },
    content: {
      flex: 0.75,
      alignItems: 'center',
    },
    footer: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: module498.UIManager.marginSizeWithMax(5, 30),
    },
  });

exports.default = l;
