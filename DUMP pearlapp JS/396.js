var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module384 = require('./384'),
  module388 = require('./388'),
  module397 = require('./397');

function b() {
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

var y = module384.default(
  'TapGestureHandler',
  module6.default({}, module388.default, {
    maxDurationMs: PropTypes.default.number,
    maxDelayMs: PropTypes.default.number,
    numberOfTaps: PropTypes.default.number,
    maxDeltaX: PropTypes.default.number,
    maxDeltaY: PropTypes.default.number,
    maxDist: PropTypes.default.number,
    minPointers: PropTypes.default.number,
  }),
  {}
);
exports.TapGestureHandler = y;
var D = module384.default(
  'FlingGestureHandler',
  module6.default({}, module388.default, {
    numberOfPointers: PropTypes.default.number,
    direction: PropTypes.default.number,
  }),
  {}
);
exports.FlingGestureHandler = D;

var h = (function (t) {
    module9.default(v, t);

    var module6 = v,
      PropTypes = b(),
      O = function () {
        var t,
          f = module13.default(module6);

        if (PropTypes) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(f, arguments, l);
        } else t = f.apply(this, arguments);

        return module11.default(this, t);
      };

    function v() {
      module7.default(this, v);
      return O.apply(this, arguments);
    }

    module8.default(v, [
      {
        key: 'componentDidMount',
        value: function () {
          console.warn(
            'ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase'
          );
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children;
        },
      },
    ]);
    return v;
  })(React.default.Component),
  p =
    module397.default && module397.default.forceTouchAvailable
      ? module384.default(
          'ForceTouchGestureHandler',
          module6.default({}, module388.default, {
            minForce: PropTypes.default.number,
            maxForce: PropTypes.default.number,
            feedbackOnActivation: PropTypes.default.bool,
          }),
          {}
        )
      : h;

exports.ForceTouchGestureHandler = p;
p.forceTouchAvailable = (module397.default && module397.default.forceTouchAvailable) || false;
var G = module384.default(
  'LongPressGestureHandler',
  module6.default({}, module388.default, {
    minDurationMs: PropTypes.default.number,
    maxDist: PropTypes.default.number,
  }),
  {}
);

function H(t) {
  var f = module6.default({}, t);

  if (undefined !== t.minDeltaX) {
    delete f.minDeltaX;
    f.activeOffsetXStart = -t.minDeltaX;
    f.activeOffsetXEnd = t.minDeltaX;
  }

  if (undefined !== t.maxDeltaX) {
    delete f.maxDeltaX;
    f.failOffsetXStart = -t.maxDeltaX;
    f.failOffsetXEnd = t.maxDeltaX;
  }

  if (undefined !== t.minOffsetX) {
    delete f.minOffsetX;
    if (t.minOffsetX < 0) f.activeOffsetXStart = t.minOffsetX;
    else f.activeOffsetXEnd = t.minOffsetX;
  }

  if (undefined !== t.minDeltaY) {
    delete f.minDeltaY;
    f.activeOffsetYStart = -t.minDeltaY;
    f.activeOffsetYEnd = t.minDeltaY;
  }

  if (undefined !== t.maxDeltaY) {
    delete f.maxDeltaY;
    f.failOffsetYStart = -t.maxDeltaY;
    f.failOffsetYEnd = t.maxDeltaY;
  }

  if (undefined !== t.minOffsetY) {
    delete f.minOffsetY;
    if (t.minOffsetY < 0) f.activeOffsetYStart = t.minOffsetY;
    else f.activeOffsetYEnd = t.minOffsetY;
  }

  if (undefined !== t.activeOffsetX) {
    delete f.activeOffsetX;

    if (Array.isArray(t.activeOffsetX)) {
      f.activeOffsetXStart = t.activeOffsetX[0];
      f.activeOffsetXEnd = t.activeOffsetX[1];
    } else if (t.activeOffsetX < 0) f.activeOffsetXStart = t.activeOffsetX;
    else f.activeOffsetXEnd = t.activeOffsetX;
  }

  if (undefined !== t.activeOffsetY) {
    delete f.activeOffsetY;

    if (Array.isArray(t.activeOffsetY)) {
      f.activeOffsetYStart = t.activeOffsetY[0];
      f.activeOffsetYEnd = t.activeOffsetY[1];
    } else if (t.activeOffsetY < 0) f.activeOffsetYStart = t.activeOffsetY;
    else f.activeOffsetYEnd = t.activeOffsetY;
  }

  if (undefined !== t.failOffsetX) {
    delete f.failOffsetX;

    if (Array.isArray(t.failOffsetX)) {
      f.failOffsetXStart = t.failOffsetX[0];
      f.failOffsetXEnd = t.failOffsetX[1];
    } else if (t.failOffsetX < 0) f.failOffsetXStart = t.failOffsetX;
    else f.failOffsetXEnd = t.failOffsetX;
  }

  if (undefined !== t.failOffsetY) {
    delete f.failOffsetY;

    if (Array.isArray(t.failOffsetY)) {
      f.failOffsetYStart = t.failOffsetY[0];
      f.failOffsetYEnd = t.failOffsetY[1];
    } else if (t.failOffsetY < 0) f.failOffsetYStart = t.failOffsetY;
    else f.failOffsetYEnd = t.failOffsetY;
  }

  return f;
}

exports.LongPressGestureHandler = G;
var S = module384.default(
  'PanGestureHandler',
  module6.default({}, module388.default, {
    activeOffsetY: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.arrayOf(PropTypes.default.number)]),
    activeOffsetX: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.arrayOf(PropTypes.default.number)]),
    failOffsetY: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.arrayOf(PropTypes.default.number)]),
    failOffsetX: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.arrayOf(PropTypes.default.number)]),
    minDist: PropTypes.default.number,
    minVelocity: PropTypes.default.number,
    minVelocityX: PropTypes.default.number,
    minVelocityY: PropTypes.default.number,
    minPointers: PropTypes.default.number,
    maxPointers: PropTypes.default.number,
    avgTouches: PropTypes.default.bool,
  }),
  {},
  function (t) {
    return H(t);
  },
  {
    activeOffsetYStart: true,
    activeOffsetYEnd: true,
    activeOffsetXStart: true,
    activeOffsetXEnd: true,
    failOffsetYStart: true,
    failOffsetYEnd: true,
    failOffsetXStart: true,
    failOffsetXEnd: true,
  }
);
exports.PanGestureHandler = S;
var E = module384.default('PinchGestureHandler', module388.default, {});
exports.PinchGestureHandler = E;
var T = module384.default('RotationGestureHandler', module388.default, {});
exports.RotationGestureHandler = T;
