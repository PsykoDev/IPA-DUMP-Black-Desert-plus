exports.getUniqueId = oe;
exports.syncUniqueId = le;
exports.getInstanceId = se;
exports.getInstanceIdSync = ie;
exports.getSerialNumber = ce;
exports.getSerialNumberSync = fe;
exports.getAndroidId = de;
exports.getAndroidIdSync = Se;
exports.getIpAddress = me;
exports.getIpAddressSync = Pe;
exports.isCameraPresent = pe;
exports.isCameraPresentSync = ge;
exports.getMacAddress = ye;
exports.getMacAddressSync = be;
exports.getDeviceId = we;
exports.getManufacturer = Oe;
exports.getManufacturerSync = xe;
exports.getModel = ke;
exports.getBrand = ve;
exports.getSystemName = he;
exports.getSystemVersion = Ie;
exports.getBuildId = Ae;
exports.getBuildIdSync = Be;
exports.getApiLevel = Le;
exports.getApiLevelSync = Me;
exports.getBundleId = Te;
exports.getInstallerPackageName = De;
exports.getInstallerPackageNameSync = Fe;
exports.getApplicationName = Ce;
exports.getBuildNumber = Ne;
exports.getVersion = Ue;
exports.getReadableVersion = He;
exports.getDeviceName = Ee;
exports.getDeviceNameSync = Re;
exports.getUsedMemory = Ve;
exports.getUsedMemorySync = _e;
exports.getUserAgent = qe;
exports.getUserAgentSync = je;
exports.getFontScale = We;
exports.getFontScaleSync = ze;
exports.getBootloader = Ge;
exports.getBootloaderSync = Je;
exports.getDevice = Ke;
exports.getDeviceSync = Qe;
exports.getDisplay = Xe;
exports.getDisplaySync = Ye;
exports.getFingerprint = Ze;
exports.getFingerprintSync = $e;
exports.getHardware = et;
exports.getHardwareSync = tt;
exports.getHost = nt;
exports.getHostSync = rt;
exports.getProduct = at;
exports.getProductSync = ut;
exports.getTags = ot;
exports.getTagsSync = lt;
exports.getType = st;
exports.getTypeSync = it;
exports.getBaseOs = ct;
exports.getBaseOsSync = ft;
exports.getPreviewSdkInt = dt;
exports.getPreviewSdkIntSync = St;
exports.getSecurityPatch = mt;
exports.getSecurityPatchSync = Pt;
exports.getCodename = pt;
exports.getCodenameSync = gt;
exports.getIncremental = yt;
exports.getIncrementalSync = bt;
exports.isEmulator = wt;
exports.isEmulatorSync = Ot;
exports.isTablet = xt;
exports.isPinOrFingerprintSet = kt;
exports.isPinOrFingerprintSetSync = vt;
exports.hasNotch = ht;
exports.getFirstInstallTime = It;
exports.getFirstInstallTimeSync = At;
exports.getInstallReferrer = Bt;
exports.getInstallReferrerSync = Lt;
exports.getLastUpdateTime = Mt;
exports.getLastUpdateTimeSync = Tt;
exports.getPhoneNumber = Dt;
exports.getPhoneNumberSync = Ft;
exports.getCarrier = Ct;
exports.getCarrierSync = Nt;
exports.getTotalMemory = Ut;
exports.getTotalMemorySync = Ht;
exports.getMaxMemory = Et;
exports.getMaxMemorySync = Rt;
exports.getTotalDiskCapacity = Vt;
exports.getTotalDiskCapacitySync = _t;
exports.getFreeDiskStorage = qt;
exports.getFreeDiskStorageSync = jt;
exports.getBatteryLevel = Wt;
exports.getBatteryLevelSync = zt;
exports.getPowerState = Gt;
exports.getPowerStateSync = Jt;
exports.isBatteryCharging = Kt;
exports.isBatteryChargingSync = Qt;
exports.isLandscape = Xt;
exports.isLandscapeSync = Yt;
exports.isAirplaneMode = Zt;
exports.isAirplaneModeSync = $t;
exports.getDeviceType = en;

