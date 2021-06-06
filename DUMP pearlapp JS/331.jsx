var module6 = require('./6'),
  module66 = require('./66'),
  module324 = require('./324'),
  module278 = require('./278'),
  module58 = require('./58'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module192 = require('./192'),
  module60 = require('./60'),
  module203 = require('./203'),
  module279 = require('./279'),
  module88 = require('./88'),
  module280 = require('./280'),
  module284 = require('./284'),
  x = {
    activeOpacity: 0.85,
    delayPressOut: 100,
    underlayColor: 'black',
  },
  T = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  _ = module280({
    displayName: 'TouchableHighlight',
    propTypes: module6({}, module279.propTypes, {
      activeOpacity: PropTypes.number,
      underlayColor: module66,
      style: module324.style,
      onShowUnderlay: PropTypes.func,
      onHideUnderlay: PropTypes.func,
      hasTVPreferredFocus: PropTypes.bool,
      nextFocusDown: PropTypes.number,
      nextFocusForward: PropTypes.number,
      nextFocusLeft: PropTypes.number,
      nextFocusRight: PropTypes.number,
      nextFocusUp: PropTypes.number,
      tvParallaxProperties: PropTypes.object,
      testOnly_pressed: PropTypes.bool,
    }),
    mixins: [module278, module203.Mixin.withoutDefaultFocusAndBlur],
    getDefaultProps: function () {
      return x;
    },
    getInitialState: function () {
      this._isMounted = false;
      return this.props.testOnly_pressed
        ? module6({}, this.touchableGetInitialState(), {
            extraChildStyle: {
              opacity: this.props.activeOpacity,
            },
            extraUnderlayStyle: {
              backgroundColor: this.props.underlayColor,
            },
          })
        : module6({}, this.touchableGetInitialState(), {
            extraChildStyle: null,
            extraUnderlayStyle: null,
          });
    },
    componentDidMount: function () {
      this._isMounted = true;
      module284(this.props);
    },
    componentWillUnmount: function () {
      this._isMounted = false;
      clearTimeout(this._hideTimeout);
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      module284(t);
    },
    viewConfig: {
      uiViewClassName: 'RCTView',
      validAttributes: module192.RCTView,
    },
    touchableHandleActivePressIn: function (t) {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = null;

      this._showUnderlay();

      if (this.props.onPressIn) this.props.onPressIn(t);
    },
    touchableHandleActivePressOut: function (t) {
      if (!this._hideTimeout) this._hideUnderlay();
      if (this.props.onPressOut) this.props.onPressOut(t);
    },
    touchableHandleFocus: function (t) {
      if (module58.isTV) this._showUnderlay();
      if (this.props.onFocus) this.props.onFocus(t);
    },
    touchableHandleBlur: function (t) {
      if (module58.isTV) this._hideUnderlay();
      if (this.props.onBlur) this.props.onBlur(t);
    },
    touchableHandlePress: function (t) {
      clearTimeout(this._hideTimeout);

      if (!module58.isTV) {
        this._showUnderlay();

        this._hideTimeout = setTimeout(this._hideUnderlay, this.props.delayPressOut);
      }

      if (this.props.onPress) this.props.onPress(t);
    },
    touchableHandleLongPress: function (t) {
      if (this.props.onLongPress) this.props.onLongPress(t);
    },
    touchableGetPressRectOffset: function () {
      return this.props.pressRetentionOffset || T;
    },
    touchableGetHitSlop: function () {
      return this.props.hitSlop;
    },
    touchableGetHighlightDelayMS: function () {
      return this.props.delayPressIn;
    },
    touchableGetLongPressDelayMS: function () {
      return this.props.delayLongPress;
    },
    touchableGetPressOutDelayMS: function () {
      return this.props.delayPressOut;
    },
    _showUnderlay: function () {
      if (this._isMounted && this._hasPressHandler()) {
        this.setState({
          extraChildStyle: {
            opacity: this.props.activeOpacity,
          },
          extraUnderlayStyle: {
            backgroundColor: this.props.underlayColor,
          },
        });
        if (this.props.onShowUnderlay) this.props.onShowUnderlay();
      }
    },
    _hideUnderlay: function () {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = null;
      if (!this.props.testOnly_pressed)
        this._hasPressHandler() &&
          (this.setState({
            extraChildStyle: null,
            extraUnderlayStyle: null,
          }),
          this.props.onHideUnderlay && this.props.onHideUnderlay());
    },
    _hasPressHandler: function () {
      return !!(this.props.onPress || this.props.onPressIn || this.props.onPressOut || this.props.onLongPress);
    },
    render: function () {
      var t = React.Children.only(this.props.children);
      return (
        <module88
          accessible={false !== this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          accessibilityHint={this.props.accessibilityHint}
          accessibilityRole={this.props.accessibilityRole}
          accessibilityStates={this.props.accessibilityStates}
          accessibilityState={this.props.accessibilityState}
          accessibilityActions={this.props.accessibilityActions}
          onAccessibilityAction={this.props.onAccessibilityAction}
          style={module60.compose(this.props.style, this.state.extraUnderlayStyle)}
          onLayout={this.props.onLayout}
          hitSlop={this.props.hitSlop}
          isTVSelectable
          tvParallaxProperties={this.props.tvParallaxProperties}
          hasTVPreferredFocus={this.props.hasTVPreferredFocus}
          nextFocusDown={this.props.nextFocusDown}
          nextFocusForward={this.props.nextFocusForward}
          nextFocusLeft={this.props.nextFocusLeft}
          nextFocusRight={this.props.nextFocusRight}
          nextFocusUp={this.props.nextFocusUp}
          focusable={false !== this.props.focusable && undefined !== this.props.onPress}
          onClick={this.touchableHandlePress}
          onStartShouldSetResponder={this.touchableHandleStartShouldSetResponder}
          onResponderTerminationRequest={this.touchableHandleResponderTerminationRequest}
          onResponderGrant={this.touchableHandleResponderGrant}
          onResponderMove={this.touchableHandleResponderMove}
          onResponderRelease={this.touchableHandleResponderRelease}
          onResponderTerminate={this.touchableHandleResponderTerminate}
          nativeID={this.props.nativeID}
          testID={this.props.testID}
        >
          <t style={module60.compose(t.props.style, this.state.extraChildStyle)} />
          {module203.renderDebugView({
            color: 'green',
            hitSlop: this.props.hitSlop,
          })}
        </module88>
      );
    },
  });

module.exports = _;
