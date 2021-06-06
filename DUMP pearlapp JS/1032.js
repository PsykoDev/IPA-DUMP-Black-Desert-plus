exports.getCallID = function () {
  return v;
};

exports.setCallID = function (t) {
  v = t;
};

var module6 = require('./6'),
  module7 = require('./7'),
  module1033 = require('./1033'),
  module17 = require('./17'),
  s = [],
  h = 1,
  f = null,
  c = 0,
  v = '';

function y(t) {
  if ('web' === module17.Platform.OS || ['undefined', 'string', 'function', 'boolean', 'number'].includes(typeof t)) return t;
  if (Array.isArray(t)) return t.map(y);
  if (t instanceof I) return t.__nodeID;

  if ('object' == typeof t) {
    var n = {};

    for (var _ in t) _ in t && (n[_] = y(t[_]));

    return n;
  }

  return t;
}

function p() {
  for (
    var t = new Set(),
      n = function n(_) {
        if (_) {
          if (!t.has(_))
            if ((t.add(_), 'function' == typeof _.update)) _.update();
            else {
              var o = _.__getChildren();

              if (o) for (var l = 0, u = o.length; l < u; l++) n(o[l]);
            }
        } else console.warn('findAndUpdateNodes was passed a nullish node');
      },
      _ = 0;
    _ < s.length;
    _++
  ) {
    n(s[_]);
  }

  s.length = 0;
  f = null;
  h += 1;
}

var I = (function () {
  function t(n, o) {
    module7.default(this, t);
    this.__lastLoopID = {
      '': -1,
    };
    this.__memoizedValue = {
      '': null,
    };
    this.__children = [];
    this.__nodeID = ++c;
    this.__nodeConfig = y(n);
    this.__initialized = false;
    this.__inputNodes =
      o &&
      o.filter(function (n) {
        return n instanceof t;
      });
  }

  module8.default(t, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedNode, id: ' + this.__nodeID;
      },
    },
    {
      key: '__attach',
      value: function () {
        this.__nativeInitialize();

        var t = this.__inputNodes;
        if (t) for (var n = 0, _ = t.length; n < _; n++) t[n].__addChild(this);
      },
    },
    {
      key: '__detach',
      value: function () {
        var t = this.__inputNodes;
        if (t) for (var n = 0, _ = t.length; n < _; n++) t[n].__removeChild(this);

        this.__nativeTearDown();
      },
    },
    {
      key: '__getValue',
      value: function () {
        if (!(v in this.__lastLoopID) || this.__lastLoopID[v] < h) {
          this.__lastLoopID[v] = h;

          var t = this.__onEvaluate();

          this.__memoizedValue[v] = t;
          return t;
        }

        return this.__memoizedValue[v];
      },
    },
    {
      key: '__forceUpdateCache',
      value: function (t) {
        this.__memoizedValue[v] = t;

        this.__markUpdated();
      },
    },
    {
      key: '__dangerouslyRescheduleEvaluate',
      value: function () {
        this.__lastLoopID[v] = -1;

        this.__markUpdated();
      },
    },
    {
      key: '__markUpdated',
      value: function () {
        s.push(this);
        if (!f) f = setImmediate(p);
      },
    },
    {
      key: '__nativeInitialize',
      value: function () {
        if (!this.__initialized) {
          module1033.default.createNode(this.__nodeID, module6.default({}, this.__nodeConfig));
          this.__initialized = true;
        }
      },
    },
    {
      key: '__nativeTearDown',
      value: function () {
        if (this.__initialized) {
          module1033.default.dropNode(this.__nodeID);
          this.__initialized = false;
        }
      },
    },
    {
      key: 'isNativelyInitialized',
      value: function () {
        return this.__initialized;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        throw new Error('Missing implementation of onEvaluate');
      },
    },
    {
      key: '__getProps',
      value: function () {
        return this.__getValue();
      },
    },
    {
      key: '__getChildren',
      value: function () {
        return this.__children;
      },
    },
    {
      key: '__addChild',
      value: function (t) {
        if (0 === this.__children.length) this.__attach();

        this.__children.push(t);

        t.__nativeInitialize();

        if (module1033.default.connectNodes) module1033.default.connectNodes(this.__nodeID, t.__nodeID);
        else t.__dangerouslyRescheduleEvaluate();
      },
    },
    {
      key: '__removeChild',
      value: function (t) {
        var n = this.__children.indexOf(t);

        if (-1 !== n) {
          if (module1033.default.disconnectNodes) module1033.default.disconnectNodes(this.__nodeID, t.__nodeID);

          this.__children.splice(n, 1);

          if (0 === this.__children.length) this.__detach();
        } else console.warn("Trying to remove a child that doesn't exist");
      },
    },
    {
      key: '_connectAnimatedView',
      value: function (t) {
        if (module1033.default.connectNodeToView) module1033.default.connectNodeToView(this.__nodeID, t);
        else this.__dangerouslyRescheduleEvaluate();
      },
    },
    {
      key: '_disconnectAnimatedView',
      value: function (t) {
        module1033.default.disconnectNodeFromView(this.__nodeID, t);
      },
    },
  ]);
  return t;
})();

exports.default = I;