exports.getDeviceTypeSync = function () {
  if (!Q) Q = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS ? module607.default.deviceType : 'unknown';
  return Q;
};

exports.supportedAbis = tn;
exports.supportedAbisSync = nn;
exports.supported32BitAbis = rn;
exports.supported32BitAbisSync = an;
exports.supported64BitAbis = un;
exports.supported64BitAbisSync = on;
exports.hasSystemFeature = ln;
exports.hasSystemFeatureSync = sn;
exports.getSystemAvailableFeatures = cn;
exports.getSystemAvailableFeaturesSync = fn;
exports.isLocationEnabled = dn;
exports.isLocationEnabledSync = Sn;
exports.isHeadphonesConnected = mn;
exports.isHeadphonesConnectedSync = Pn;
exports.getAvailableLocationProviders = pn;
exports.getAvailableLocationProvidersSync = gn;
exports.getDeviceToken = yn;
exports.useBatteryLevel = wn;
exports.useBatteryLevelIsLow = On;
exports.usePowerState = xn;
exports.useFirstInstallTime = kn;
exports.useDeviceName = vn;
exports.useHasSystemFeature = hn;
exports.useIsEmulator = In;

var n,
  u,
  o,
  l,
  s,
  c,
  f,
  S,
  P,
  p,
  y,
  b,
  w,
  O,
  x,
  k,
  v,
  h,
  I,
  A,
  B,
  L,
  M,
  T,
  D,
  F,
  C,
  N,
  U,
  H,
  E,
  R,
  V,
  _,
  q,
  j,
  W,
  z,
  G,
  J,
  K,
  Q,
  X,
  Y,
  Z,
  module26 = require('@babel/runtime/helpers/slicedToArray'),
  regeneratorRuntime = require('regenerator-runtime'),
  React = require('react'),
  module17 = require('./17'),
  module605 = require('./605'),
  module606 = require('./606'),
  module607 = require('./607');

function oe() {
  if (!n) n = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.uniqueId : 'unknown';
  return n;
}

function le() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('ios' !== module17.Platform.OS) {
              t.next = 6;
              break;
            }

            t.next = 3;
            return regeneratorRuntime.default.awrap(module607.default.syncUniqueId());

          case 3:
            n = t.sent;
            t.next = 7;
            break;

          case 6:
            n = oe();

          case 7:
            return t.abrupt('return', n);

          case 8:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function se() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (u) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getInstanceId());

          case 4:
            u = t.sent;
            t.next = 8;
            break;

          case 7:
            u = 'unknown';

          case 8:
            return t.abrupt('return', u);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function ie() {
  if (!u) u = 'android' === module17.Platform.OS ? module607.default.getInstanceIdSync() : 'unknown';
  return u;
}

function ce() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (o) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getSerialNumber());

          case 4:
            o = t.sent;
            t.next = 8;
            break;

          case 7:
            o = 'unknown';

          case 8:
            return t.abrupt('return', o);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function fe() {
  if (!o) o = 'android' === module17.Platform.OS ? module607.default.getSerialNumberSync() : 'unknown';
  return o;
}

function de() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (l) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getAndroidId());

          case 4:
            l = t.sent;
            t.next = 8;
            break;

          case 7:
            l = 'unknown';

          case 8:
            return t.abrupt('return', l);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Se() {
  if (!l) l = 'android' === module17.Platform.OS ? module607.default.getAndroidIdSync() : 'unknown';
  return l;
}

function me() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'windows' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getIpAddress());

          case 2:
            return t.abrupt('return', 'unknown');

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Pe() {
  return 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.getIpAddressSync() : 'unknown';
}

