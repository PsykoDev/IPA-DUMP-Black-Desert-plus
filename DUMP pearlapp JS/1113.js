var module6 = require('./6'),
  module17 = require('./17'),
  u = module17.NativeModules.RNCNetInfo;

if (!u)
  throw new Error(
    '@react-native-community/netinfo: NativeModule.RNCNetInfo is null. To fix this issue try these steps:\n\n\u2022 Run `react-native link @react-native-community/netinfo` in the project root.\n\u2022 Rebuild and re-run the app.\n\u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n\u2022 Check that the library was linked correctly when you used the link command by running through the manual installation instructions in the README.\n* If you are getting this error while unit testing you need to mock the native module. Follow the guide in the README.\n\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-netinfo'
  );
var s = null,
  h = module6.default({}, u, {
    get eventEmitter() {
      if (!s) s = new module17.NativeEventEmitter(u);
      return s;
    },
  });
exports.default = h;
