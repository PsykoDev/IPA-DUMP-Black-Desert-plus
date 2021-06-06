var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1034 = require('./1034'),
  module1032 = require('./1032'),
  module1031 = require('./1031');

function v(t) {
  var n = y();
  return function () {
    var u,
      l = module13.default(t);

    if (n) {
      var c = module13.default(this).constructor;
      u = Reflect.construct(l, arguments, c);
    } else u = l.apply(this, arguments);

    return module11.default(this, u);
  };
}

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var p = new ((function (t) {
    module9.default(_, t);
    var f = v(_);

    function _() {
      var t;
      module7.default(this, _);

      (t = f.call(this, {
        type: 'MAIN_CLOCK',
      }))._runFrame = function () {
        t._updateValue(0);

        if (t.__children.length > 0) t._frameCallback = requestAnimationFrame(t._runFrame);
      };

      return t;
    }

    module8.default(_, [
      {
        key: '__onEvaluate',
        value: function () {
          return +new Date();
        },
      },
      {
        key: '__attach',
        value: function () {
          module49.default(module13.default(_.prototype), '__attach', this).call(this);
          if (!this._frameCallback) this._frameCallback = requestAnimationFrame(this._runFrame);
        },
      },
      {
        key: '__detach',
        value: function () {
          if (this._frameCallback) {
            cancelAnimationFrame(this._frameCallback);
            this._frameCallback = null;
          }

          module49.default(module13.default(_.prototype), '__detach', this).call(this);
        },
      },
    ]);
    return _;
  })(module1034.default))(),
  k = (function (t) {
    module9.default(_, t);
    var f = v(_);

    function _() {
      module7.default(this, _);
      return f.call(this, {
        type: 'clock',
      });
    }

    module8.default(_, [
      {
        key: 'toString',
        value: function () {
          return 'AnimatedClock, id: ' + this.__nodeID;
        },
      },
      {
        key: '__onEvaluate',
        value: function () {
          return module1031.val(p);
        },
      },
      {
        key: '__attach',
        value: function () {
          module49.default(module13.default(_.prototype), '__attach', this).call(this);
          if (this._started && !this._attached) p.__addChild(this);
          this._attached = true;
        },
      },
      {
        key: '__detach',
        value: function () {
          if (this._started && this._attached) p.__removeChild(this);
          this._attached = false;
          module49.default(module13.default(_.prototype), '__detach', this).call(this);
        },
      },
      {
        key: 'start',
        value: function () {
          if (!this._started && this._attached) p.__addChild(this);
          this._started = true;
        },
      },
      {
        key: 'stop',
        value: function () {
          if (this._started && this._attached) p.__removeChild(this);
          this._started = false;
        },
      },
      {
        key: 'isStarted',
        value: function () {
          return this._started;
        },
      },
    ]);
    return _;
  })(module1032.default);

exports.default = k;