function pe() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'windows' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.isCameraPresent());

          case 2:
            return t.abrupt('return', false);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function ge() {
  return ('android' === module17.Platform.OS || 'windows' === module17.Platform.OS || 'web' === module17.Platform.OS) && module607.default.isCameraPresentSync();
}

function ye() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS) {
              t.next = 4;
              break;
            }

            return t.abrupt('return', module607.default.getMacAddress());

          case 4:
            if ('ios' !== module17.Platform.OS) {
              t.next = 6;
              break;
            }

            return t.abrupt('return', '02:00:00:00:00:00');

          case 6:
            return t.abrupt('return', 'unknown');

          case 7:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function be() {
  return 'android' === module17.Platform.OS ? module607.default.getMacAddressSync() : 'ios' === module17.Platform.OS ? '02:00:00:00:00:00' : 'unknown';
}

function we() {
  if (!s) s = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.deviceId : 'unknown';
  return s;
}

function Oe() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (c) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'windows' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getSystemManufacturer());

          case 4:
            c = t.sent;
            t.next = 8;
            break;

          case 7:
            c = 'ios' === module17.Platform.OS ? 'Apple' : 'unknown';

          case 8:
            return t.abrupt('return', c);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function xe() {
  if (!c)
    c =
      'android' === module17.Platform.OS || 'windows' === module17.Platform.OS
        ? module607.default.getSystemManufacturerSync()
        : 'ios' === module17.Platform.OS
        ? 'Apple'
        : 'unknown';
  return c;
}

function ke() {
  if (!f) f = 'ios' === module17.Platform.OS || 'android' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.model : 'unknown';
  return f;
}

function ve() {
  if (!S) S = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.brand : 'unknown';
  return S;
}

function he() {
  if (!P)
    P = 'ios' === module17.Platform.OS ? module607.default.systemName : 'android' === module17.Platform.OS ? 'Android' : 'windows' === module17.Platform.OS ? 'Windows' : 'unknown';
  return P;
}

function Ie() {
  if (!p) p = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.systemVersion : 'unknown';
  return p;
}

function Ae() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (y) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getBuildId());

          case 4:
            y = t.sent;
            t.next = 8;
            break;

          case 7:
            y = 'unknown';

          case 8:
            return t.abrupt('return', y);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Be() {
  if (!y) y = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS ? module607.default.getBuildIdSync() : 'unknown';
  return y;
}

function Le() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (b) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getApiLevel());

          case 4:
            b = t.sent;
            t.next = 8;
            break;

          case 7:
            b = -1;

          case 8:
            return t.abrupt('return', b);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Me() {
  if (!b) b = 'android' === module17.Platform.OS ? module607.default.getApiLevelSync() : -1;
  return b;
}

function Te() {
  if (!w) w = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.bundleId : 'unknown';
  return w;
}

function De() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (O) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getInstallerPackageName());

          case 4:
            O = t.sent;
            t.next = 8;
            break;

          case 7:
            O = 'unknown';

          case 8:
            return t.abrupt('return', O);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Fe() {
  if (!O) O = 'android' === module17.Platform.OS ? module607.default.getInstallerPackageNameSync() : 'unknown';
  return O;
}

function Ce() {
  if (!x) x = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.appName : 'unknown';
  return x;
}

function Ne() {
  if (!k) k = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.buildNumber : 'unknown';
  return k;
}

function Ue() {
  if (!v) v = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.appVersion : 'unknown';
  return v;
}

function He() {
  return Ue() + '.' + Ne();
}

function Ee() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (h) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'windows' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getDeviceName());

          case 4:
            h = t.sent;
            t.next = 8;
            break;

          case 7:
            h = 'unknown';

          case 8:
            return t.abrupt('return', h);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Re() {
  if (!h) h = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.getDeviceNameSync() : 'unknown';
  return h;
}

