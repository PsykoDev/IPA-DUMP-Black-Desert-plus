exports.getSecurityLevel = function () {
  if (!n.getSecurityLevel) return Promise.resolve(null);
  return n.getSecurityLevel();
};

exports.canImplyAuthentication = function (t) {
  if (!n.canCheckAuthentication) return Promise.resolve(false);
  return n.canCheckAuthentication(t);
};

exports.getSupportedBiometryType = function () {
  if (!n.getSupportedBiometryType) return Promise.resolve(null);
  return n.getSupportedBiometryType();
};

exports.setInternetCredentials = function (t, s, o, E) {
  return n.setInternetCredentialsForServer(t, s, o, _(E), E);
};

exports.hasInternetCredentials = function (t) {
  return n.hasInternetCredentialsForServer(t);
};

exports.getInternetCredentials = function (t, s) {
  return n.getInternetCredentialsForServer(t, s);
};

exports.resetInternetCredentials = function (t, s) {
  return n.resetInternetCredentialsForServer(t, s);
};

exports.setGenericPassword = function (t, s, o) {
  return n.setGenericPasswordForOptions(C(o), t, s, _(o));
};

exports.getGenericPassword = function (t) {
  return n.getGenericPasswordForOptions(C(t));
};

exports.resetGenericPassword = function (t) {
  return n.resetGenericPasswordForOptions(C(t));
};

exports.requestSharedWebCredentials = function () {
  if ('ios' !== module17.Platform.OS) return Promise.reject(new Error('requestSharedWebCredentials() is not supported on ' + module17.Platform.OS + ' yet'));
  return n.requestSharedWebCredentials();
};

exports.setSharedWebCredentials = function (s, o, E) {
  if ('ios' !== module17.Platform.OS) return Promise.reject(new Error('setSharedWebCredentials() is not supported on ' + module17.Platform.OS + ' yet'));
  return n.setSharedWebCredentialsForServer(s, o, E);
};

var module17 = require('./17'),
  n = module17.NativeModules.RNKeychainManager,
  s = Object.freeze({
    ANY: n.SECURITY_LEVEL_ANY,
    SECURE_SOFTWARE: n.SECURITY_LEVEL_SECURE_SOFTWARE,
    SECURE_HARDWARE: n.SECURITY_LEVEL_SECURE_HARDWARE,
  });

exports.SECURITY_LEVEL = s;
var o = Object.freeze({
  WHEN_UNLOCKED: 'AccessibleWhenUnlocked',
  AFTER_FIRST_UNLOCK: 'AccessibleAfterFirstUnlock',
  ALWAYS: 'AccessibleAlways',
  WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: 'AccessibleWhenPasscodeSetThisDeviceOnly',
  WHEN_UNLOCKED_THIS_DEVICE_ONLY: 'AccessibleWhenUnlockedThisDeviceOnly',
  AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: 'AccessibleAfterFirstUnlockThisDeviceOnly',
  ALWAYS_THIS_DEVICE_ONLY: 'AccessibleAlwaysThisDeviceOnly',
});
exports.ACCESSIBLE = o;
var E = Object.freeze({
  USER_PRESENCE: 'UserPresence',
  BIOMETRY_ANY: 'BiometryAny',
  BIOMETRY_CURRENT_SET: 'BiometryCurrentSet',
  DEVICE_PASSCODE: 'DevicePasscode',
  APPLICATION_PASSWORD: 'ApplicationPassword',
  BIOMETRY_ANY_OR_DEVICE_PASSCODE: 'BiometryAnyOrDevicePasscode',
  BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE: 'BiometryCurrentSetOrDevicePasscode',
});
exports.ACCESS_CONTROL = E;
var c = Object.freeze({
  DEVICE_PASSCODE_OR_BIOMETRICS: 'AuthenticationWithBiometricsDevicePasscode',
  BIOMETRICS: 'AuthenticationWithBiometrics',
});
exports.AUTHENTICATION_TYPE = c;
var S = Object.freeze({
  TOUCH_ID: 'TouchID',
  FACE_ID: 'FaceID',
  FINGERPRINT: 'Fingerprint',
});

function C(n) {
  if ('ios' !== module17.Platform.OS) return 'object' == typeof n ? n.service : n;
  else
    return 'string' == typeof n
      ? {
          service: n,
        }
      : n;
}

function _(t) {
  var n = undefined;
  if ('object' == typeof t) n = t.securityLevel;
  return n || s.ANY;
}

exports.BIOMETRY_TYPE = S;
