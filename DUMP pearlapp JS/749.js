var module6 = require('./6'),
  module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module646 = require('./646'),
  module748 = require('./748'),
  module747 = require('./747'),
  module613 = require('./613'),
  module648 = require('./648'),
  module750 = require('./750');

function k(t, o) {
  var n;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (n = T(t)) || (o && t && 'number' == typeof t.length)) {
      if (n) t = n;
      var c = 0;
      return function () {
        return c >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[c++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (n = t[Symbol.iterator]()).next.bind(n);
}

function T(t, o) {
  if (t) {
    if ('string' == typeof t) return D(t, o);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === n && t.constructor) n = t.constructor.name;
    return 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? D(t, o) : undefined;
  }
}

function D(t, o) {
  if (null == o || o > t.length) o = t.length;

  for (var n = 0, c = new Array(o); n < o; n++) c[n] = t[n];

  return c;
}

function w() {
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

var _ = {
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
    SUN: 0,
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
    0: 'SUN',
  },
  A = {
    PDT: 7,
    PST: 8,
    UTC: 0,
    GMT: 0,
  },
  M = new ((function (t) {
    module9.default(M, t);

    var o = M,
      T = w(),
      D = function () {
        var t,
          n = module13.default(o);

        if (T) {
          var c = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, c);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function M() {
      module7.default(this, M);
      return D.call(this);
    }

    module8.default(M, [
      {
        key: 'checkGroupExist',
        value: function (t) {
          return undefined != module613.store.getState().service.bossNotifications[t];
        },
      },
      {
        key: 'buildBossData',
        value: function (t, o, n, c, s) {
          return {
            platform: t,
            region: o,
            bossName: n,
            schedule: c,
            code: s,
          };
        },
      },
      {
        key: 'createNotificationId',
        value: function (t) {
          return t.platform + '_' + t.region + '_' + t.bossName + '_' + t.schedule.week + '_' + t.schedule.time;
        },
      },
      {
        key: 'checkNotificationExist',
        value: function (t, o) {
          return undefined != module613.store.getState().service.bossNotifications[t].schedules[o];
        },
      },
      {
        key: 'getScheduledNotifications',
        value: function (t) {
          var o = module613.store.getState().service.bossNotifications[t].schedules,
            n = {};

          for (var c in o) {
            var s = o[c];
            n[c] = s;
          }

          return n;
        },
      },
      {
        key: 'scheduleNotification',
        value: function (t, o, n, c) {
          var s = module613.store.getState().system.uiLanguage,
            u = s.Notification_World_Boss_Title,
            f = s.Notification_World_Boss_Body.replace('${bossName}', s['Text_' + n.bossName]).replace('${time}', c.toString()),
            h = module747.androidNotificationChannel.bossNotice.channelID,
            y = this.buildNotification(o, u, f, n, h),
            N = this.calcFireDate(n.schedule, c);
          module49.default(module13.default(M.prototype), 'scheduleNotification', this).call(this, y, N, 'week');
          module613.bindAction.service.addBossSchedule(t, o, n);
        },
      },
      {
        key: 'cancelNotification',
        value: function (t, o) {
          module49.default(module13.default(M.prototype), 'cancelNotification', this).call(this, o);
          module613.bindAction.service.removeBossSchedule(t, o);
        },
      },
      {
        key: 'clearNotification',
        value: function (t) {
          module49.default(module13.default(M.prototype), 'cancelAllNotifications', this).call(this);
          module613.bindAction.service.clearBossSchedule(t);
        },
      },
      {
        key: 'calcFireDate',
        value: function (t, o) {
          var n = t.timeZone,
            c = t.week,
            s = t.time,
            l = new Date(),
            u = l.getDate(),
            f = l.getDay(),
            v = A[n];
          if (n.includes('UTC') || n.includes('GMT')) v = -1 * parseInt(n.split('+')[1]);
          else v = A[n];
          var h = v,
            y = (-1 * l.getTimezoneOffset()) / 60,
            p = new Date(),
            b = s.split(':'),
            N = _[c],
            S = parseInt(b[0]),
            k = parseInt(b[1]),
            T = N - f;
          if (0 == T) {
            if (60 * l.getHours() + l.getMinutes() > 60 * S + k - o) T += 7;
          } else if (T < 0) T += 7;
          p.setDate(u + T);
          p.setHours(S + h + y);
          p.setMinutes(k - o);
          p.setSeconds(0);
          return p;
        },
      },
      {
        key: 'getTimeDataForTitle',
        value: function (t, o) {
          var n = this.calcFireDate(t, o),
            c = String(n.getHours());
          if (1 == c.length) c = '0' + c;
          var s = String(n.getMinutes());
          if (1 == s.length) s = '0' + s;
          return {
            week: _[n.getDay()],
            time: c + ':' + s,
          };
        },
      },
      {
        key: 'checkNotificationUpdate',
        value: function (t) {
          var o = this,
            c = module613.store.getState().system,
            s = c.platform,
            l = c.region,
            u = module613.store.getState().service,
            f = u.timeZone,
            v = u.bossNotifications,
            p = module750.ServiceManager.getPlatformKey(s, l),
            T = v[t],
            D = T.schedules,
            w = T.beforeAlarmMinutes,
            _ = module646.getTimeZone();

          if (f != _) {
            var A = (-1 * new Date().getTimezoneOffset()) / 60;
            module613.bindAction.service.setDeviceTimeZone(_);
            this.clearNotification(t);
            Object.keys(D).map(function (c) {
              var s = D[c],
                l = module6.default({}, s.schedule, {
                  timeZone: 'UTC+' + A,
                }),
                u = module6.default({}, s, {
                  newSchedule: l,
                });
              o.scheduleNotification(t, c, u, w);
            });
          }

          var M = [],
            I = module748.RemoteConfigManager.getConfig('boss')[p][l].Boss;

          for (var U in (Object.keys(I).map(function (t) {
            for (var o, n = k(I[t]); !(o = n()).done; ) {
              var c = o.value;
              M.push(c);
            }
          }),
          D)) {
            for (var B = D[U], C = false, O = 0; O < M.length; O++)
              if (B.code == M[O].code) {
                var R = B.schedule,
                  Z = R.timeZone,
                  E = R.week,
                  j = R.time,
                  F = module748.RemoteConfigManager.getConfig('boss')[p][l].TimeZone,
                  x = M[O].week,
                  H = M[O].time;

                if (Z != F || E != x || j != H) {
                  this.cancelNotification(t, U);
                  var P = this.buildBossData(
                      B.platform,
                      B.region,
                      B.bossName,
                      {
                        timeZone: F,
                        week: x,
                        time: H,
                      },
                      B.code
                    ),
                    W = this.createNotificationId(P);
                  this.scheduleNotification(t, W, P, w);
                  module648.Logger.info(arguments.callee.name, P);
                  break;
                }

                C = true;
              }

            if (!C) this.cancelNotification(t, U);
          }
        },
      },
    ]);
    return M;
  })(module747.default))();
exports.default = M;