function Ve() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getUsedMemory());

          case 2:
            return t.abrupt('return', -1);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function _e() {
  return 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'web' === module17.Platform.OS ? module607.default.getUsedMemorySync() : -1;
}

function qe() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (I) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getUserAgent());

          case 4:
            I = t.sent;
            t.next = 8;
            break;

          case 7:
            I = 'unknown';

          case 8:
            return t.abrupt('return', I);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function je() {
  if (!I) I = 'android' === module17.Platform.OS || 'web' === module17.Platform.OS ? module607.default.getUserAgentSync() : 'unknown';
  return I;
}

function We() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getFontScale());

          case 2:
            return t.abrupt('return', -1);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function ze() {
  return 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS ? module607.default.getFontScaleSync() : -1;
}

function Ge() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (A) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getBootloader());

          case 4:
            A = t.sent;
            t.next = 8;
            break;

          case 7:
            A = 'unknown';

          case 8:
            return t.abrupt('return', A);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Je() {
  if (!A) A = 'android' === module17.Platform.OS ? module607.default.getBootloaderSync() : 'unknown';
  return A;
}

function Ke() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (B) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getDevice());

          case 4:
            B = t.sent;
            t.next = 8;
            break;

          case 7:
            B = 'unknown';

          case 8:
            return t.abrupt('return', B);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Qe() {
  if (!B) B = 'android' === module17.Platform.OS ? module607.default.getDeviceSync() : 'unknown';
  return B;
}

function Xe() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (L) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getDisplay());

          case 4:
            L = t.sent;
            t.next = 8;
            break;

          case 7:
            L = 'unknown';

          case 8:
            return t.abrupt('return', L);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Ye() {
  if (!L) L = 'android' === module17.Platform.OS ? module607.default.getDisplaySync() : 'unknown';
  return L;
}

function Ze() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (M) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getFingerprint());

          case 4:
            M = t.sent;
            t.next = 8;
            break;

          case 7:
            M = 'unknown';

          case 8:
            return t.abrupt('return', M);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function $e() {
  if (!M) M = 'android' === module17.Platform.OS ? module607.default.getFingerprintSync() : 'unknown';
  return M;
}

function et() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (T) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getHardware());

          case 4:
            T = t.sent;
            t.next = 8;
            break;

          case 7:
            T = 'unknown';

          case 8:
            return t.abrupt('return', T);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function tt() {
  if (!T) T = 'android' === module17.Platform.OS ? module607.default.getHardwareSync() : 'unknown';
  return T;
}

function nt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (D) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getHost());

          case 4:
            D = t.sent;
            t.next = 8;
            break;

          case 7:
            D = 'unknown';

          case 8:
            return t.abrupt('return', D);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function rt() {
  if (!D) D = 'android' === module17.Platform.OS ? module607.default.getHostSync() : 'unknown';
  return D;
}

function at() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (F) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getProduct());

          case 4:
            F = t.sent;
            t.next = 8;
            break;

          case 7:
            F = 'unknown';

          case 8:
            return t.abrupt('return', F);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function ut() {
  if (!F) F = 'android' === module17.Platform.OS ? module607.default.getProductSync() : 'unknown';
  return F;
}

function ot() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (C) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getTags());

          case 4:
            C = t.sent;
            t.next = 8;
            break;

          case 7:
            C = 'unknown';

          case 8:
            return t.abrupt('return', C);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function lt() {
  if (!C) C = 'android' === module17.Platform.OS ? module607.default.getTagsSync() : 'unknown';
  return C;
}

function st() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (N) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getType());

          case 4:
            N = t.sent;
            t.next = 8;
            break;

          case 7:
            N = 'unknown';

          case 8:
            return t.abrupt('return', N);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function it() {
  if (!N) N = 'android' === module17.Platform.OS ? module607.default.getTypeSync() : 'unknown';
  return N;
}

