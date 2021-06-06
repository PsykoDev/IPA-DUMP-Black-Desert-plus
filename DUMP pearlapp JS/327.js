var module6 = require('./6'),
  module51 = require('./51'),
  module328 = require('./328'),
  module329 = require('./329'),
  module18 = require('./18'),
  module330 = require('./330')({
    __types: true,
  });

var E = {
  emit: function (t, n, s, _, o, v, E) {
    return this.__getEventEmitter().emit(t, n, s, _, o, v, E);
  },
  emitAndHold: function (t, n, s, _, o, v, E) {
    return this.__getEventEmitter().emitAndHold(t, n, s, _, o, v, E);
  },
  addListener: function (t, n, s) {
    return this.__getEventEmitter().addListener(t, n, s);
  },
  once: function (t, n, s) {
    return this.__getEventEmitter().once(t, n, s);
  },
  addRetroactiveListener: function (t, n, s) {
    return this.__getEventEmitter().addRetroactiveListener(t, n, s);
  },
  addListenerMap: function (t, n) {
    return this.__getEventEmitter().addListenerMap(t, n);
  },
  addRetroactiveListenerMap: function (t, n) {
    return this.__getEventEmitter().addListenerMap(t, n);
  },
  removeAllListeners: function () {
    this.__getEventEmitter().removeAllListeners();
  },
  removeCurrentListener: function () {
    this.__getEventEmitter().removeCurrentListener();
  },
  releaseHeldEventType: function (t) {
    this.__getEventEmitter().releaseHeldEventType(t);
  },
  __getEventEmitter: function () {
    if (!this.__eventEmitter) {
      var t = new module51(),
        o = new module329();
      this.__eventEmitter = new module328(t, o);
    }

    return this.__eventEmitter;
  },
};

module.exports = function (n, s) {
  module18(s, 'Must supply set of valid event types');

  var _ = n.prototype || n;

  module18(!_.__eventEmitter, 'An active emitter is already mixed in');
  var u = n.constructor;
  if (u) module18(u === Object || u === Function, 'Mix EventEmitter into a class, not an instance');
  if (_.hasOwnProperty(module330)) module6(_.__types, s);
  else if (_.__types) _.__types = module6({}, _.__types, s);
  else _.__types = s;
  module6(_, E);
};
