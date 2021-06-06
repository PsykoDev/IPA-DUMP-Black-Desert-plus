require('./504');

var module7 = require('./7'),
  module17 = require('./17'),
  module503 = require('./503'),
  module506 = require('./506'),
  module599 = require('./599'),
  module508 = require('./508'),
  module520 = require('./520'),
  module533 = require('./533'),
  module534 = require('./534'),
  module535 = require('./535'),
  module536 = require('./536'),
  module544 = require('./544'),
  module566 = require('./566'),
  module568 = require('./568'),
  module569 = require('./569'),
  module577 = require('./577'),
  module580 = require('./580'),
  module591 = require('./591'),
  module594 = require('./594'),
  module597 = require('./597'),
  k = module17.NativeModules.RNFirebase,
  v = new ((function () {
    function t() {
      if ((module7.default(this, t), !k)) throw new Error(module506.default.STRINGS.ERROR_MISSING_CORE);
      module503.default.initializeNativeApps();
      this.admob = module503.default.moduleAndStatics('admob', module508.statics, module508.MODULE_NAME);
      this.analytics = module503.default.moduleAndStatics('analytics', module533.statics, module533.MODULE_NAME);
      this.auth = module503.default.moduleAndStatics('auth', module520.statics, module520.MODULE_NAME);
      this.config = module503.default.moduleAndStatics('config', module534.statics, module534.MODULE_NAME);
      this.crashlytics = module503.default.moduleAndStatics('crashlytics', module535.statics, module535.MODULE_NAME);
      this.database = module503.default.moduleAndStatics('database', module536.statics, module536.MODULE_NAME);
      this.firestore = module503.default.moduleAndStatics('firestore', module544.statics, module544.MODULE_NAME);
      this.functions = module503.default.moduleAndStatics('functions', module566.statics, module566.MODULE_NAME);
      this.iid = module503.default.moduleAndStatics('iid', module568.statics, module568.MODULE_NAME);
      this.links = module503.default.moduleAndStatics('links', module569.statics, module569.MODULE_NAME);
      this.messaging = module503.default.moduleAndStatics('messaging', module577.statics, module577.MODULE_NAME);
      this.notifications = module503.default.moduleAndStatics('notifications', module580.statics, module580.MODULE_NAME);
      this.perf = module503.default.moduleAndStatics('perf', module591.statics, module591.MODULE_NAME);
      this.storage = module503.default.moduleAndStatics('storage', module594.statics, module594.MODULE_NAME);
      this.utils = module503.default.moduleAndStatics('utils', module597.statics, module597.MODULE_NAME);
    }

    module8.default(t, [
      {
        key: 'initializeApp',
        value: function (t, s) {
          return module503.default.initializeApp(t, s);
        },
      },
      {
        key: 'app',
        value: function (t) {
          return module503.default.app(t);
        },
      },
      {
        key: 'apps',
        get: function () {
          return module503.default.apps();
        },
      },
      {
        key: 'SDK_VERSION',
        get: function () {
          return module599.default;
        },
      },
    ]);
    return t;
  })())(),
  R = v;

exports.default = R;
var I = v.admob,
  w = v.analytics,
  z = v.auth,
  G = v.config,
  j = v.crashlytics,
  C = v.database,
  F = v.firestore,
  K = v.functions,
  P = v.iid,
  T = v.links,
  V = v.messaging,
  q = v.notifications,
  x = v.perf,
  B = v.storage,
  H = v.utils;
exports.utils = H;
exports.storage = B;
exports.perf = x;
exports.notifications = q;
exports.messaging = V;
exports.links = T;
exports.iid = P;
exports.functions = K;
exports.firestore = F;
exports.database = C;
exports.crashlytics = j;
exports.config = G;
exports.auth = z;
exports.analytics = w;
exports.admob = I;