function ct() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (U) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getBaseOs());

          case 4:
            U = t.sent;
            t.next = 8;
            break;

          case 7:
            U = 'unknown';

          case 8:
            return t.abrupt('return', U);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function ft() {
  if (!U) U = 'android' === module17.Platform.OS || 'web' === module17.Platform.OS ? module607.default.getBaseOsSync() : 'unknown';
  return U;
}

function dt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (H) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getPreviewSdkInt());

          case 4:
            H = t.sent;
            t.next = 8;
            break;

          case 7:
            H = -1;

          case 8:
            return t.abrupt('return', H);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function St() {
  if (!H) H = 'android' === module17.Platform.OS ? module607.default.getPreviewSdkIntSync() : -1;
  return H;
}

function mt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (E) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getSecurityPatch());

          case 4:
            E = t.sent;
            t.next = 8;
            break;

          case 7:
            E = 'unknown';

          case 8:
            return t.abrupt('return', E);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Pt() {
  if (!E) E = 'android' === module17.Platform.OS ? module607.default.getSecurityPatchSync() : 'unknown';
  return E;
}

function pt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (R) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getCodename());

          case 4:
            R = t.sent;
            t.next = 8;
            break;

          case 7:
            R = 'unknown';

          case 8:
            return t.abrupt('return', R);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function gt() {
  if (!R) R = 'android' === module17.Platform.OS ? module607.default.getCodenameSync() : 'unknown';
  return R;
}

function yt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (V) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getIncremental());

          case 4:
            V = t.sent;
            t.next = 8;
            break;

          case 7:
            V = 'unknown';

          case 8:
            return t.abrupt('return', V);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function bt() {
  if (!V) V = 'android' === module17.Platform.OS ? module607.default.getIncrementalSync() : 'unknown';
  return V;
}

function wt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (undefined !== _) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'windows' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.isEmulator());

          case 4:
            _ = t.sent;
            t.next = 8;
            break;

          case 7:
            _ = false;

          case 8:
            return t.abrupt('return', _);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Ot() {
  if (undefined === _) _ = ('android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS) && module607.default.isEmulatorSync();
  return _;
}

function xt() {
  if (undefined === q) q = ('android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS) && module607.default.isTablet;
  return q;
}

function kt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'windows' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.isPinOrFingerprintSet());

          case 2:
            return t.abrupt('return', false);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function vt() {
  return ('android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS) && module607.default.isPinOrFingerprintSetSync();
}

function ht() {
  if (undefined === j) {
    var t = ve(),
      n = ke();
    j =
      -1 !==
      module606.default.findIndex(function (u) {
        return u.brand.toLowerCase() === t.toLowerCase() && u.model.toLowerCase() === n.toLowerCase();
      });
  }

  return j;
}

function It() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (W) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'windows' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getFirstInstallTime());

          case 4:
            W = t.sent;
            t.next = 8;
            break;

          case 7:
            W = -1;

          case 8:
            return t.abrupt('return', W);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function At() {
  if (!W) W = 'android' === module17.Platform.OS || 'windows' === module17.Platform.OS ? module607.default.getFirstInstallTimeSync() : -1;
  return W;
}

function Bt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (z) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getInstallReferrer());

          case 4:
            z = t.sent;
            t.next = 8;
            break;

          case 7:
            z = 'unknown';

          case 8:
            return t.abrupt('return', z);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Lt() {
  if (!z) z = 'android' === module17.Platform.OS || 'web' === module17.Platform.OS ? module607.default.getInstallReferrerSync() : 'unknown';
  return z;
}

function Mt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (G) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getLastUpdateTime());

          case 4:
            G = t.sent;
            t.next = 8;
            break;

          case 7:
            G = -1;

          case 8:
            return t.abrupt('return', G);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Tt() {
  if (!G) G = 'android' === module17.Platform.OS ? module607.default.getLastUpdateTimeSync() : -1;
  return G;
}

