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
  module799 = require('./799'),
  module613 = require('./613'),
  module755 = require('./755'),
  module609 = require('./609'),
  module498 = require('./498'),
  module651 = require('./651');

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

var M = (function (t) {
    module9.default(E, t);

    var module406 = E,
      module755 = C(),
      M = function () {
        var t,
          n = module13.default(module406);

        if (module755) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function E(t) {
      var n;
      module7.default(this, E);
      (n = M.call(this, t)).state = {
        isClickedMarketingTopic: false,
        isSelectedTopic: false,
        selectedTopicTitle: '',
      };
      return n;
    }

    module8.default(E, [
      {
        key: 'toggleNotification',
        value: function (t) {
          return regeneratorRuntime.default.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    n.next = 2;
                    return regeneratorRuntime.default.awrap(module501.default.messaging().hasPermission());

                  case 2:
                    if (!n.sent) {
                      n.next = 8;
                      break;
                    }

                    if (t) module613.bindAction.service.refreshInstanceId();
                    module613.bindAction.service.toggleNotification(t);
                    n.next = 16;
                    break;

                  case 8:
                    n.prev = 8;
                    n.next = 11;
                    return regeneratorRuntime.default.awrap(module501.default.messaging().requestPermission());

                  case 11:
                    n.next = 16;
                    break;

                  case 13:
                    n.prev = 13;
                    n.t0 = n.catch(8);
                    return n.abrupt(
                      'return',
                      module609.simpleAlert({
                        content: this.props.uiLanguage.Alert_Unrequestable_Permission,
                        confirmText: this.props.uiLanguage.Confirm,
                        confirmOnPress: function () {
                          module17.Linking.openSettings();
                        },
                      })
                    );

                  case 16:
                  case 'end':
                    return n.stop();
                }
            },
            null,
            this,
            [[8, 13]],
            Promise
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            c = this.props,
            s = c.uiLanguage,
            l = c.platform,
            u = c.region,
            p = c.isNetworkConnected,
            S = c.canReceiveNotification,
            _ = c.topics,
            v = c.loginProgress,
            C = c.manageTopicProgress,
            M = c.pushModalProgress,
            E = c.refreshInstanceIdProgress,
            y = c.toggleTopicProgress;
          return React.default.createElement(
            module799.PABackgroundScrollView,
            {
              style: N.content,
            },
            React.default.createElement(
              module17.Text,
              {
                style: N.settingCategoryTitle,
              },
              s.Push_Information_Title
            ),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_Enable_Push,
              onPress: function (n) {
                return regeneratorRuntime.default.async(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          if (!p) {
                            c.next = 5;
                            break;
                          }

                          c.next = 3;
                          return regeneratorRuntime.default.awrap(t.toggleNotification(n));

                        case 3:
                          c.next = 6;
                          break;

                        case 5:
                          module609.simpleAlert({
                            content: s.Alert_Error_Network,
                            confirmText: s.Confirm,
                          });

                        case 6:
                        case 'end':
                          return c.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              },
              value: S,
              accessibilityLabel: 'NotificationSettingScreen_EnablePush',
            }),
            React.default.createElement(module799.PASettingRowMenu, {
              title: s.Platform,
              value: l,
            }),
            React.default.createElement(module799.PASettingRowMenu, {
              title: s.Region,
              value: u,
            }),
            React.default.createElement(module799.BorderLine, {
              marginBottom: 18,
            }),
            React.default.createElement(
              module17.Text,
              {
                style: N.settingCategoryTitle,
              },
              s.Push_Notification_Title
            ),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_TEST,
              onPress: function (o) {
                if (p) {
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      TEST: o,
                    })
                  );
                  t.setState({
                    isClickedMarketingTopic: true,
                    isSelectedTopic: o,
                    selectedTopicTitle: 'TEST',
                  });
                } else
                  module609.simpleAlert({
                    content: s.Error_Connect_Failed,
                    confirmText: s.Confirm,
                  });
              },
              value: _.TEST,
              enabled: S,
              visible: 'LIVE' != module498.RemoteConfigManager.getConfig('appConfig/CONFIG_TYPE'),
              accessibilityLabel: 'NotificationSettingScreen_Test',
            }),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_AlldayNight,
              onPress: function (o) {
                if (p) {
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      AlldayNight: o,
                    })
                  );
                  t.setState({
                    isClickedMarketingTopic: true,
                    isSelectedTopic: o,
                    selectedTopicTitle: 'AlldayNight',
                  });
                } else
                  module609.simpleAlert({
                    content: s.Error_Connect_Failed,
                    confirmText: s.Confirm,
                  });
              },
              value: _.AlldayNight,
              enabled: S,
              visible: 'KR' == module498.SystemManager.getIpCountry(),
              accessibilityLabel: 'NotificationSettingScreen_Night',
            }),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_Notices,
              onPress: function (o) {
                if (p) {
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      Notices: o,
                    })
                  );
                  t.setState({
                    isClickedMarketingTopic: true,
                    isSelectedTopic: o,
                    selectedTopicTitle: 'Notices',
                  });
                } else
                  module609.simpleAlert({
                    content: s.Error_Connect_Failed,
                    confirmText: s.Confirm,
                  });
              },
              value: _.Notices,
              enabled: S,
              accessibilityLabel: 'NotificationSettingScreen_Notice',
            }),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_Updates,
              onPress: function (o) {
                if (p) {
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      Updates: o,
                    })
                  );
                  t.setState({
                    isClickedMarketingTopic: true,
                    isSelectedTopic: o,
                    selectedTopicTitle: 'Updates',
                  });
                } else
                  module609.simpleAlert({
                    content: s.Error_Connect_Failed,
                    confirmText: s.Confirm,
                  });
              },
              value: _.Updates,
              enabled: S,
              accessibilityLabel: 'NotificationSettingScreen_Update',
            }),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_Events,
              onPress: function (o) {
                if (p) {
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      Events: o,
                    })
                  );
                  t.setState({
                    isClickedMarketingTopic: true,
                    isSelectedTopic: o,
                    selectedTopicTitle: 'Events',
                  });
                } else
                  module609.simpleAlert({
                    content: s.Error_Connect_Failed,
                    confirmText: s.Confirm,
                  });
              },
              value: _.Events,
              enabled: S,
              accessibilityLabel: 'NotificationSettingScreen_Event',
            }),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_PearlShop,
              onPress: function (o) {
                if (p) {
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      PearlShop: o,
                    })
                  );
                  t.setState({
                    isClickedMarketingTopic: true,
                    isSelectedTopic: o,
                    selectedTopicTitle: 'PearlShop',
                  });
                } else
                  module609.simpleAlert({
                    content: s.Error_Connect_Failed,
                    confirmText: s.Confirm,
                  });
              },
              value: _.PearlShop,
              enabled: S,
              accessibilityLabel: 'NotificationSettingScreen_PearlShop',
            }),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_GMNotes,
              onPress: function (o) {
                if (p) {
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      GMNotes: o,
                    })
                  );
                  t.setState({
                    isClickedMarketingTopic: true,
                    isSelectedTopic: o,
                    selectedTopicTitle: 'GMNotes',
                  });
                } else
                  module609.simpleAlert({
                    content: s.Error_Connect_Failed,
                    confirmText: s.Confirm,
                  });
              },
              value: _.GMNotes,
              enabled: S,
              accessibilityLabel: 'NotificationSettingScreen_GMNotes',
            }),
            React.default.createElement(module799.BorderLine, {
              marginBottom: 18,
            }),
            React.default.createElement(
              module17.Text,
              {
                style: N.settingCategoryTitle,
              },
              s.Text_In_Game_Setting
            ),
            React.default.createElement(module799.PASettingSwitchMenu, {
              title: s.Setting_TradeMarket,
              onPress: function (o) {
                if (!t.props.isAccountLinking)
                  return module609.simpleAlert({
                    content: s.Hamburger_Alert_AccountLinking_Title1,
                    confirmText: s.Confirm,
                  });

                if (p) {
                  module613.bindAction.service.manageTopic(
                    t.props.topics,
                    module6.default({}, t.props.topics, {
                      TradeMarket: o,
                    })
                  );
                  t.setState({
                    isClickedMarketingTopic: true,
                    isSelectedTopic: o,
                    selectedTopicTitle: 'TradeMarket',
                  });
                } else
                  module609.simpleAlert({
                    content: s.Error_Connect_Failed,
                    confirmText: s.Confirm,
                  });
              },
              value: _.TradeMarket,
              enabled: S,
              accessibilityLabel: 'NotificationSettingScreen_TradeMarket',
            }),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: s.Setting_GuildChat,
              onPress: function () {
                return t.props.navigation.navigate('MainRoute_GuildChatSetting');
              },
              visible: 'PC' == this.props.platform,
              accessibilityLabel: 'NotificationSettingScreen_GuildChat',
            }),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: s.Push_Boss_Timer,
              onPress: function () {
                if (t.props.topics.AlldayNoNight)
                  return module609.simpleAlert({
                    content: t.props.uiLanguage.Alert_Need_Allow_Notification_Night,
                    confirmText: t.props.uiLanguage.Confirm,
                  });
                module651.NavigationService.navigate({
                  url: undefined,
                  title: undefined,
                  router: module651.NavigationService.routers.MainRoute_BossNotificationSetting,
                  needLogin: true,
                  needAccountLinking: true,
                  disableCheckAccount: true,
                });
              },
            }),
            React.default.createElement(module799.WaitModal, {
              loading: v || C || E || y,
            }),
            React.default.createElement(module799.NotificationModal, {
              visible: M,
              title: (this.state.isSelectedTopic ? s.Push_Marketing_Title : s.Push_Not_Agree_Marketing_Title).replace(
                '${notificationName}',
                this.props.uiLanguage['Setting_' + this.state.selectedTopicTitle]
              ),
              sender: s.Push_Sender,
              marketing: this.state.isSelectedTopic ? s.Push_Agree_Marketing : s.Push_Not_Agree_Marketing,
              date: this.state.isSelectedTopic ? s.Push_Agree_Date + module609.createFormatDate() : s.Push_Not_Agree_Date + module609.createFormatDate(),
              confirmText: this.props.uiLanguage.Confirm,
              settingMessage: s.Push_Setting_Message,
              onPress: function (n) {
                if (n) {
                  module613.bindAction.service.doneModalTopic();
                  t.setState({
                    isClickedMarketingTopic: false,
                  });
                }
              },
            })
          );
        },
      },
    ]);
    return E;
  })(React.default.Component),
  N = module17.StyleSheet.create({
    headerStyle: {
      backgroundColor: module755.Color.mainTheme,
    },
    title: {
      flex: 1,
    },
    content: {
      flex: 1,
      width: '100%',
      height: '100%',
      marginTop: 16,
      marginBottom: 16,
    },
    settingCategoryTitle: {
      fontSize: 14,
      textAlign: 'left',
      color: module755.Color.optionText,
      marginTop: 8,
      marginBottom: 12,
      paddingStart: 16,
      paddingEnd: 16,
    },
  }),
  E = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
      isNetworkConnected: t.system.isNetworkConnected,
      canReceiveNotification: t.service.canReceiveNotification,
      topics: t.service.topics,
      isAccountLinking: t.account.isAccountLinking,
      allowMarketing: t.account.allowMarketing,
      loginProgress: t.progress.loginProgress,
      manageTopicProgress: t.progress.manageTopicProgress,
      refreshInstanceIdProgress: t.progress.refreshInstanceIdProgress,
      toggleTopicProgress: t.progress.toggleTopicProgress,
      pushModalProgress: t.progress.pushModalProgress,
    };
  })(M);

exports.default = E;
