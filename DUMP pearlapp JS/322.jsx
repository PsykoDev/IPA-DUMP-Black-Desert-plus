var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6');

function p() {
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

require('./326');

require('./58');

var u,
  h,
  module323 = require('./323'),
  module278 = require('./278'),
  React = require('react'),
  module90 = require('./90'),
  module60 = require('./60'),
  module197 = require('./197'),
  module202 = require('./202'),
  module163 = require('./163'),
  module279 = require('./279'),
  module75 = require('./75'),
  module280 = require('./280'),
  module18 = require('./18'),
  module182 = require('./182');

require('./20');

u = module182('RCTMultilineTextInputView');
h = module182('RCTSinglelineTextInputView');

(function (c) {
  module9(_, c);

  var u = _,
    h = p(),
    f = function () {
      var t,
        n = module13(u);

      if (h) {
        var s = module13(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module11(this, t);
    };

  function _() {
    module7(this, _);
    return f.apply(this, arguments);
  }

  module8(_, [
    {
      key: 'clear',
      value: function () {},
    },
    {
      key: 'isFocused',
      value: function () {},
    },
  ]);
})(module90.NativeComponent);

var D = function () {
    return true;
  },
  E = module280({
    displayName: 'TextInput',
    statics: {
      State: {
        currentlyFocusedField: module163.currentlyFocusedField,
        focusTextInput: module163.focusTextInput,
        blurTextInput: module163.blurTextInput,
      },
    },
    propTypes: module323,
    getDefaultProps: function () {
      return {
        allowFontScaling: true,
        rejectResponderTermination: true,
        underlineColorAndroid: 'transparent',
      };
    },
    mixins: [module278],
    isFocused: function () {
      return module163.currentlyFocusedField() === module90.findNodeHandle(this._inputRef);
    },
    _inputRef: undefined,
    _focusSubscription: undefined,
    _lastNativeText: undefined,
    _lastNativeSelection: undefined,
    _rafId: null,
    componentDidMount: function () {
      this._lastNativeText = this.props.value;
      var t = module90.findNodeHandle(this._inputRef);
      if (null != t) module163.registerInput(t);
      if (this.props.autoFocus) this._rafId = requestAnimationFrame(this.focus);
    },
    componentWillUnmount: function () {
      if (this._focusSubscription) this._focusSubscription.remove();
      if (this.isFocused()) this.blur();
      var t = module90.findNodeHandle(this._inputRef);
      if (null != t) module163.unregisterInput(t);
      if (null != this._rafId) cancelAnimationFrame(this._rafId);
    },
    clear: function () {
      this.setNativeProps({
        text: '',
      });
    },
    render: function () {
      var module7;
      module7 = module75.getViewManagerConfig('RCTVirtualText') ? this._renderIOS() : this._renderIOSLegacy();
      return <module202.Provider value>{module7}</module202.Provider>;
    },
    _getText: function () {
      return 'string' == typeof this.props.value ? this.props.value : 'string' == typeof this.props.defaultValue ? this.props.defaultValue : '';
    },
    _setNativeRef: function (t) {
      this._inputRef = t;
    },
    _renderIOSLegacy: function () {
      var t,
        n = module6({}, this.props);

      if (
        ((n.style = [this.props.style]),
        n.selection &&
          null == n.selection.end &&
          (n.selection = {
            start: n.selection.start,
            end: n.selection.start,
          }),
        n.multiline)
      ) {
        var s = n.children,
          o = 0;
        React.Children.forEach(s, function () {
          return ++o;
        });
        module18(!(n.value && o), 'Cannot specify both value and children.');
        if (o >= 1)
          s = (
            <module197 style={n.style} allowFontScaling={n.allowFontScaling} maxFontSizeMultiplier={n.maxFontSizeMultiplier}>
              {s}
            </module197>
          );
        if (n.inputView) s = [s, n.inputView];
        n.style.unshift(L.multilineInput);
        t = <u />;
      } else t = <h />;

      return (
        <module279
          onLayout={n.onLayout}
          onPress={this._onPress}
          rejectResponderTermination
          accessible={n.accessible}
          accessibilityLabel={n.accessibilityLabel}
          accessibilityRole={n.accessibilityRole}
          accessibilityStates={n.accessibilityStates}
          accessibilityState={n.accessibilityState}
          nativeID={this.props.nativeID}
          testID={n.testID}
        >
          {t}
        </module279>
      );
    },
    _renderIOS: function () {
      var t = module6({}, this.props);
      t.style = [this.props.style];
      if (t.selection && null == t.selection.end)
        t.selection = {
          start: t.selection.start,
          end: t.selection.start,
        };
      var n = t.multiline ? u : h;
      if (t.multiline) t.style.unshift(L.multilineInput);
      var s = <n />;
      return (
        <module279
          onLayout={t.onLayout}
          onPress={this._onPress}
          rejectResponderTermination={t.rejectResponderTermination}
          accessible={t.accessible}
          accessibilityLabel={t.accessibilityLabel}
          accessibilityRole={t.accessibilityRole}
          accessibilityStates={t.accessibilityStates}
          accessibilityState={t.accessibilityState}
          nativeID={this.props.nativeID}
          testID={t.testID}
        >
          {s}
        </module279>
      );
    },
    _renderAndroid: function () {
      var t = module6({}, this.props);
      t.style = [this.props.style];
      t.autoCapitalize = t.autoCapitalize || 'sentences';
      var n = this.props.children,
        s = 0;
      React.Children.forEach(n, function () {
        return ++s;
      });
      module18(!(this.props.value && s), 'Cannot specify both value and children.');
      if (s > 1) n = <module197>{n}</module197>;
      if (t.selection && null == t.selection.end)
        t.selection = {
          start: t.selection.start,
          end: t.selection.start,
        };
      var o = <undefined />;
      return (
        <module279
          onLayout={t.onLayout}
          onPress={this._onPress}
          accessible={this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          accessibilityRole={this.props.accessibilityRole}
          accessibilityStates={this.props.accessibilityStates}
          accessibilityState={this.props.accessibilityState}
          nativeID={this.props.nativeID}
          testID={this.props.testID}
        >
          {o}
        </module279>
      );
    },
    _onFocus: function (t) {
      if (this.props.onFocus) this.props.onFocus(t);
      if (this.props.selectionState) this.props.selectionState.focus();
    },
    _onPress: function (t) {
      if (this.props.editable || undefined === this.props.editable) this.focus();
    },
    _onChange: function (t) {
      if (this._inputRef && this._inputRef.setNativeProps)
        module90.setNativeProps(this._inputRef, {
          mostRecentEventCount: t.nativeEvent.eventCount,
        });
      var n = t.nativeEvent.text;
      if (this.props.onChange) this.props.onChange(t);
      if (this.props.onChangeText) this.props.onChangeText(n);

      if (this._inputRef) {
        this._lastNativeText = n;
        this.forceUpdate();
      }
    },
    _onSelectionChange: function (t) {
      if (this.props.onSelectionChange) this.props.onSelectionChange(t);

      if (this._inputRef) {
        this._lastNativeSelection = t.nativeEvent.selection;
        if (this.props.selection || this.props.selectionState) this.forceUpdate();
      }
    },
    componentDidUpdate: function () {
      var t = {};
      if (this._lastNativeText !== this.props.value && 'string' == typeof this.props.value) t.text = this.props.value;
      var n = this.props.selection;
      if (this._lastNativeSelection && n && (this._lastNativeSelection.start !== n.start || this._lastNativeSelection.end !== n.end)) t.selection = this.props.selection;
      if (Object.keys(t).length > 0 && this._inputRef && this._inputRef.setNativeProps) module90.setNativeProps(this._inputRef, t);
      if (this.props.selectionState && n) this.props.selectionState.update(n.start, n.end);
    },
    _onBlur: function (t) {
      this.blur();
      if (this.props.onBlur) this.props.onBlur(t);
      if (this.props.selectionState) this.props.selectionState.blur();
    },
    _onTextInput: function (t) {
      if (this.props.onTextInput) this.props.onTextInput(t);
    },
    _onScroll: function (t) {
      if (this.props.onScroll) this.props.onScroll(t);
    },
  }),
  P = E,
  L = module60.create({
    multilineInput: {
      paddingTop: 5,
    },
  });

module.exports = P;