function Dt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getPhoneNumber());

          case 2:
            return t.abrupt('return', 'unknown');

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Ft() {
  return 'android' === module17.Platform.OS ? module607.default.getPhoneNumberSync() : 'unknown';
}

function Ct() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getCarrier());

          case 2:
            return t.abrupt('return', 'unknown');

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Nt() {
  return 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS ? module607.default.getCarrierSync() : 'unknown';
}

function Ut() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (J) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'windows' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getTotalMemory());

          case 4:
            J = t.sent;
            t.next = 8;
            break;

          case 7:
            J = -1;

          case 8:
            return t.abrupt('return', J);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Ht() {
  if (!J)
    J =
      'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS || 'web' === module17.Platform.OS
        ? module607.default.getTotalMemorySync()
        : -1;
  return J;
}

function Et() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (K) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'windows' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getMaxMemory());

          case 4:
            K = t.sent;
            t.next = 8;
            break;

          case 7:
            K = -1;

          case 8:
            return t.abrupt('return', K);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Rt() {
  if (!K) K = 'android' === module17.Platform.OS || 'windows' === module17.Platform.OS || 'web' === module17.Platform.OS ? module607.default.getMaxMemorySync() : -1;
  return K;
}

function Vt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getTotalDiskCapacity());

          case 2:
            return t.abrupt('return', -1);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function _t() {
  return 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'web' === module17.Platform.OS ? module607.default.getTotalDiskCapacitySync() : -1;
}

function qt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getFreeDiskStorage());

          case 2:
            return t.abrupt('return', -1);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function jt() {
  return 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'web' === module17.Platform.OS ? module607.default.getFreeDiskStorageSync() : -1;
}

function Wt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'windows' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getBatteryLevel());

          case 2:
            return t.abrupt('return', -1);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function zt() {
  return 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'windows' === module17.Platform.OS || 'web' === module17.Platform.OS
    ? module607.default.getBatteryLevelSync()
    : -1;
}

function Gt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('ios' !== module17.Platform.OS && 'android' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getPowerState());

          case 2:
            return t.abrupt('return', {});

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Jt() {
  return 'ios' === module17.Platform.OS || 'android' === module17.Platform.OS || 'web' === module17.Platform.OS ? module607.default.getPowerStateSync() : {};
}

function Kt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.isBatteryCharging());

          case 2:
            return t.abrupt('return', false);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Qt() {
  return ('android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'web' === module17.Platform.OS) && module607.default.isBatteryChargingSync();
}

function Xt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', Promise.resolve(Yt()));

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Yt() {
  var t = module17.Dimensions.get('window'),
    n = t.height;
  return t.width >= n;
}

function Zt() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.isAirplaneMode());

          case 2:
            return t.abrupt('return', Promise.resolve(false));

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function $t() {
  return ('android' === module17.Platform.OS || 'web' === module17.Platform.OS) && module607.default.isAirplaneModeSync();
}

function en() {
  if (!Q) Q = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS ? module607.default.deviceType : 'unknown';
  return Q;
}

function tn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (X) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getSupportedAbis());

          case 4:
            X = t.sent;
            t.next = 8;
            break;

          case 7:
            X = [];

          case 8:
            return t.abrupt('return', X);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function nn() {
  if (!X) X = 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS ? module607.default.getSupportedAbisSync() : [];
  return X;
}

function rn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (Y) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getSupported32BitAbis());

          case 4:
            Y = t.sent;
            t.next = 8;
            break;

          case 7:
            Y = [];

          case 8:
            return t.abrupt('return', Y);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function an() {
  if (!Y) Y = 'android' === module17.Platform.OS ? module607.default.getSupported32BitAbisSync() : [];
  return Y;
}

function un() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (Z) {
              t.next = 8;
              break;
            }

            if ('android' !== module17.Platform.OS) {
              t.next = 7;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module607.default.getSupported64BitAbis());

          case 4:
            Z = t.sent;
            t.next = 8;
            break;

          case 7:
            Z = [];

          case 8:
            return t.abrupt('return', Z);

          case 9:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function on() {
  if (!Z) Z = 'android' === module17.Platform.OS ? module607.default.getSupported64BitAbisSync() : [];
  return Z;
}

