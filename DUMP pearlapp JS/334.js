var n,
  module6 = require('./6'),
  module335 = require('./335'),
  module336 = require('./336'),
  module32 = require('./32'),
  module337 = require('./337'),
  module90 = require('./90'),
  module341 = require('./341'),
  module154 = require('./154'),
  module18 = require('./18'),
  module342 = require('./342'),
  module153 = require('./153'),
  b = {},
  v = 1,
  T = {},
  A = new Map(),
  R = new Map(),
  w = function (n) {
    return n();
  },
  H = false,
  S = {
    setWrapperComponentProvider: function (t) {
      n = t;
    },
    enableFabricIndicator: function (n) {
      H = n;
    },
    registerConfig: function (n) {
      n.forEach(function (n) {
        if (n.run) S.registerRunnable(n.appKey, n.run);
        else {
          module18(null != n.component, 'AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.', n.appKey);
          S.registerComponent(n.appKey, n.component, n.section);
        }
      });
    },
    registerComponent: function (t, o, s) {
      var u = module153();
      b[t] = {
        componentProvider: o,
        run: function (t) {
          module342(w(o, u), t.initialProps, t.rootTag, n && n(t), t.fabric, H, u);
        },
      };
      if (s) T[t] = b[t];
      return t;
    },
    registerRunnable: function (n, t) {
      b[n] = {
        run: t,
      };
      return n;
    },
    registerSection: function (n, t) {
      S.registerComponent(n, t, true);
    },
    getAppKeys: function () {
      return Object.keys(b);
    },
    getSectionKeys: function () {
      return Object.keys(T);
    },
    getSections: function () {
      return module6.default({}, T);
    },
    getRunnable: function (n) {
      return b[n];
    },
    getRegistry: function () {
      return {
        sections: S.getSectionKeys(),
        runnables: module6.default({}, b),
      };
    },
    setComponentProviderInstrumentationHook: function (n) {
      w = n;
    },
    runApplication: function (n, t) {
      var o = 'Running "' + n + '" with ' + JSON.stringify(t);
      module154(o);
      module337.addSource('AppRegistry.runApplication' + v++, function () {
        return o;
      });
      module18(
        b[n] && b[n].run,
        '"' +
          n +
          '" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn\'t called.'
      );
      module341.setActiveScene({
        name: n,
      });
      b[n].run(t);
    },
    unmountApplicationComponentAtRootTag: function (n) {
      module90.unmountComponentAtNodeAndRemoveContainer(n);
    },
    registerHeadlessTask: function (n, t) {
      this.registerCancellableHeadlessTask(n, t, function () {
        return function () {};
      });
    },
    registerCancellableHeadlessTask: function (n, t, o) {
      if (A.has(n)) console.warn("registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '" + n + "'");
      A.set(n, t);
      R.set(n, o);
    },
    startHeadlessTask: function (n, t, o) {
      var c = A.get(t);

      if (!c) {
        console.warn('No task registered for key ' + t);
        return void (module335.default && module335.default.notifyTaskFinished(n));
      }

      c()(o)
        .then(function () {
          if (module335.default) module335.default.notifyTaskFinished(n);
        })
        .catch(function (t) {
          console.error(t);
          if (module335.default && t instanceof module336.default)
            module335.default.notifyTaskRetry(n).then(function (t) {
              if (!t) module335.default.notifyTaskFinished(n);
            });
        });
    },
    cancelHeadlessTask: function (n, t) {
      var o = R.get(t);
      if (!o) throw new Error("No task canceller registered for key '" + t + "'");
      o()();
    },
  };

module32.registerCallableModule('AppRegistry', S);
module.exports = S;
