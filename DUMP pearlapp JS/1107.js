var module6 = require('./6'),
  regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module501 = require('./501'),
  module1108 = require('./1108'),
  module498 = require('./498'),
  module613 = require('./613'),
  module799 = require('./799'),
  module648 = require('./648'),
  module1117 = require('./1117');

function C() {
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

var P = (function (t) {
    module9.default(S, t);

    var module406 = S,
      P = C(),
      w = function () {
        var t,
          n = module13.default(module406);

        if (P) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function S() {
      module7.default(this, S);
      return w.apply(this, arguments);
    }

    module8.default(S, [
      {
        key: 'componentDidMount',
        value: function () {
          var t,
            n = arguments,
            s = arguments;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    c.next = 2;
                    return regeneratorRuntime.default.awrap(module501.default.messaging().hasPermission());

                  case 2:
                    if (((this.permission = c.sent), this.permission)) {
                      c.next = 6;
                      break;
                    }

                    c.next = 6;
                    return regeneratorRuntime.default.awrap(module498.SystemManager.requestFirebaseCloudTokenPermission());

                  case 6:
                    if (
                      ((this.networkListener = module1108.default.addEventListener(function (t) {
                        module613.bindAction.system.changeNetworkState(t.isConnected);
                      })),
                      !this.permission)
                    ) {
                      c.next = 15;
                      break;
                    }

                    if (
                      (module498.SystemManager.isIos() &&
                        ((this.messageListener = module501.default.messaging().onMessage(function (t) {
                          module648.Logger.info(n.callee.name, t);
                        })),
                        (this.notificatiOnOpendListener = module501.default.notifications().onNotificationOpened(function (t) {
                          module648.Logger.info(n.callee.name, t);
                          module498.ReceiverNotification(t);
                        }))),
                      !module498.SystemManager.isAndroid())
                    ) {
                      c.next = 15;
                      break;
                    }

                    this.notificationListener = module501.default.notifications().onNotification(function (t) {
                      module648.Logger.info(n.callee.name, t);
                    });
                    c.next = 13;
                    return regeneratorRuntime.default.awrap(module501.default.notifications().getInitialNotification());

                  case 13:
                    if ((t = c.sent)) {
                      module648.Logger.info(s.callee.name, t);
                      module498.ReceiverNotification(t);
                    }

                  case 15:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.networkListener) this.networkListener();
          if (this.permission)
            module498.SystemManager.isAndroid()
              ? this.notificationListener && this.notificationListener()
              : module498.SystemManager.isIos() && (this.messageListener(), this.notificatiOnOpendListener());
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            module17.View,
            {
              style: module1117.default.content,
              accessibilityLabel: 'HomeScreen',
            },
            React.default.createElement(module799.HomeWebView, {
              navigation: this.props.navigation,
            }),
            React.default.createElement(module799.RequestNotificationModal, {
              uiLanguage: this.props.uiLanguage,
              title1: this.props.uiLanguage.Alert_Push_Marketing_Notification_Title1,
              title2: this.props.uiLanguage.Alert_Push_Marketing_Notification_Title2,
              optionTitle: this.props.uiLanguage.Text_Select_Alarm_AD_Guide,
              optionTitle2: this.props.uiLanguage.Text_Select_Alarm_Night_AD_Guide,
              additionalGuide: this.props.uiLanguage.Text_Push_Marketing_Additional_Guide,
              ipCountry: module498.SystemManager.getIpCountry(),
              visible: (this.props.isLoggined && this.props.isNetworkConnected && 0 == this.props.allowMarketing) || this.props.manageTopicProgress,
              onPress: function (o, s) {
                if (o) {
                  var c = true;
                  if ('KR' == module498.SystemManager.getIpCountry()) c = s;
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      TEST: 'LIVE' != module498.RemoteConfigManager.getConfig('appConfig/CONFIG_TYPE'),
                      AlldayNight: c,
                      Notices: true,
                      Updates: true,
                      Events: true,
                      PearlShop: true,
                      GMNotes: true,
                      TradeMarket: true,
                    })
                  );
                } else {
                  var u = 'KR' != module498.SystemManager.getIpCountry();
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      TEST: 'LIVE' != module498.RemoteConfigManager.getConfig('appConfig/CONFIG_TYPE'),
                      AlldayNight: u,
                      Notices: false,
                      Updates: false,
                      Events: false,
                      PearlShop: false,
                      GMNotes: false,
                      TradeMarket: false,
                    })
                  );
                }

                module613.bindAction.account.fetchAllowMarketing(true);
              },
            })
          );
        },
      },
    ]);
    return S;
  })(React.default.Component),
  w = module406.connect(function (t) {
    return {
      accountID: t.account.accountID,
      allowMarketing: t.account.allowMarketing,
      accessToken: t.account.accessToken,
      linkingPlatform: t.account.linkingPlatform,
      isLoggined: t.account.isLoggined,
      platform: t.system.platform,
      region: t.system.region,
      uiLanguage: t.system.uiLanguage,
      isNetworkConnected: t.system.isNetworkConnected,
      topics: t.service.topics,
      manageTopicProgress: t.progress.manageTopicProgress,
    };
  })(P);

exports.default = w;
