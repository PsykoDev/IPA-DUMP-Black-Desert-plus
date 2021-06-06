var module17 = require('./17'),
  module755 = require('./755'),
  n = module17.StyleSheet.create({
    headerStyle: {
      backgroundColor: module755.Color.mainTheme,
    },
    container: {
      backgroundColor: module755.Color.mainTheme,
      paddingLeft: 30,
      paddingRight: 30,
    },
    title: {
      flex: 1,
    },
    content: {
      flex: 1,
      marginTop: 16,
    },
    scrollViewStyle: {
      width: '100%',
      height: '100%',
    },
    settingCategoryTitle: {
      fontSize: 16,
      textAlign: 'left',
      color: module755.Color.optionText,
      marginTop: 4,
      paddingLeft: 10,
    },
    settingItemLineStyle: {
      width: '100%',
      borderBottomColor: '#3D4041',
      borderBottomWidth: 1,
    },
    settingPushAlarmItemContentStyle: {
      width: '100%',
    },
    settingPushAlarmItemViewStyle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingBottom: 20,
    },
    settingPushAlarmItemTextStyle: {
      flex: 1,
      paddingTop: 4,
      color: module755.Color.optionText,
      fontSize: 18,
      paddingLeft: 10,
    },
    settingPushAlarmItemDisabledTextStyle: {
      flex: 1,
      paddingTop: 4,
      color: module755.Color.inactiveText,
      fontSize: 18,
      paddingLeft: 10,
    },
  });

exports.default = n;
