var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function s() {
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

var module289 = require('./289'),
  React = require('react'),
  module60 = require('./60'),
  module88 = require('./88'),
  module18 = require('./18'),
  D = (function (f, ...args) {
    module9(I, f);

    var D = I,
      k = s(),
      C = function () {
        var t,
          n = module13(D);

        if (k) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function I() {
      var n;
      module7(this, I);
      (n = C.call(this, ...args))._picker = null;

      n._onChange = function (t) {
        var o = t.nativeEvent.timestamp;
        if (n.props.onDateChange) n.props.onDateChange(new Date(o));
        if (n.props.onChange) n.props.onChange(t);
      };

      return n;
    }

    module8(I, [
      {
        key: 'componentDidUpdate',
        value: function () {
          if (this.props.date) {
            var t = this.props.date.getTime();
            if (this._picker)
              this._picker.setNativeProps({
                date: t,
              });
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props;
          module18(n.date || n.initialDate, 'A selected date or initial date should be specified.');
          return (
            <module88 style={n.style}>
              <module289
                testID={n.testID}
                ref={function (n) {
                  t._picker = n;
                }}
                style={y.datePickerIOS}
                date={n.date ? n.date.getTime() : n.initialDate ? n.initialDate.getTime() : undefined}
                locale={null != n.locale && '' !== n.locale ? n.locale : undefined}
                maximumDate={n.maximumDate ? n.maximumDate.getTime() : undefined}
                minimumDate={n.minimumDate ? n.minimumDate.getTime() : undefined}
                mode={n.mode}
                minuteInterval={n.minuteInterval}
                timeZoneOffsetInMinutes={n.timeZoneOffsetInMinutes}
                onChange={this._onChange}
                onStartShouldSetResponder={function () {
                  return true;
                }}
                onResponderTerminationRequest={function () {
                  return false;
                }}
              />
            </module88>
          );
        },
      },
    ]);
    return I;
  })(React.Component);

class D {
  constructor() {
    var n;
    module7(this, I);
    (n = C.call(this, ...args))._picker = null;

    n._onChange = function (t) {
      var o = t.nativeEvent.timestamp;
      if (n.props.onDateChange) n.props.onDateChange(new Date(o));
      if (n.props.onChange) n.props.onChange(t);
    };

    return n;
  }

  componentDidUpdate() {
    if (this.props.date) {
      var t = this.props.date.getTime();
      if (this._picker)
        this._picker.setNativeProps({
          date: t,
        });
    }
  }

  render() {
    var t = this,
      n = this.props;
    module18(n.date || n.initialDate, 'A selected date or initial date should be specified.');
    return (
      <module88 style={n.style}>
        <module289
          testID={n.testID}
          ref={function (n) {
            t._picker = n;
          }}
          style={y.datePickerIOS}
          date={n.date ? n.date.getTime() : n.initialDate ? n.initialDate.getTime() : undefined}
          locale={null != n.locale && '' !== n.locale ? n.locale : undefined}
          maximumDate={n.maximumDate ? n.maximumDate.getTime() : undefined}
          minimumDate={n.minimumDate ? n.minimumDate.getTime() : undefined}
          mode={n.mode}
          minuteInterval={n.minuteInterval}
          timeZoneOffsetInMinutes={n.timeZoneOffsetInMinutes}
          onChange={this._onChange}
          onStartShouldSetResponder={function () {
            return true;
          }}
          onResponderTerminationRequest={function () {
            return false;
          }}
        />
      </module88>
    );
  }
}

D.DefaultProps = {
  mode: 'datetime',
};
var y = module60.create({
  datePickerIOS: {
    height: 216,
  },
});
module.exports = D;