function ln(t) {
  return regeneratorRuntime.default.async(
    function (n) {
      for (;;)
        switch ((n.prev = n.next)) {
          case 0:
            if ('android' !== module17.Platform.OS) {
              n.next = 2;
              break;
            }

            return n.abrupt('return', module607.default.hasSystemFeature(t));

          case 2:
            return n.abrupt('return', false);

          case 3:
          case 'end':
            return n.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function sn(t) {
  return 'android' === module17.Platform.OS && module607.default.hasSystemFeatureSync(t);
}

function cn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getSystemAvailableFeatures());

          case 2:
            return t.abrupt('return', []);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function fn() {
  return 'android' === module17.Platform.OS ? module607.default.getSystemAvailableFeaturesSync() : [];
}

function dn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS && 'web' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.isLocationEnabled());

          case 2:
            return t.abrupt('return', false);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Sn() {
  return ('android' === module17.Platform.OS || 'ios' === module17.Platform.OS || 'web' === module17.Platform.OS) && module607.default.isLocationEnabledSync();
}

function mn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.isHeadphonesConnected());

          case 2:
            return t.abrupt('return', false);

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Pn() {
  return ('android' === module17.Platform.OS || 'ios' === module17.Platform.OS) && module607.default.isHeadphonesConnectedSync();
}

function pn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== module17.Platform.OS && 'ios' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getAvailableLocationProviders());

          case 2:
            return t.abrupt('return', {});

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function gn() {
  return 'android' === module17.Platform.OS || 'ios' === module17.Platform.OS ? module607.default.getAvailableLocationProvidersSync() : {};
}

function yn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('ios' !== module17.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module607.default.getDeviceToken());

          case 2:
            return t.abrupt('return', 'unknown');

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

var bn = new module17.NativeEventEmitter(module17.NativeModules.RNDeviceInfo);

