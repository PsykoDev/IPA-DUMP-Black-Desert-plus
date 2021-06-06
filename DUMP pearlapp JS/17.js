require('./18');

var module19 = require('./19');

module.exports = {
  get AccessibilityInfo() {
    return require('./22');
  },

  get ActivityIndicator() {
    return require('./55');
  },

  get ART() {
    module19(
      'art-moved',
      "React Native ART has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/art' instead of 'react-native'. See https://github.com/react-native-community/art"
    );
    return require('./186');
  },

  get Button() {
    return require('./196');
  },

  get CheckBox() {
    module19(
      'checkBox-moved',
      "CheckBox has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/checkbox' instead of 'react-native'. See https://github.com/react-native-community/react-native-checkbox"
    );
    return require('./287');
  },

  get DatePickerIOS() {
    module19(
      'DatePickerIOS-merged',
      "DatePickerIOS has been merged with DatePickerAndroid and will be removed in a future release. It can now be installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. See https://github.com/react-native-community/react-native-datetimepicker"
    );
    return require('./288');
  },

  get DrawerLayoutAndroid() {
    return require('./287');
  },

  get FlatList() {
    return require('./246');
  },

  get Image() {
    return require('./268');
  },

  get ImageBackground() {
    return require('./291');
  },

  get InputAccessoryView() {
    return require('./292');
  },

  get KeyboardAvoidingView() {
    return require('./294');
  },

  get MaskedViewIOS() {
    return require('./295');
  },

  get Modal() {
    return require('./297');
  },

  get Picker() {
    return require('./304');
  },

  get PickerIOS() {
    return require('./306');
  },

  get ProgressBarAndroid() {
    return require('./287');
  },

  get ProgressViewIOS() {
    return require('./309');
  },

  get SafeAreaView() {
    return require('./311');
  },

  get ScrollView() {
    return require('./254');
  },

  get SectionList() {
    return require('./274');
  },

  get SegmentedControlIOS() {
    return require('./313');
  },

  get Slider() {
    module19(
      'slider-moved',
      "Slider has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/slider' instead of 'react-native'. See https://github.com/react-native-community/react-native-slider"
    );
    return require('./315');
  },

  get Switch() {
    return require('./317');
  },

  get RefreshControl() {
    return require('./251');
  },

  get StatusBar() {
    return require('./320');
  },

  get Text() {
    return require('./197');
  },

  get TextInput() {
    return require('./322');
  },

  get Touchable() {
    return require('./203');
  },

  get TouchableHighlight() {
    return require('./331');
  },

  get TouchableNativeFeedback() {
    return require('./212');
  },

  get TouchableOpacity() {
    return require('./213');
  },

  get TouchableWithoutFeedback() {
    return require('./279');
  },

  get View() {
    return require('./88');
  },

  get VirtualizedList() {
    return require('./248');
  },

  get VirtualizedSectionList() {
    return require('./275');
  },

  get ActionSheetIOS() {
    return require('./332');
  },

  get Alert() {
    return require('./140');
  },

  get Animated() {
    return require('./214');
  },

  get AppRegistry() {
    return require('./334');
  },

  get AppState() {
    return require('./348');
  },

  get AsyncStorage() {
    module19(
      'async-storage-moved',
      "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/async-storage' instead of 'react-native'. See https://github.com/react-native-community/react-native-async-storage"
    );
    return require('./351');
  },

  get BackHandler() {
    return require('./345');
  },

  get Clipboard() {
    return require('./353');
  },

  get DatePickerAndroid() {
    module19(
      'DatePickerAndroid-merged',
      "DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release. It can now be installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. See https://github.com/react-native-community/react-native-datetimepicker"
    );
    return require('./355');
  },

  get DeviceInfo() {
    return require('./356');
  },

  get Dimensions() {
    return require('./62');
  },

  get Easing() {
    return require('./242');
  },

  get findNodeHandle() {
    return require('./90').findNodeHandle;
  },

  get I18nManager() {
    return require('./302');
  },

  get ImagePickerIOS() {
    module19(
      'imagePickerIOS-moved',
      "ImagePickerIOS has been extracted from react-native core and will be removed in a future release. Please upgrade to use either '@react-native-community/react-native-image-picker' or 'expo-image-picker'. If you cannot upgrade to a different library, please install the deprecated '@react-native-community/image-picker-ios' package. See https://github.com/react-native-community/react-native-image-picker-ios"
    );
    return require('./357');
  },

  get InteractionManager() {
    return require('./223');
  },

  get Keyboard() {
    return require('./258');
  },

  get LayoutAnimation() {
    return require('./260');
  },

  get Linking() {
    return require('./359');
  },

  get NativeDialogManagerAndroid() {
    return require('./141').default;
  },

  get NativeEventEmitter() {
    return require('./124');
  },

  get PanResponder() {
    return require('./361');
  },

  get PermissionsAndroid() {
    return require('./363');
  },

  get PixelRatio() {
    return require('./61');
  },

  get PushNotificationIOS() {
    module19(
      'pushNotificationIOS-moved',
      "PushNotificationIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. See https://github.com/react-native-community/react-native-push-notification-ios"
    );
    return require('./365');
  },

  get Settings() {
    return require('./367');
  },

  get Share() {
    return require('./369');
  },

  get StatusBarIOS() {
    module19('StatusBarIOS-merged', 'StatusBarIOS has been merged with StatusBar and will be removed in a future release. Use StatusBar for mutating the status bar');
    return require('./371');
  },

  get StyleSheet() {
    return require('./60');
  },

  get Systrace() {
    return require('./39');
  },

  get TimePickerAndroid() {
    module19(
      'TimePickerAndroid-merged',
      "TimePickerAndroid has been merged with DatePickerIOS and DatePickerAndroid and will be removed in a future release. It can now be installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. See https://github.com/react-native-community/react-native-datetimepicker"
    );
    return require('./372');
  },

  get ToastAndroid() {
    return require('./374');
  },

  get TurboModuleRegistry() {
    return require('./24');
  },

  get TVEventHandler() {
    return require('./207');
  },

  get UIManager() {
    return require('./75');
  },

  get unstable_batchedUpdates() {
    return require('./90').unstable_batchedUpdates;
  },

  get useWindowDimensions() {
    return require('./375').default;
  },

  get UTFSequence() {
    return require('./376');
  },

  get Vibration() {
    return require('./377');
  },

  get YellowBox() {
    return require('./379');
  },

  get DeviceEventEmitter() {
    return require('./48');
  },

  get NativeAppEventEmitter() {
    return require('./151');
  },

  get NativeModules() {
    return require('./25');
  },

  get Platform() {
    return require('./58');
  },

  get processColor() {
    return require('./82');
  },

  get requireNativeComponent() {
    return require('./182');
  },

  get unstable_RootTagContext() {
    return require('./301');
  },

  get ColorPropType() {
    return require('./66');
  },

  get EdgeInsetsPropType() {
    return require('./199');
  },

  get PointPropType() {
    return require('./380');
  },

  get ViewPropTypes() {
    return require('./324');
  },
};
