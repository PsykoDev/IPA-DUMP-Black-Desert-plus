var module17 = require('./17'),
  module755 = require('./755'),
  n = module17.StyleSheet.create({
    headerStyle: {
      backgroundColor: module755.Color.mainTheme,
    },
    content: {
      flex: 1,
      width: '100%',
      height: '100%',
      marginTop: 16,
      marginBottom: 16,
    },
    regionIcon: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: 'transparent',
      borderTopWidth: 3,
      borderBottomWidth: 3,
      borderLeftWidth: 3,
      borderRightWidth: 3,
      borderColor: '#705D53',
      alignItems: 'center',
      justifyContent: 'center',
    },
    regionIconText: {
      color: '#705D53',
      fontWeight: 'bold',
    },
    accountID: {
      color: module755.Color.optionText,
      fontSize: 24,
      marginTop: 12,
      marginBottom: 10,
      width: '100%',
      textAlign: 'center',
    },
    linkingItemList: {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
      width: '100%',
    },
    linkingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    linkingItemText: {
      color: module755.Color.optionText,
      fontSize: 16,
    },
    button: {
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
    },
    settingItemLineStyle: {
      width: '100%',
      borderBottomColor: '#3D4041',
      borderBottomWidth: 1,
    },
  });

exports.default = n;
