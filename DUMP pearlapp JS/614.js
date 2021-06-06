require('./639');

var s,
  module6 = require('./6'),
  module419 = require('./419'),
  module615 = require('./615'),
  module627 = require('./627'),
  module631 = require('./631'),
  module640 = require('./640'),
  module720 = require('./720'),
  module736 = require('./736'),
  module738 = require('./738'),
  module739 = require('./739'),
  module498 = require('./498'),
  module737 = require('./737'),
  b = {
    2: function (t) {
      return module6.default({}, module737.default);
    },
  },
  R = {
    key: 'account',
    version: 2,
    storage: module627.default,
    blacklist: ['accessToken', 'refreshToken'],
    migrate: module615.createMigrate(b, {
      debug: false,
    }),
  },
  T = {
    2: function (t) {
      return module6.default({}, t, {
        topics: module6.default({}, t.topics, {
          GuildChat: false,
        }),
      });
    },
  },
  z = {
    key: 'service',
    version: 2,
    storage: module627.default,
    migrate: module615.createMigrate(T, {
      debug: false,
    }),
  },
  C = {
    2: function (t) {
      return module6.default({}, t, {
        uiLanguageCode:
          undefined != module498.LocalizeManager.languages[module498.LocalizeManager.getLocalLangTag()]
            ? module498.LocalizeManager.getLangCodeByTag(module498.LocalizeManager.getLocalLangTag())
            : 'en-US',
      });
    },
  },
  _ = {
    key: 'system',
    version: 2,
    storage: module627.default,
    blacklist: ['uiLanguage', 'isNetworkConnected'],
    migrate: module615.createMigrate(C, {
      debug: false,
    }),
  },
  h = {
    key: 'progress',
    version: 0,
    storage: module627.default,
    whitelist: [''],
  },
  w = module419.combineReducers({
    system: module615.persistReducer(_, module720.default),
    service: module615.persistReducer(z, module738.default),
    account: module615.persistReducer(R, module736.default),
    progress: module615.persistReducer(h, module739.default),
  }),
  S = module631.default();

s = module419.applyMiddleware(S);
var j = module419.createStore(w, s);
exports.store = j;
S.run(module640.default);
var B = module615.persistStore(j);
exports.persistor = B;