function wn() {
  var t = React.useState(null),
    n = module26.default(t, 2),
    u = n[0],
    o = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(Wt());

            case 2:
              t = n.sent;
              o(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = bn.addListener('RNDeviceInfo_batteryLevelDidChange', function (t) {
      o(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return u;
}

function On() {
  var t = React.useState(null),
    n = module26.default(t, 2),
    u = n[0],
    o = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(Wt());

            case 2:
              t = n.sent;
              o(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = bn.addListener('RNDeviceInfo_batteryLevelIsLow', function (t) {
      o(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return u;
}

function xn() {
  var t = React.useState({}),
    n = module26.default(t, 2),
    u = n[0],
    o = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(Gt());

            case 2:
              t = n.sent;
              o(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = bn.addListener('RNDeviceInfo_powerStateDidChange', function (t) {
      o(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return u;
}

function kn() {
  return module605.useOnMount(It, -1);
}

function vn() {
  return module605.useOnMount(Ee, 'unknown');
}

function hn(t) {
  var n = React.useCallback(
    function () {
      return ln(t);
    },
    [t]
  );
  return module605.useOnMount(n, false);
}

function In() {
  return module605.useOnMount(wt, false);
}

var An = {
  getAndroidId: de,
  getAndroidIdSync: Se,
  getApiLevel: Le,
  getApiLevelSync: Me,
  getApplicationName: Ce,
  getAvailableLocationProviders: pn,
  getAvailableLocationProvidersSync: gn,
  getBaseOs: ct,
  getBaseOsSync: ft,
  getBatteryLevel: Wt,
  getBatteryLevelSync: zt,
  getBootloader: Ge,
  getBootloaderSync: Je,
  getBrand: ve,
  getBuildId: Ae,
  getBuildIdSync: Be,
  getBuildNumber: Ne,
  getBundleId: Te,
  getCarrier: Ct,
  getCarrierSync: Nt,
  getCodename: pt,
  getCodenameSync: gt,
  getDevice: Ke,
  getDeviceId: we,
  getDeviceName: Ee,
  getDeviceNameSync: Re,
  getDeviceSync: Qe,
  getDeviceToken: yn,
  getDeviceType: en,
  getDisplay: Xe,
  getDisplaySync: Ye,
  getFingerprint: Ze,
  getFingerprintSync: $e,
  getFirstInstallTime: It,
  getFirstInstallTimeSync: At,
  getFontScale: We,
  getFontScaleSync: ze,
  getFreeDiskStorage: qt,
  getFreeDiskStorageSync: jt,
  getHardware: et,
  getHardwareSync: tt,
  getHost: nt,
  getHostSync: rt,
  getIncremental: yt,
  getIncrementalSync: bt,
  getInstallerPackageName: De,
  getInstallerPackageNameSync: Fe,
  getInstallReferrer: Bt,
  getInstallReferrerSync: Lt,
  getInstanceId: se,
  getInstanceIdSync: ie,
  getIpAddress: me,
  getIpAddressSync: Pe,
  getLastUpdateTime: Mt,
  getLastUpdateTimeSync: Tt,
  getMacAddress: ye,
  getMacAddressSync: be,
  getManufacturer: Oe,
  getManufacturerSync: xe,
  getMaxMemory: Et,
  getMaxMemorySync: Rt,
  getModel: ke,
  getPhoneNumber: Dt,
  getPhoneNumberSync: Ft,
  getPowerState: Gt,
  getPowerStateSync: Jt,
  getPreviewSdkInt: dt,
  getPreviewSdkIntSync: St,
  getProduct: at,
  getProductSync: ut,
  getReadableVersion: He,
  getSecurityPatch: mt,
  getSecurityPatchSync: Pt,
  getSerialNumber: ce,
  getSerialNumberSync: fe,
  getSystemAvailableFeatures: cn,
  getSystemAvailableFeaturesSync: fn,
  getSystemName: he,
  getSystemVersion: Ie,
  getTags: ot,
  getTagsSync: lt,
  getTotalDiskCapacity: Vt,
  getTotalDiskCapacitySync: _t,
  getTotalMemory: Ut,
  getTotalMemorySync: Ht,
  getType: st,
  getTypeSync: it,
  getUniqueId: oe,
  getUsedMemory: Ve,
  getUsedMemorySync: _e,
  getUserAgent: qe,
  getUserAgentSync: je,
  getVersion: Ue,
  hasNotch: ht,
  hasSystemFeature: ln,
  hasSystemFeatureSync: sn,
  isAirplaneMode: Zt,
  isAirplaneModeSync: $t,
  isBatteryCharging: Kt,
  isBatteryChargingSync: Qt,
  isCameraPresent: pe,
  isCameraPresentSync: ge,
  isEmulator: wt,
  isEmulatorSync: Ot,
  isHeadphonesConnected: mn,
  isHeadphonesConnectedSync: Pn,
  isLandscape: Xt,
  isLandscapeSync: Yt,
  isLocationEnabled: dn,
  isLocationEnabledSync: Sn,
  isPinOrFingerprintSet: kt,
  isPinOrFingerprintSetSync: vt,
  isTablet: xt,
  supported32BitAbis: rn,
  supported32BitAbisSync: an,
  supported64BitAbis: un,
  supported64BitAbisSync: on,
  supportedAbis: tn,
  supportedAbisSync: nn,
  syncUniqueId: le,
  useBatteryLevel: wn,
  useBatteryLevelIsLow: On,
  useDeviceName: vn,
  useFirstInstallTime: kn,
  useHasSystemFeature: hn,
  useIsEmulator: In,
  usePowerState: xn,
};
exports.default = An;
