require('react');

require('./88');

require('./67');

var module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module6 = require('./6'),
  module204 = require('./204'),
  module58 = require('./58'),
  module206 = require('./206'),
  module90 = require('./90'),
  module60 = require('./60'),
  module207 = require('./207'),
  module75 = require('./75'),
  module209 = require('./209'),
  h = function (E) {
    var t = E.touches,
      R = E.changedTouches,
      _ = t && t.length > 0,
      s = R && R.length > 0;

    return !_ && s ? R[0] : _ ? t[0] : E;
  },
  T = module209({
    NOT_RESPONDER: null,
    RESPONDER_INACTIVE_PRESS_IN: null,
    RESPONDER_INACTIVE_PRESS_OUT: null,
    RESPONDER_ACTIVE_PRESS_IN: null,
    RESPONDER_ACTIVE_PRESS_OUT: null,
    RESPONDER_ACTIVE_LONG_PRESS_IN: null,
    RESPONDER_ACTIVE_LONG_PRESS_OUT: null,
    ERROR: null,
  }),
  u = {
    NOT_RESPONDER: false,
    RESPONDER_INACTIVE_PRESS_IN: false,
    RESPONDER_INACTIVE_PRESS_OUT: false,
    RESPONDER_ACTIVE_PRESS_IN: false,
    RESPONDER_ACTIVE_PRESS_OUT: false,
    RESPONDER_ACTIVE_LONG_PRESS_IN: false,
    RESPONDER_ACTIVE_LONG_PRESS_OUT: false,
    ERROR: false,
  },
  P = module6({}, u, {
    RESPONDER_ACTIVE_PRESS_OUT: true,
    RESPONDER_ACTIVE_PRESS_IN: true,
  }),
  O = module6({}, u, {
    RESPONDER_INACTIVE_PRESS_IN: true,
    RESPONDER_ACTIVE_PRESS_IN: true,
    RESPONDER_ACTIVE_LONG_PRESS_IN: true,
  }),
  D = module6({}, u, {
    RESPONDER_ACTIVE_LONG_PRESS_IN: true,
  }),
  c = module209({
    DELAY: null,
    RESPONDER_GRANT: null,
    RESPONDER_RELEASE: null,
    RESPONDER_TERMINATED: null,
    ENTER_PRESS_RECT: null,
    LEAVE_PRESS_RECT: null,
    LONG_PRESS_DETECTED: null,
  }),
  A = {
    NOT_RESPONDER: {
      DELAY: T.ERROR,
      RESPONDER_GRANT: T.RESPONDER_INACTIVE_PRESS_IN,
      RESPONDER_RELEASE: T.ERROR,
      RESPONDER_TERMINATED: T.ERROR,
      ENTER_PRESS_RECT: T.ERROR,
      LEAVE_PRESS_RECT: T.ERROR,
      LONG_PRESS_DETECTED: T.ERROR,
    },
    RESPONDER_INACTIVE_PRESS_IN: {
      DELAY: T.RESPONDER_ACTIVE_PRESS_IN,
      RESPONDER_GRANT: T.ERROR,
      RESPONDER_RELEASE: T.NOT_RESPONDER,
      RESPONDER_TERMINATED: T.NOT_RESPONDER,
      ENTER_PRESS_RECT: T.RESPONDER_INACTIVE_PRESS_IN,
      LEAVE_PRESS_RECT: T.RESPONDER_INACTIVE_PRESS_OUT,
      LONG_PRESS_DETECTED: T.ERROR,
    },
    RESPONDER_INACTIVE_PRESS_OUT: {
      DELAY: T.RESPONDER_ACTIVE_PRESS_OUT,
      RESPONDER_GRANT: T.ERROR,
      RESPONDER_RELEASE: T.NOT_RESPONDER,
      RESPONDER_TERMINATED: T.NOT_RESPONDER,
      ENTER_PRESS_RECT: T.RESPONDER_INACTIVE_PRESS_IN,
      LEAVE_PRESS_RECT: T.RESPONDER_INACTIVE_PRESS_OUT,
      LONG_PRESS_DETECTED: T.ERROR,
    },
    RESPONDER_ACTIVE_PRESS_IN: {
      DELAY: T.ERROR,
      RESPONDER_GRANT: T.ERROR,
      RESPONDER_RELEASE: T.NOT_RESPONDER,
      RESPONDER_TERMINATED: T.NOT_RESPONDER,
      ENTER_PRESS_RECT: T.RESPONDER_ACTIVE_PRESS_IN,
      LEAVE_PRESS_RECT: T.RESPONDER_ACTIVE_PRESS_OUT,
      LONG_PRESS_DETECTED: T.RESPONDER_ACTIVE_LONG_PRESS_IN,
    },
    RESPONDER_ACTIVE_PRESS_OUT: {
      DELAY: T.ERROR,
      RESPONDER_GRANT: T.ERROR,
      RESPONDER_RELEASE: T.NOT_RESPONDER,
      RESPONDER_TERMINATED: T.NOT_RESPONDER,
      ENTER_PRESS_RECT: T.RESPONDER_ACTIVE_PRESS_IN,
      LEAVE_PRESS_RECT: T.RESPONDER_ACTIVE_PRESS_OUT,
      LONG_PRESS_DETECTED: T.ERROR,
    },
    RESPONDER_ACTIVE_LONG_PRESS_IN: {
      DELAY: T.ERROR,
      RESPONDER_GRANT: T.ERROR,
      RESPONDER_RELEASE: T.NOT_RESPONDER,
      RESPONDER_TERMINATED: T.NOT_RESPONDER,
      ENTER_PRESS_RECT: T.RESPONDER_ACTIVE_LONG_PRESS_IN,
      LEAVE_PRESS_RECT: T.RESPONDER_ACTIVE_LONG_PRESS_OUT,
      LONG_PRESS_DETECTED: T.RESPONDER_ACTIVE_LONG_PRESS_IN,
    },
    RESPONDER_ACTIVE_LONG_PRESS_OUT: {
      DELAY: T.ERROR,
      RESPONDER_GRANT: T.ERROR,
      RESPONDER_RELEASE: T.NOT_RESPONDER,
      RESPONDER_TERMINATED: T.NOT_RESPONDER,
      ENTER_PRESS_RECT: T.RESPONDER_ACTIVE_LONG_PRESS_IN,
      LEAVE_PRESS_RECT: T.RESPONDER_ACTIVE_LONG_PRESS_OUT,
      LONG_PRESS_DETECTED: T.ERROR,
    },
    error: {
      DELAY: T.NOT_RESPONDER,
      RESPONDER_GRANT: T.RESPONDER_INACTIVE_PRESS_IN,
      RESPONDER_RELEASE: T.NOT_RESPONDER,
      RESPONDER_TERMINATED: T.NOT_RESPONDER,
      ENTER_PRESS_RECT: T.NOT_RESPONDER,
      LEAVE_PRESS_RECT: T.NOT_RESPONDER,
      LONG_PRESS_DETECTED: T.NOT_RESPONDER,
    },
  },
  I = {
    componentDidMount: function () {
      if (module58.isTV) {
        this._tvEventHandler = new module207();

        this._tvEventHandler.enable(this, function (E, t) {
          var R = module90.findNodeHandle(E);
          t.dispatchConfig = {};
          if (R === t.tag)
            'focus' === t.eventType
              ? E.touchableHandleFocus(t)
              : 'blur' === t.eventType
              ? E.touchableHandleBlur(t)
              : 'select' === t.eventType && E.touchableHandlePress && !E.props.disabled && E.touchableHandlePress(t);
        });
      }
    },
    componentWillUnmount: function () {
      if (this._tvEventHandler) {
        this._tvEventHandler.disable();

        delete this._tvEventHandler;
      }

      if (this.touchableDelayTimeout) clearTimeout(this.touchableDelayTimeout);
      if (this.longPressDelayTimeout) clearTimeout(this.longPressDelayTimeout);
      if (this.pressOutDelayTimeout) clearTimeout(this.pressOutDelayTimeout);
    },
    touchableGetInitialState: function () {
      return {
        touchable: {
          touchState: undefined,
          responderID: null,
        },
      };
    },
    touchableHandleResponderTerminationRequest: function () {
      return !this.props.rejectResponderTermination;
    },
    touchableHandleStartShouldSetResponder: function () {
      return !this.props.disabled;
    },
    touchableLongPressCancelsPress: function () {
      return true;
    },
    touchableHandleResponderGrant: function (E) {
      var t = E.currentTarget;
      E.persist();
      if (this.pressOutDelayTimeout) clearTimeout(this.pressOutDelayTimeout);
      this.pressOutDelayTimeout = null;
      this.state.touchable.touchState = T.NOT_RESPONDER;
      this.state.touchable.responderID = t;

      this._receiveSignal(c.RESPONDER_GRANT, E);

      var R = undefined !== this.touchableGetHighlightDelayMS ? this.touchableGetHighlightDelayMS() ** 0 : 130;
      if (0 !== (R = isNaN(R) ? 130 : R)) this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, E), R);
      else this._handleDelay(E);

      var _ = undefined !== this.touchableGetLongPressDelayMS ? this.touchableGetLongPressDelayMS() ** 10 : 370;

      _ = isNaN(_) ? 370 : _;
      this.longPressDelayTimeout = setTimeout(this._handleLongDelay.bind(this, E), _ + R);
    },
    touchableHandleResponderRelease: function (E) {
      this.pressInLocation = null;

      this._receiveSignal(c.RESPONDER_RELEASE, E);
    },
    touchableHandleResponderTerminate: function (E) {
      this.pressInLocation = null;

      this._receiveSignal(c.RESPONDER_TERMINATED, E);
    },
    touchableHandleResponderMove: function (E) {
      if (this.state.touchable.positionOnActivate) {
        var t = this.state.touchable.positionOnActivate,
          R = this.state.touchable.dimensionsOnActivate,
          _ = this.touchableGetPressRectOffset
            ? this.touchableGetPressRectOffset()
            : {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
              },
          s = _.left,
          o = _.top,
          S = _.right,
          n = _.bottom,
          l = this.touchableGetHitSlop ? this.touchableGetHitSlop() : null;

        if (l) {
          s += l.left || 0;
          o += l.top || 0;
          S += l.right || 0;
          n += l.bottom || 0;
        }

        var N = h(E.nativeEvent),
          u = N && N.pageX,
          P = N && N.pageY;
        if (this.pressInLocation) this._getDistanceBetweenPoints(u, P, this.pressInLocation.pageX, this.pressInLocation.pageY) > 10 && this._cancelLongPressDelayTimeout();

        if (u > t.left - s && P > t.top - o && u < t.left + R.width + S && P < t.top + R.height + n) {
          var O = this.state.touchable.touchState;

          this._receiveSignal(c.ENTER_PRESS_RECT, E);

          if (this.state.touchable.touchState === T.RESPONDER_INACTIVE_PRESS_IN && O !== T.RESPONDER_INACTIVE_PRESS_IN) this._cancelLongPressDelayTimeout();
        } else {
          this._cancelLongPressDelayTimeout();

          this._receiveSignal(c.LEAVE_PRESS_RECT, E);
        }
      }
    },
    touchableHandleFocus: function (E) {
      if (this.props.onFocus) this.props.onFocus(E);
    },
    touchableHandleBlur: function (E) {
      if (this.props.onBlur) this.props.onBlur(E);
    },
    _remeasureMetricsOnActivation: function () {
      var E = this.state.touchable.responderID;
      if (null != E) module75.measure(E, this._handleQueryLayout);
    },
    _handleQueryLayout: function (E, t, _, o, S, n) {
      if (E || t || _ || o || S || n) {
        if (this.state.touchable.positionOnActivate) module206.release(this.state.touchable.positionOnActivate);
        if (this.state.touchable.dimensionsOnActivate) module204.release(this.state.touchable.dimensionsOnActivate);
        this.state.touchable.positionOnActivate = module206.getPooled(S, n);
        this.state.touchable.dimensionsOnActivate = module204.getPooled(_, o);
      }
    },
    _handleDelay: function (E) {
      this.touchableDelayTimeout = null;

      this._receiveSignal(c.DELAY, E);
    },
    _handleLongDelay: function (E) {
      this.longPressDelayTimeout = null;
      var t = this.state.touchable.touchState;
      if (t !== T.RESPONDER_ACTIVE_PRESS_IN && t !== T.RESPONDER_ACTIVE_LONG_PRESS_IN)
        console.error(
          'Attempted to transition from state `' +
            t +
            '` to `' +
            T.RESPONDER_ACTIVE_LONG_PRESS_IN +
            '`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled.'
        );
      else this._receiveSignal(c.LONG_PRESS_DETECTED, E);
    },
    _receiveSignal: function (E, t) {
      var R = this.state.touchable.responderID,
        _ = this.state.touchable.touchState,
        s = A[_] && A[_][E];

      if (R || E !== c.RESPONDER_RELEASE) {
        if (!s) throw new Error('Unrecognized signal `' + E + '` or state `' + _ + '` for Touchable responder `' + R + '`');
        if (s === T.ERROR) throw new Error('Touchable cannot transition from `' + _ + '` to `' + E + '` for responder `' + R + '`');

        if (_ !== s) {
          this._performSideEffectsForTransition(_, s, E, t);

          this.state.touchable.touchState = s;
        }
      }
    },
    _cancelLongPressDelayTimeout: function () {
      if (this.longPressDelayTimeout) clearTimeout(this.longPressDelayTimeout);
      this.longPressDelayTimeout = null;
    },
    _isHighlight: function (E) {
      return E === T.RESPONDER_ACTIVE_PRESS_IN || E === T.RESPONDER_ACTIVE_LONG_PRESS_IN;
    },
    _savePressInLocation: function (E) {
      var t = h(E.nativeEvent),
        R = t && t.pageX,
        _ = t && t.pageY,
        s = t && t.locationX,
        o = t && t.locationY;

      this.pressInLocation = {
        pageX: R,
        pageY: _,
        locationX: s,
        locationY: o,
      };
    },
    _getDistanceBetweenPoints: function (E, t, R, _) {
      var s = E - R,
        o = t - _;
      return Math.sqrt(s * s + o * o);
    },
    _performSideEffectsForTransition: function (E, t, R, _) {
      var s = this._isHighlight(E),
        o = this._isHighlight(t);

      if (R === c.RESPONDER_TERMINATED || R === c.RESPONDER_RELEASE) this._cancelLongPressDelayTimeout();
      var S = E === T.NOT_RESPONDER && t === T.RESPONDER_INACTIVE_PRESS_IN,
        n = !P[E] && P[t];

      if (
        ((S || n) && this._remeasureMetricsOnActivation(),
        O[E] && R === c.LONG_PRESS_DETECTED && this.touchableHandleLongPress && this.touchableHandleLongPress(_),
        o && !s ? this._startHighlight(_) : !o && s && this._endHighlight(_),
        O[E] && R === c.RESPONDER_RELEASE)
      ) {
        var l = !!this.props.onLongPress,
          N = D[E] && (!l || !this.touchableLongPressCancelsPress());

        if ((!D[E] || N) && this.touchableHandlePress) {
          if (!(o || s)) {
            this._startHighlight(_);

            this._endHighlight(_);
          }

          this.touchableHandlePress(_);
        }
      }

      if (this.touchableDelayTimeout) clearTimeout(this.touchableDelayTimeout);
      this.touchableDelayTimeout = null;
    },
    _playTouchSound: function () {
      module75.playTouchSound();
    },
    _startHighlight: function (E) {
      this._savePressInLocation(E);

      if (this.touchableHandleActivePressIn) this.touchableHandleActivePressIn(E);
    },
    _endHighlight: function (E) {
      var t = this;
      if (this.touchableHandleActivePressOut)
        this.touchableGetPressOutDelayMS && this.touchableGetPressOutDelayMS()
          ? (this.pressOutDelayTimeout = setTimeout(function () {
              t.touchableHandleActivePressOut(E);
            }, this.touchableGetPressOutDelayMS()))
          : this.touchableHandleActivePressOut(E);
    },
    withoutDefaultFocusAndBlur: {},
  },
  b = module56(I, ['touchableHandleFocus', 'touchableHandleBlur']);

I.withoutDefaultFocusAndBlur = b;
var C = {
  Mixin: I,
  TOUCH_TARGET_DEBUG: false,
  renderDebugView: function (E) {
    if (!C.TOUCH_TARGET_DEBUG) return null;
    throw Error('Touchable.TOUCH_TARGET_DEBUG should not be enabled in prod!');
  },
};
module60.create({
  debug: {
    position: 'absolute',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
});
module.exports = C;
