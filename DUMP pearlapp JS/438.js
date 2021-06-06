module.exports = {
  get StateUtils() {
    return require('./439').default;
  },

  get getNavigation() {
    return require('./441').default;
  },

  get createNavigator() {
    return require('./448').default;
  },

  get NavigationContext() {
    return require('./451').default;
  },

  get NavigationProvider() {
    return require('./451').default.Provider;
  },

  get NavigationConsumer() {
    return require('./451').default.Consumer;
  },

  get createSwitchNavigator() {
    return require('./452').default;
  },

  get ThemeContext() {
    return require('./449').default;
  },

  get ThemeProvider() {
    return require('./449').default.Provider;
  },

  get ThemeConsumer() {
    return require('./449').default.Consumer;
  },

  get ThemeColors() {
    return require('./469').default;
  },

  get useTheme() {
    return require('./470').default;
  },

  get NavigationActions() {
    return require('./443');
  },

  get StackActions() {
    return require('./458');
  },

  get SwitchActions() {
    return require('./457');
  },

  get StackRouter() {
    return require('./471').default;
  },

  get TabRouter() {
    return require('./473').default;
  },

  get SwitchRouter() {
    return require('./453').default;
  },

  get createConfigGetter() {
    return require('./455').default;
  },

  get getScreenForRouteName() {
    return require('./454').default;
  },

  get validateRouteConfigMap() {
    return require('./459').default;
  },

  get getActiveChildNavigationOptions() {
    return require('./475').default;
  },

  get pathUtils() {
    return require('./460');
  },

  get SceneView() {
    return require('./468').default;
  },

  get SwitchView() {
    return require('./467').default;
  },

  get NavigationEvents() {
    return require('./476').default;
  },

  get withNavigation() {
    return require('./477').default;
  },

  get withNavigationFocus() {
    return require('./478').default;
  },
};
