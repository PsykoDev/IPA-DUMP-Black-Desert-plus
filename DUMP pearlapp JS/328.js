var module7 = require('./7'),
  s = (function () {
    function s(n, l) {
      module7(this, s);
      this._emitter = n;
      this._eventHolder = l;
      this._currentEventToken = null;
      this._emittingHeldEvents = false;
    }

    module8(s, [
      {
        key: 'addListener',
        value: function (t, n, s) {
          return this._emitter.addListener(t, n, s);
        },
      },
      {
        key: 'once',
        value: function (t, n, s) {
          return this._emitter.once(t, n, s);
        },
      },
      {
        key: 'addRetroactiveListener',
        value: function (t, n, s) {
          var l = this._emitter.addListener(t, n, s);

          this._emittingHeldEvents = true;

          this._eventHolder.emitToListener(t, n, s);

          this._emittingHeldEvents = false;
          return l;
        },
      },
      {
        key: 'removeAllListeners',
        value: function (t) {
          this._emitter.removeAllListeners(t);
        },
      },
      {
        key: 'removeCurrentListener',
        value: function () {
          this._emitter.removeCurrentListener();
        },
      },
      {
        key: 'listeners',
        value: function (t) {
          return this._emitter.listeners(t);
        },
      },
      {
        key: 'emit',
        value: function (t) {
          for (var n, s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) l[o - 1] = arguments[o];

          (n = this._emitter).emit.apply(n, [t].concat(l));
        },
      },
      {
        key: 'emitAndHold',
        value: function (t) {
          for (var n, s, l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) o[u - 1] = arguments[u];

          this._currentEventToken = (n = this._eventHolder).holdEvent.apply(n, [t].concat(o));

          (s = this._emitter).emit.apply(s, [t].concat(o));

          this._currentEventToken = null;
        },
      },
      {
        key: 'releaseCurrentEvent',
        value: function () {
          if (this._currentEventToken) this._eventHolder.releaseEvent(this._currentEventToken);
          else if (this._emittingHeldEvents) this._eventHolder.releaseCurrentEvent();
        },
      },
      {
        key: 'releaseHeldEventType',
        value: function (t) {
          this._eventHolder.releaseEventType(t);
        },
      },
    ]);
    return s;
  })();

class s {
  constructor(n, l) {
    module7(this, s);
    this._emitter = n;
    this._eventHolder = l;
    this._currentEventToken = null;
    this._emittingHeldEvents = false;
  }

  addListener(t, n, s) {
    return this._emitter.addListener(t, n, s);
  }

  once(t, n, s) {
    return this._emitter.once(t, n, s);
  }

  addRetroactiveListener(t, n, s) {
    var l = this._emitter.addListener(t, n, s);

    this._emittingHeldEvents = true;

    this._eventHolder.emitToListener(t, n, s);

    this._emittingHeldEvents = false;
    return l;
  }

  removeAllListeners(t) {
    this._emitter.removeAllListeners(t);
  }

  removeCurrentListener() {
    this._emitter.removeCurrentListener();
  }

  listeners(t) {
    return this._emitter.listeners(t);
  }

  emit(t) {
    for (var n, s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) l[o - 1] = arguments[o];

    (n = this._emitter).emit.apply(n, [t].concat(l));
  }

  emitAndHold(t) {
    for (var n, s, l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) o[u - 1] = arguments[u];

    this._currentEventToken = (n = this._eventHolder).holdEvent.apply(n, [t].concat(o));

    (s = this._emitter).emit.apply(s, [t].concat(o));

    this._currentEventToken = null;
  }

  releaseCurrentEvent() {
    if (this._currentEventToken) this._eventHolder.releaseEvent(this._currentEventToken);
    else if (this._emittingHeldEvents) this._eventHolder.releaseCurrentEvent();
  }

  releaseHeldEventType(t) {
    this._eventHolder.releaseEventType(t);
  }
}

module.exports = s;
