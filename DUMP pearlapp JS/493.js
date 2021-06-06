var t = function (t, o) {
  throw new Error(t + '. See https://reactnavigation.org/docs/' + o + '.html for more details.');
};

module.exports = {
  get createNavigationContainer() {
    throw new Error(
      '`createNavigationContainer()` has been removed. Use `createAppContainer()` instead. You can also import createAppContainer directly from `@react-navigation/native`.'
    );
  },

  get createStackNavigator() {
    t('`createStackNavigator()` has been moved to `react-navigation-stack`', 'stack-navigator');
  },

  get createBottomTabNavigator() {
    t('`createBottomTabNavigator()` has been moved to `react-navigation-tabs`', 'bottom-tab-navigator');
  },

  get createMaterialTopTabNavigator() {
    t('`createMaterialTopTabNavigator()` has been moved to `react-navigation-tabs`', 'material-top-tab-navigator');
  },

  get createDrawerNavigator() {
    t('`createDrawerNavigator()` has been moved to `react-navigation-drawer`', 'drawer-navigator');
  },

  get StackGestureContext() {
    t('`StackGestureContext` has been moved to `react-navigation-stack`', 'stack-navigator');
  },

  get DrawerGestureContext() {
    t('`DrawerGestureContext` has been moved to `react-navigation-drawer`', 'stack-navigator');
  },

  get DrawerRouter() {
    t('`DrawerRouter` has been moved to `react-navigation-drawer`', 'drawer-navigator');
  },

  get DrawerActions() {
    t('`DrawerActions` has been moved to `react-navigation-drawer`', 'drawer-navigator');
  },

  get Transitioner() {
    t('`Transitioner` has been removed.', 'stack-navigator');
  },

  get StackView() {
    t('`StackView` has been removed', 'stack-navigator');
  },

  get StackViewCard() {
    t('`StackViewCard` has been removed', 'stack-navigator');
  },

  get StackViewTransitionConfigs() {
    t('`StackViewTransitionConfigs` has been removed', 'stack-navigator');
  },

  get Header() {
    t('`Header` has been moved to `react-navigation-stack`', 'stack-navigator');
  },

  get HeaderTitle() {
    t('`HeaderTitle` has been moved to `react-navigation-stack`', 'stack-navigator');
  },

  get HeaderBackButton() {
    t('`HeaderBackButton` has been moved to `react-navigation-stack`', 'stack-navigator');
  },

  get HeaderStyleInterpolator() {
    t('`HeaderStyleInterpolator` has been removed', 'stack-navigator');
  },

  get DrawerView() {
    t('`createStackNavigator()` has been moved to `react-navigation-drawer`', 'stack-navigator');
  },

  get DrawerItems() {
    t('`DrawerItems` has been moved to `react-navigation-drawer`', 'drawer-navigator');
  },

  get DrawerSidebar() {
    t('`DrawerSidebar` has been moved to `react-navigation-drawer`', 'drawer-navigator');
  },

  get BottomTabBar() {
    t('`BottomTabBar` has been moved to `react-navigation-tabs`', 'bottom-tab-navigator');
  },

  get MaterialTopTabBar() {
    t('`MaterialTopTabBar` has been moved to `react-navigation-tabs`', 'material-top-tab-navigator');
  },
};
