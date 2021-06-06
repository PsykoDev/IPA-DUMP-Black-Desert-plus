var module6 = require('./6'),
  module214 = require('./214'),
  module242 = require('./242'),
  module278 = require('./278'),
  module58 = require('./58'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module203 = require('./203'),
  module279 = require('./279'),
  module280 = require('./280'),
  module284 = require('./284'),
  module87 = require('./87'),
  P = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  v = module280({
    displayName: 'TouchableOpacity',
    mixins: [module203.Mixin.withoutDefaultFocusAndBlur, module278],
    propTypes: module6({}, module279.propTypes, {
      activeOpacity: PropTypes.number,
      hasTVPreferredFocus: PropTypes.bool,
      nextFocusDown: PropTypes.number,
      nextFocusForward: PropTypes.number,
      nextFocusLeft: PropTypes.number,
      nextFocusRight: PropTypes.number,
      nextFocusUp: PropTypes.number,
      tvParallaxProperties: PropTypes.object,
    }),
    getDefaultProps: function () {
      return {
        activeOpacity: 0.2,
      };
    },
    getInitialState: function () {
      return module6({}, this.touchableGetInitialState(), {
        anim: new module214.Value(this._getChildStyleOpacityWithDefault()),
      });
    },
    componentDidMount: function () {
      module284(this.props);
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      module284(t);
    },
    componentDidUpdate: function (t, s) {
      if (this.props.disabled !== t.disabled) this._opacityInactive(250);
    },
    setOpacityTo: function (t, n) {
      module214
        .timing(this.state.anim, {
          toValue: t,
          duration: n,
          easing: module242.inOut(module242.quad),
          useNativeDriver: true,
        })
        .start();
    },
    touchableHandleActivePressIn: function (t) {
      if ('onResponderGrant' === t.dispatchConfig.registrationName) this._opacityActive(0);
      else this._opacityActive(150);
      if (this.props.onPressIn) this.props.onPressIn(t);
    },
    touchableHandleActivePressOut: function (t) {
      this._opacityInactive(250);

      if (this.props.onPressOut) this.props.onPressOut(t);
    },
    touchableHandleFocus: function (t) {
      if (module58.isTV) this._opacityActive(150);
      if (this.props.onFocus) this.props.onFocus(t);
    },
    touchableHandleBlur: function (t) {
      if (module58.isTV) this._opacityInactive(250);
      if (this.props.onBlur) this.props.onBlur(t);
    },
    touchableHandlePress: function (t) {
      if (this.props.onPress) this.props.onPress(t);
    },
    touchableHandleLongPress: function (t) {
      if (this.props.onLongPress) this.props.onLongPress(t);
    },
    touchableGetPressRectOffset: function () {
      return this.props.pressRetentionOffset || P;
    },
    touchableGetHitSlop: function () {
      return this.props.hitSlop;
    },
    touchableGetHighlightDelayMS: function () {
      return this.props.delayPressIn || 0;
    },
    touchableGetLongPressDelayMS: function () {
      return 0 === this.props.delayLongPress ? 0 : this.props.delayLongPress || 500;
    },
    touchableGetPressOutDelayMS: function () {
      return this.props.delayPressOut;
    },
    _opacityActive: function (t) {
      this.setOpacityTo(this.props.activeOpacity, t);
    },
    _opacityInactive: function (t) {
      this.setOpacityTo(this._getChildStyleOpacityWithDefault(), t);
    },
    _getChildStyleOpacityWithDefault: function () {
      var t = module87(this.props.style) || {};
      return null == t.opacity ? 1 : t.opacity;
    },
    render: function () {
      return (
        <module214.View
          accessible={false !== this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          accessibilityHint={this.props.accessibilityHint}
          accessibilityRole={this.props.accessibilityRole}
          accessibilityStates={this.props.accessibilityStates}
          accessibilityState={this.props.accessibilityState}
          accessibilityActions={this.props.accessibilityActions}
          onAccessibilityAction={this.props.onAccessibilityAction}
          style={[
            this.props.style,
            {
              opacity: this.state.anim,
            },
          ]}
          nativeID={this.props.nativeID}
          testID={this.props.testID}
          onLayout={this.props.onLayout}
          isTVSelectable
          nextFocusDown={this.props.nextFocusDown}
          nextFocusForward={this.props.nextFocusForward}
          nextFocusLeft={this.props.nextFocusLeft}
          nextFocusRight={this.props.nextFocusRight}
          nextFocusUp={this.props.nextFocusUp}
          hasTVPreferredFocus={this.props.hasTVPreferredFocus}
          tvParallaxProperties={this.props.tvParallaxProperties}
          hitSlop={this.props.hitSlop}
          focusable={false !== this.props.focusable && undefined !== this.props.onPress}
          onClick={this.touchableHandlePress}
          onStartShouldSetResponder={this.touchableHandleStartShouldSetResponder}
          onResponderTerminationRequest={this.touchableHandleResponderTerminationRequest}
          onResponderGrant={this.touchableHandleResponderGrant}
          onResponderMove={this.touchableHandleResponderMove}
          onResponderRelease={this.touchableHandleResponderRelease}
          onResponderTerminate={this.touchableHandleResponderTerminate}
        >
          {this.props.children}
          {module203.renderDebugView({
            color: 'cyan',
            hitSlop: this.props.hitSlop,
          })}
        </module214.View>
      );
    },
  });

module.exports = v;
