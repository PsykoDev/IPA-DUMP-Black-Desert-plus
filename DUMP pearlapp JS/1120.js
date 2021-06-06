var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module799 = require('./799'),
  module498 = require('./498'),
  module613 = require('./613'),
  module609 = require('./609'),
  module714 = require('./714'),
  module651 = require('./651'),
  module1121 = require('./1121'),
  module1122 = require('./1122'),
  module1123 = require('./1123');

function x() {
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

var b = (function (t) {
    module9.default(A, t);

    var n = A,
      module406 = x(),
      b = function () {
        var t,
          o = module13.default(n);

        if (module406) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function A(t) {
      var n;
      module7.default(this, A);
      (n = b.call(this, t)).passwordInput = React.createRef();
      n.state = {
        id: '',
        pw: '',
      };
      return n;
    }

    module8.default(A, [
      {
        key: 'login',
        value: function (t, n) {
          if ('' != this.state.id && '' != this.state.pw) module613.bindAction.account.fetchLogin(t, n);
          else
            module609.simpleAlert({
              content: this.props.uiLanguage.Alert_LoginScreen_Error_Title1,
              confirmText: this.props.uiLanguage.Confirm,
            });
        },
      },
      {
        key: 'snsLogin',
        value: function (t) {
          if (t.toLocaleLowerCase().includes('google'))
            this.props.navigation.navigate(module651.NavigationService.routers.MainRoute_SocialWebLogin, {
              returnUrl: t,
              userAgent: 'pearlApp',
            });
          else
            this.props.navigation.navigate(module651.NavigationService.routers.MainRoute_SocialWebLogin, {
              returnUrl: t,
              userAgent: '',
            });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return 'PC' !== this.props.platform || ('NA' !== this.props.region && 'EU' !== this.props.region)
            ? React.default.createElement(
                module17.KeyboardAvoidingView,
                {
                  style: module1121.default.container,
                  enabled: true,
                  accessibilityLabel: 'LoginScreen',
                },
                React.default.createElement(
                  module799.PABackgroundView,
                  null,
                  React.default.createElement(
                    module17.View,
                    {
                      style: module1121.default.topBlank,
                    },
                    React.default.createElement(
                      module17.Text,
                      {
                        style: module1121.default.title,
                      },
                      this.props.uiLanguage.Title_Login
                    )
                  ),
                  React.default.createElement(
                    module17.View,
                    {
                      style: module1121.default.content,
                    },
                    React.default.createElement(
                      module17.View,
                      {
                        style: {
                          width: '90%',
                          marginTop: 24,
                        },
                      },
                      React.default.createElement(
                        module799.PATouchable,
                        {
                          onPress: function () {
                            if (!t.props.loginProgress)
                              t.props.navigation.navigate('MainRoute_DefaultSetting', {
                                param: 'login',
                              });
                          },
                        },
                        React.default.createElement(
                          module17.Text,
                          {
                            style: module1121.default.platformAndRegion,
                          },
                          this.props.platform + ' - ' + this.props.region
                        )
                      ),
                      React.default.createElement(module17.View, {
                        style: {
                          height: 4,
                        },
                      }),
                      React.default.createElement(module1122.default, {
                        onChangeText: function (n) {
                          t.setState({
                            id: n,
                          });
                        },
                        title: this.props.uiLanguage.InputText_Title_Email,
                        placeHolder: this.props.uiLanguage.InputText_Title_Email,
                        editable: !this.props.loginProgress,
                        next: function () {
                          var n;
                          if (!(null == (n = t.passwordInput.current))) n.focus();
                        },
                        accessibilityLabel: 'LoginScreen_IDInput',
                      }),
                      React.default.createElement(module17.View, {
                        style: {
                          height: 8,
                        },
                      }),
                      React.default.createElement(module1122.default, {
                        onRef: function (n) {
                          t.passwordInput = n;
                        },
                        title: this.props.uiLanguage.InputText_Title_Password,
                        placeHolder: this.props.uiLanguage.InputText_Title_Password,
                        onChangeText: function (n) {
                          t.setState({
                            pw: n,
                          });
                        },
                        editable: !this.props.loginProgress,
                        secureTextEntry: true,
                        accessibilityLabel: 'LoginScreen_PWInput',
                      })
                    )
                  ),
                  React.default.createElement(
                    module17.View,
                    {
                      style: module1121.default.loginButton,
                    },
                    React.default.createElement(module799.PARoundButton, {
                      style: {
                        marginTop: 16,
                      },
                      borderRadius: 32,
                      width: module498.UIManager.getWidth(0.96),
                      title: this.props.uiLanguage.Button_Title_Login,
                      fontColor: 'white',
                      isActive: !this.props.loginProgress,
                      onPress: function () {
                        t.login(t.state.id, t.state.pw);
                      },
                      accessibilityLabel: 'LoginScreen_Confirm',
                    }),
                    React.default.createElement(
                      module17.View,
                      {
                        style: module1121.default.helperContainer,
                      },
                      React.default.createElement(
                        module17.Text,
                        {
                          style: module1121.default.helperText,
                          onPress: function () {
                            module651.NavigationService.navigate({
                              url: module714.replacedUrl.findId(t.props.region),
                              title: '',
                              router: module651.NavigationService.routers.MainRoute_DefaultWeb,
                              needLogin: false,
                              needAccountLinking: false,
                            });
                          },
                        },
                        this.props.uiLanguage.Account_ID_Search
                      ),
                      React.default.createElement(
                        module17.Text,
                        {
                          style: module1121.default.helperText,
                        },
                        ' | '
                      ),
                      React.default.createElement(
                        module17.Text,
                        {
                          style: module1121.default.helperText,
                          onPress: function () {
                            module651.NavigationService.navigate({
                              url: module714.replacedUrl.findPw(t.props.region),
                              title: '',
                              router: module651.NavigationService.routers.MainRoute_DefaultWeb,
                              needLogin: false,
                              needAccountLinking: false,
                            });
                          },
                        },
                        this.props.uiLanguage.Account_PW_Search
                      ),
                      React.default.createElement(
                        module17.Text,
                        {
                          style: module1121.default.helperText,
                        },
                        ' | '
                      ),
                      React.default.createElement(
                        module17.Text,
                        {
                          style: module1121.default.helperText,
                          onPress: function () {
                            module651.NavigationService.navigate({
                              url: module714.replacedUrl.signUp(t.props.region),
                              title: '',
                              router: module651.NavigationService.routers.MainRoute_DefaultWeb,
                              needLogin: false,
                              needAccountLinking: false,
                            });
                          },
                        },
                        this.props.uiLanguage.Account_Create
                      )
                    ),
                    module498.RemoteConfigManager.getConfig('config/OPTION/SNS_LOGIN_LIST') &&
                      React.default.createElement(
                        module17.View,
                        null,
                        React.default.createElement(module17.View, {
                          style: {
                            marginBottom: 16,
                          },
                        }),
                        React.default.createElement(
                          module17.View,
                          {
                            style: {
                              flexDirection: 'row',
                            },
                          },
                          module498.RemoteConfigManager.getConfig('common/SNS_LOGIN_LIST/' + this.props.region).map(function (n, o) {
                            return o <= 3
                              ? React.default.createElement(module1123.default, {
                                  key: n,
                                  url: n,
                                  onPress: function () {
                                    t.snsLogin(n);
                                  },
                                })
                              : null;
                          })
                        ),
                        React.default.createElement(module17.View, {
                          style: {
                            marginTop: 8,
                            marginBottom: 8,
                          },
                        }),
                        React.default.createElement(
                          module17.View,
                          {
                            style: {
                              flexDirection: 'row',
                            },
                          },
                          module498.RemoteConfigManager.getConfig('common/SNS_LOGIN_LIST/' + this.props.region).map(function (n, o) {
                            return o >= 4
                              ? React.default.createElement(module1123.default, {
                                  key: n,
                                  url: n,
                                  onPress: function () {
                                    t.snsLogin(n);
                                  },
                                })
                              : null;
                          })
                        )
                      )
                  )
                )
              )
            : React.default.createElement(module799.LoginWebView, {
                url: module714.replacedUrl.login(this.props.region, this.props.regionLanguage),
                userAgent: 'pearlApp',
              });
        },
      },
    ]);
    return A;
  })(React.Component),
  A = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
      regionLanguage: t.system.regionLanguage,
      loginProgress: t.progress.loginProgress,
    };
  })(b);

exports.default = A;
