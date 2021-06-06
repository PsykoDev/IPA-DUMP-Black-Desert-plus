var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module755 = require('./755'),
  module1141 = require('./1141');

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

var C = {
    Kzaka: '#A20000',
    Nouver: '#A36800',
    Karanda: '#003A76',
    Kutum: '#37006A',
    Muraka: '#320000',
    Quint: '#6A1900',
    Garmoth: '#DB0000',
    Bell: '#302E2D',
    Opin: '#056200',
  },
  x = (function (t) {
    module9.default(w, t);

    var l = w,
      x = b(),
      k = function () {
        var t,
          n = module13.default(l);

        if (x) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function w(t) {
      module7.default(this, w);
      return k.call(this, t);
    }

    module8.default(w, [
      {
        key: 'render',
        value: function () {
          var t = this,
            l = new module1141.TimeCell(this.props.timeZone, this.props.bossData).generate(this.props.dayOfWeek),
            n = new module1141.BossCell(this.props.bossData),
            o = n.generate(this.props.dayOfWeek);
          return React.default.createElement(
            module17.View,
            {
              style: E.content,
              accessibilityLabel: this.props.accessibilityLabel,
            },
            React.default.createElement(
              module17.View,
              {
                style: {
                  flexDirection: 'row',
                },
              },
              React.default.createElement(
                module17.View,
                {
                  style: [
                    {
                      alignItems: 'center',
                    },
                    E.mostLeftCell,
                    E.dayOfWeekCell,
                  ],
                },
                React.default.createElement(module17.Image, {
                  style: {
                    width: 25,
                    resizeMode: 'contain',
                  },
                  source: module755.ImageMap.icn_boss_time_cell,
                })
              ),
              this.props.dayOfWeek.map(function (l, n) {
                return React.default.createElement(
                  module17.View,
                  {
                    style: [
                      {
                        flex: 1,
                      },
                      E.dayOfWeekCell,
                    ],
                    key: n,
                  },
                  React.default.createElement(
                    module17.Text,
                    {
                      style: [E.text],
                    },
                    t.props.uiLanguage['Text_' + l]
                  )
                );
              })
            ),
            l.map(function (l, u) {
              return React.default.createElement(
                module17.View,
                {
                  style: {
                    flexDirection: 'row',
                  },
                  key: u,
                },
                React.default.createElement(
                  module17.View,
                  {
                    style: [E.mostLeftCell, E.timeCell, E.cellBorder],
                  },
                  React.default.createElement(
                    module17.Text,
                    {
                      style: [E.text],
                    },
                    l.time
                  ),
                  React.default.createElement(
                    module17.Text,
                    {
                      style: [E.text],
                    },
                    l.meridiem
                  )
                ),
                t.props.dayOfWeek.map(function (u, c) {
                  var s = n.generateKey(u, l.time, l.meridiem),
                    p = o[s];
                  return React.default.createElement(
                    module17.View,
                    {
                      style: [
                        {
                          flex: 1,
                        },
                        E.timeCell,
                        E.cellBorder,
                      ],
                      key: c,
                    },
                    undefined !== p &&
                      p.map(function (l, n) {
                        return React.default.createElement(
                          module17.Text,
                          {
                            style: [
                              E.text,
                              {
                                color: C[l],
                              },
                            ],
                            key: n,
                          },
                          t.props.uiLanguage['Text_' + l]
                        );
                      })
                  );
                })
              );
            })
          );
        },
      },
    ]);
    return w;
  })(React.Component),
  E = module17.StyleSheet.create({
    content: {
      flex: 1,
      width: '90%',
      borderRadius: 1,
      borderWidth: 2,
      borderColor: 'rgb(221, 217, 213)',
      backgroundColor: '#FFFFFF',
    },
    mostLeftCell: {
      width: 50,
    },
    dayOfWeekCell: {
      height: 30,
      backgroundColor: 'rgb(208, 201, 196)',
      borderRightWidth: 2,
      borderRightColor: 'rgb(214, 209, 220)',
      justifyContent: 'center',
    },
    timeCell: {
      height: 60,
      justifyContent: 'center',
    },
    bossCell: {
      height: 60,
      justifyContent: 'center',
      flexDirection: 'column',
    },
    text: {
      textAlign: 'center',
    },
    cellBorder: {
      borderEndWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E7E4E2',
    },
  }),
  k = x;

exports.default = k;
