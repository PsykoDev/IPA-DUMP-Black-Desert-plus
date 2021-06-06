var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module799 = require('./799'),
  module613 = require('./613'),
  module755 = require('./755'),
  module609 = require('./609'),
  module1144 = require('./1144'),
  module1145 = require('./1145');

function P() {
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

var S = (function (t) {
    module9.default(A, t);

    var module406 = A,
      module755 = P(),
      S = function () {
        var t,
          o = module13.default(module406);

        if (module755) {
          var n = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function A(t) {
      var o;
      module7.default(this, A);
      (o = S.call(this, t)).state = {
        isClickedMarketingTopic: false,
        isClickedTopic: false,
        selectedTopic: '',
        canToggleGuildChatkeyword: o.props.GuildChatKeyword,
        keywords: o.props.chatKeywords,
        keyword: '',
      };
      return o;
    }

    module8.default(A, [
      {
        key: 'componentWillReceiveProps',
        value: function (t) {
          if (t.chatKeywords.toString() != this.state.keywords.toString())
            this.setState({
              keywords: t.chatKeywords,
            });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (!(this.props.chatKeywords == this.state.keywords && this.props.GuildChatKeyword == this.state.canToggleGuildChatkeyword))
            0 == this.state.keywords.length
              ? (module613.bindAction.service.toggleGuildChatKeyword(false), module613.bindAction.service.setKeywordList([], true))
              : this.props.chatKeywords != this.state.keywords
              ? (module613.bindAction.service.toggleGuildChatKeyword(this.state.canToggleGuildChatkeyword), module613.bindAction.service.setKeywordList(this.state.keywords, true))
              : this.state.canToggleGuildChatkeyword
              ? this.state.canToggleGuildChatkeyword != this.props.GuildChatKeyword &&
                (module613.bindAction.service.toggleGuildChatKeyword(this.state.canToggleGuildChatkeyword), module613.bindAction.service.setKeywordList(this.state.keywords, true))
              : (module613.bindAction.service.toggleGuildChatKeyword(this.state.canToggleGuildChatkeyword), module613.bindAction.service.setKeywordList([], false));
        },
      },
      {
        key: 'clear',
        value: function () {
          this.setState({
            keyword: '',
          });
          this.keywordInput.clear();
        },
      },
      {
        key: 'getCountKeywords',
        value: function () {
          return this.state.keywords.length;
        },
      },
      {
        key: 'checkValidKeyword',
        value: function (t) {
          return 0 != t.length && t.length + 1 != t.split(' ').length;
        },
      },
      {
        key: 'appendKeyword',
        value: function (t) {
          if ((0 == t.length && this.keywordInput.focus(), !this.state.keywords.includes(t) && this.state.keywords.length < 10)) {
            if (this.checkValidKeyword(t)) {
              var o = module34.default(this.state.keywords);
              o.push(t);
              this.setState({
                keywords: o,
              });
            }

            this.clear();
          }
        },
      },
      {
        key: 'removeKeyword',
        value: function (t) {
          var o = module34.default(this.state.keywords),
            s = o.indexOf(t);
          o.splice(s, s + 1);
          this.setState({
            keywords: o,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            s = n.platform,
            l = n.isAccountLinking,
            c = n.uiLanguage,
            u = n.isNetworkConnected,
            h = n.canReceiveNotification,
            p = n.topics,
            C = n.loginProgress,
            P = n.manageTopicProgress,
            S = n.pushModalProgress,
            A = n.refreshInstanceIdProgress,
            G = n.toggleTopicProgress;
          return React.default.createElement(
            module799.PABackgroundScrollView,
            null,
            React.default.createElement(
              module17.View,
              {
                style: K.content,
              },
              React.default.createElement(
                module17.Text,
                {
                  style: K.settingCategoryTitle,
                },
                c.Push_Information_Title
              ),
              React.default.createElement(module799.PASettingSwitchMenu, {
                title: c.Text_Guild_Chat_Notification,
                onPress: function (n) {
                  if (!l)
                    return module609.simpleAlert({
                      content: c.Hamburger_Alert_AccountLinking_Title1,
                      confirmText: c.Confirm,
                    });

                  if (u) {
                    module613.bindAction.service.manageTopic(
                      t.props.topics,
                      module6.default({}, t.props.topics, {
                        GuildChat: n,
                      })
                    );
                    t.setState({
                      isClickedMarketingTopic: true,
                      isClickedTopic: n,
                      selectedTopic: 'GuildChat',
                    });
                  } else
                    module609.simpleAlert({
                      content: c.Error_Connect_Failed,
                      confirmText: c.Confirm,
                    });
                },
                value: p.GuildChat,
                enabled: h,
                visible: 'PC' == s,
                accessibilityLabel: 'GuildChatSettingScreen_ChatAlarm',
              }),
              React.default.createElement(module799.PASettingSwitchMenu, {
                title: c.Text_Guild_Chat_Keyword,
                onPress: function (o) {
                  if (u)
                    t.setState({
                      canToggleGuildChatkeyword: o,
                    });
                  else
                    module609.simpleAlert({
                      content: c.Error_Connect_Failed,
                      confirmText: c.Confirm,
                    });
                },
                value: this.state.canToggleGuildChatkeyword,
                enabled: h && p.GuildChat,
                accessibilityLabel: 'GuildChatSettingScreen_KeywordAlarm',
              }),
              this.state.canToggleGuildChatkeyword &&
                p.GuildChat &&
                React.default.createElement(
                  module17.View,
                  {
                    style: {
                      flex: 1,
                      marginStart: 32,
                      marginEnd: 32,
                      marginTop: 8,
                    },
                  },
                  React.default.createElement(
                    module17.View,
                    {
                      style: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 16,
                      },
                    },
                    React.default.createElement(
                      module17.View,
                      {
                        style: {
                          flexDirection: 'row',
                          alignItems: 'center',
                        },
                      },
                      React.default.createElement(
                        module17.Text,
                        {
                          style: {
                            color: '#f8f2e3',
                            fontSize: 18,
                          },
                        },
                        this.props.uiLanguage.Text_My_Keyword
                      ),
                      React.default.createElement(module17.View, {
                        style: {
                          marginStart: 8,
                        },
                      }),
                      React.default.createElement(
                        module17.Text,
                        {
                          style: {
                            color: '#79746d',
                            fontWeight: 'bold',
                          },
                        },
                        '(' + this.getCountKeywords() + '/10)'
                      )
                    ),
                    React.default.createElement(module799.PARoundButton, {
                      title: this.props.uiLanguage.Text_Add_Keyword,
                      width: 80,
                      height: 25,
                      onPress: this.appendKeyword.bind(this, this.state.keyword),
                      accessibilityLabel: 'GuildChatSettingScreen_Add',
                    })
                  ),
                  React.default.createElement(
                    module17.View,
                    null,
                    React.default.createElement(module1144.default, {
                      refs: function (o) {
                        t.keywordInput = o;
                      },
                      onChangeText: function (o) {
                        t.setState({
                          keyword: o,
                        });
                      },
                      cancel: function () {
                        t.clear();
                      },
                      placeholder: this.props.uiLanguage.Text_Chat_Keyword_Placeholder,
                      accessibilityLabel: 'GuildChatSettingScreen_KeywordInput',
                    }),
                    this.state.keywords.map(function (o, n) {
                      return React.default.createElement(module1145.default, {
                        key: n,
                        title: o,
                        cancel: function () {
                          t.removeKeyword(o);
                        },
                      });
                    })
                  )
                )
            ),
            React.default.createElement(module799.WaitModal, {
              loading: C || P || A || G,
            }),
            React.default.createElement(module799.NotificationModal, {
              visible: S,
              title: (this.state.isClickedTopic ? c.Push_Marketing_Title : c.Push_Not_Agree_Marketing_Title).replace(
                '${notificationName}',
                c['Setting_' + this.state.selectedTopic]
              ),
              sender: c.Push_Sender,
              marketing: this.state.isClickedTopic ? c.Push_Agree_Marketing : c.Push_Not_Agree_Marketing,
              date: this.state.isClickedTopic ? c.Push_Agree_Date + module609.createFormatDate() : c.Push_Not_Agree_Date + module609.createFormatDate(),
              confirmText: this.props.uiLanguage.Confirm,
              settingMessage: c.Push_Setting_Message,
              onPress: function (o) {
                if (o) {
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
    return A;
  })(React.default.Component),
  K = module17.StyleSheet.create({
    headerStyle: {
      backgroundColor: module755.Color.mainTheme,
    },
    title: {
      flex: 1,
    },
    content: {
      flex: 1,
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
  A = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      isNetworkConnected: t.system.isNetworkConnected,
      canReceiveNotification: t.service.canReceiveNotification,
      topics: t.service.topics,
      GuildChatKeyword: t.service.GuildChatKeyword,
      chatKeywords: t.service.chatKeywords,
      isAccountLinking: t.account.isAccountLinking,
      loginProgress: t.progress.loginProgress,
      manageTopicProgress: t.progress.manageTopicProgress,
      refreshInstanceIdProgress: t.progress.refreshInstanceIdProgress,
      toggleTopicProgress: t.progress.toggleTopicProgress,
      pushModalProgress: t.progress.pushModalProgress,
    };
  })(S);

exports.default = A;
