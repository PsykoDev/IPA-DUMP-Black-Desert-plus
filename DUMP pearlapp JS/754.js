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
      width: module498.UIManager.getWidth(0.7),
      height: module498.UIManager.getHeight(0.05),
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
    },
  });

exports.default = l;
