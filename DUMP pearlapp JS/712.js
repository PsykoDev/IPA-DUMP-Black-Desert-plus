var t,
  n,
  o,
  c,
  u,
  s,
  C,
  h,
  f,
  l,
  T,
  A,
  p,
  _,
  O,
  module609 = require('./609'),
  module498 = require('./498'),
  module613 = require('./613');

exports.PaAPI = t;
n = t || (exports.PaAPI = t = {});
o = 'PearlAbyss';
c = n.auth = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/AUTH').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t) {
    return module609
      .timeoutFetch(c.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
        body: JSON.stringify(t),
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {
    WRONG_REQUEST_PARAMETER: -10002,
    WRONG_REQUEST_PARAMETER_2: -10003,
    BLOCKED_ACCOUNT: -10004,
    BLOCKED_ACCOUNT_2: -10006,
    BLOCKED_ACCOUNT_3: -20001,
    NOT_MATCH_ACCOUNT: -10005,
    NOT_MATCH_ACCOUNT_2: -10009,
    NOT_MATCH_ACCOUNT_3: -10014,
    NOT_MATCH_ACCOUNT_4: -10011,
    NOT_MATCH_ACCOUNT_5: -10010,
    NOT_FOUND_CHARACTER_INFO: -20010,
    WITHDRAWN_ACCOUNT: -10012,
    WITHDRAWN_ACCOUNT_2: -10020,
    WRONG_FIVE_MORE_TRY: -10008,
    WRONG_FIVE_MORE_TRY_2: -10013,
    NEED_EMAIL_AUTH: -20004,
  },
};
u = n.login = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/LOGIN').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t) {
    return module609
      .timeoutFetch(u.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
        body: JSON.stringify(t),
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {
    DUPLICATE_TOKEN: -10016,
  },
};
s = n.logout = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/LOGOUT').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t) {
    return module609
      .timeoutFetch(s.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {},
};
C = n.checkAccessToken = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/CHECK_ACCESS_TOKEN').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t) {
    return module609
      .timeoutFetch(C.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {},
};
h = n.refreshAccessToken = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/REFRESH_ACCESS_TOKEN').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t, n) {
    return module609
      .timeoutFetch(h.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          RefreshToken: n,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {},
};
f = n.getLinkingInfo = {
  url: function () {
    return module498.RemoteConfigManager.getConfig('config/API/GET_LINKING_INFO');
  },
  fetch: function (t, n) {
    return module609
      .timeoutFetch(f.url(), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          TargetService: module498.ServiceManager.getTargetService(n),
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {},
};
l = n.refreshInstanceId = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/CHECK_INSTANCE_ID').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t, n) {
    return module609
      .timeoutFetch(l.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
        body: JSON.stringify(n),
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {},
};
T = n.setNotification = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/SET_NOTIFICATION').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t, n, c) {
    return module609
      .timeoutFetch(T.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          TargetService: module498.ServiceManager.getTargetService(n),
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
        body: JSON.stringify(c),
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {},
};
A = n.allowMarketingNotification = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/ALLOW_MARKETING').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t, n, c) {
    return module609
      .timeoutFetch(A.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          TargetService: module498.ServiceManager.getTargetService(n),
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
        body: JSON.stringify({
          allowMarketing: c,
        }),
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {},
};
p = n.setAccountLanguage = {
  url: function (t, n) {
    var o = module498.RemoteConfigManager.getConfig('config/API/SET_LANGUAGE')
      .replace(/\${region}/gi, t)
      .replace(/\${language}/gi, n);
    return o;
  },
  fetch: function (t, n, c, u) {
    return module609
      .timeoutFetch(p.url(t, n), {
        method: 'GET',
        headers: {
          PAChecker: o,
          AccessToken: c,
          TargetService: module498.ServiceManager.getTargetService(u),
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return {
          error: t,
        };
      });
  },
  resultCode: {},
};
_ = n.setKeywordList = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/SET_KEYWORD_LIST').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t, n) {
    return module609
      .timeoutFetch(_.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
        body: JSON.stringify(n),
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return t;
      });
  },
  resultCode: {},
};
O = n.getKeywordList = {
  url: function (t) {
    var n = module498.RemoteConfigManager.getConfig('config/API/GET_KEYWORD_LIST').replace(/\${region}/gi, t);
    return n;
  },
  fetch: function (t) {
    return module609
      .timeoutFetch(O.url(module613.store.getState().system.region), {
        method: 'POST',
        headers: {
          PAChecker: o,
          AccessToken: t,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
      .then(function (t) {
        return {
          response: t,
        };
      })
      .catch(function (t) {
        return t;
      });
  },
  resultCode: {},
};
