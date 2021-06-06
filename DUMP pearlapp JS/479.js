module.exports = {
  get createAppContainer() {
    return require('./480').default;
  },

  get createKeyboardAwareNavigator() {
    return require('./483').default;
  },

  get createNavigationAwareScrollable() {
    return require('./484').default;
  },

  get withOrientation() {
    return require('./485').default;
  },

  get ResourceSavingSceneView() {
    return require('./486').default;
  },

  get SafeAreaView() {
    return require('./487').default;
  },

  get ScrollView() {
    return require('./490').ScrollView;
  },

  get FlatList() {
    return require('./490').FlatList;
  },

  get SectionList() {
    return require('./490').SectionList;
  },

  get Themed() {
    return require('./491').default;
  },

  get createNavigationFactory() {
    return require('./492').default;
  },

  get NavigationContainer() {
    return require('./492').default;
  },
};
