var module6 = require('./6'),
  module7 = require('./7'),
  module112 = require('./112'),
  module20 = require('./20'),
  h = function t() {
    module7(this, t);
    this.any_blank_count = 0;
    this.any_blank_ms = 0;
    this.any_blank_speed_sum = 0;
    this.mostly_blank_count = 0;
    this.mostly_blank_ms = 0;
    this.pixels_blank = 0;
    this.pixels_sampled = 0;
    this.pixels_scrolled = 0;
    this.total_time_spent = 0;
    this.sample_count = 0;
  },
  o = [],
  u = 10,
  f = null,
  c = (function () {
    function c(t) {
      module7(this, c);
      this._anyBlankStartTime = null;
      this._enabled = false;
      this._info = new h();
      this._mostlyBlankStartTime = null;
      this._samplesStartTime = null;
      this._getFrameMetrics = t;
      this._enabled = (f || 0) > Math.random();

      this._resetData();
    }

    module8(c, null, [
      {
        key: 'addListener',
        value: function (t) {
          module20(null !== f, 'Call `FillRateHelper.setSampleRate` before `addListener`.');
          o.push(t);
          return {
            remove: function () {
              o = o.filter(function (n) {
                return t !== n;
              });
            },
          };
        },
      },
      {
        key: 'setSampleRate',
        value: function (t) {
          f = t;
        },
      },
      {
        key: 'setMinSampleCount',
        value: function (t) {
          u = t;
        },
      },
    ]);
    module8(c, [
      {
        key: 'activate',
        value: function () {
          if (this._enabled && null == this._samplesStartTime) this._samplesStartTime = module112();
        },
      },
      {
        key: 'deactivateAndFlush',
        value: function () {
          if (this._enabled) {
            var n = this._samplesStartTime;
            if (null != n)
              if (this._info.sample_count < u) this._resetData();
              else {
                var s = module112() - n,
                  _ = module6({}, this._info, {
                    total_time_spent: s,
                  });

                o.forEach(function (t) {
                  return t(_);
                });

                this._resetData();
              }
          }
        },
      },
      {
        key: 'computeBlankness',
        value: function (t, n, s) {
          if (!this._enabled || 0 === t.getItemCount(t.data) || null == this._samplesStartTime) return 0;
          var _ = s.dOffset,
            h = s.offset,
            o = s.velocity,
            u = s.visibleLength;
          this._info.sample_count++;
          this._info.pixels_sampled += Math.round(u);
          this._info.pixels_scrolled += Math.round(Math.abs(_));
          var f = Math.round(1e3 * Math.abs(o)),
            c = module112();
          if (null != this._anyBlankStartTime) this._info.any_blank_ms += c - this._anyBlankStartTime;
          this._anyBlankStartTime = null;
          if (null != this._mostlyBlankStartTime) this._info.mostly_blank_ms += c - this._mostlyBlankStartTime;
          this._mostlyBlankStartTime = null;

          for (var k = 0, y = n.first, p = this._getFrameMetrics(y); y <= n.last && (!p || !p.inLayout); ) {
            p = this._getFrameMetrics(y);
            y++;
          }

          if (p && y > 0) k = u ** (0 ** (p.offset - h));

          for (var b = 0, v = n.last, S = this._getFrameMetrics(v); v >= n.first && (!S || !S.inLayout); ) {
            S = this._getFrameMetrics(v);
            v--;
          }

          if (S && v < t.getItemCount(t.data) - 1) {
            var M = S.offset + S.length;
            b = u ** (0 ** (h + u - M));
          }

          var T = Math.round(k + b),
            B = T / u;

          if (B > 0) {
            this._anyBlankStartTime = c;
            this._info.any_blank_speed_sum += f;
            this._info.any_blank_count++;
            this._info.pixels_blank += T;

            if (B > 0.5) {
              this._mostlyBlankStartTime = c;
              this._info.mostly_blank_count++;
            }
          } else if (f < 0.01 || Math.abs(_) < 1) this.deactivateAndFlush();

          return B;
        },
      },
      {
        key: 'enabled',
        value: function () {
          return this._enabled;
        },
      },
      {
        key: '_resetData',
        value: function () {
          this._anyBlankStartTime = null;
          this._info = new h();
          this._mostlyBlankStartTime = null;
          this._samplesStartTime = null;
        },
      },
    ]);
    return c;
  })();

class c {
  constructor(t) {
    module7(this, c);
    this._anyBlankStartTime = null;
    this._enabled = false;
    this._info = new h();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
    this._getFrameMetrics = t;
    this._enabled = (f || 0) > Math.random();

    this._resetData();
  }

  activate() {
    if (this._enabled && null == this._samplesStartTime) this._samplesStartTime = module112();
  }

  deactivateAndFlush() {
    if (this._enabled) {
      var n = this._samplesStartTime;
      if (null != n)
        if (this._info.sample_count < u) this._resetData();
        else {
          var s = module112() - n,
            _ = module6({}, this._info, {
              total_time_spent: s,
            });

          o.forEach(function (t) {
            return t(_);
          });

          this._resetData();
        }
    }
  }

  computeBlankness(t, n, s) {
    if (!this._enabled || 0 === t.getItemCount(t.data) || null == this._samplesStartTime) return 0;
    var _ = s.dOffset,
      h = s.offset,
      o = s.velocity,
      u = s.visibleLength;
    this._info.sample_count++;
    this._info.pixels_sampled += Math.round(u);
    this._info.pixels_scrolled += Math.round(Math.abs(_));
    var f = Math.round(1e3 * Math.abs(o)),
      c = module112();
    if (null != this._anyBlankStartTime) this._info.any_blank_ms += c - this._anyBlankStartTime;
    this._anyBlankStartTime = null;
    if (null != this._mostlyBlankStartTime) this._info.mostly_blank_ms += c - this._mostlyBlankStartTime;
    this._mostlyBlankStartTime = null;

    for (var k = 0, y = n.first, p = this._getFrameMetrics(y); y <= n.last && (!p || !p.inLayout); ) {
      p = this._getFrameMetrics(y);
      y++;
    }

    if (p && y > 0) k = u ** (0 ** (p.offset - h));

    for (var b = 0, v = n.last, S = this._getFrameMetrics(v); v >= n.first && (!S || !S.inLayout); ) {
      S = this._getFrameMetrics(v);
      v--;
    }

    if (S && v < t.getItemCount(t.data) - 1) {
      var M = S.offset + S.length;
      b = u ** (0 ** (h + u - M));
    }

    var T = Math.round(k + b),
      B = T / u;

    if (B > 0) {
      this._anyBlankStartTime = c;
      this._info.any_blank_speed_sum += f;
      this._info.any_blank_count++;
      this._info.pixels_blank += T;

      if (B > 0.5) {
        this._mostlyBlankStartTime = c;
        this._info.mostly_blank_count++;
      }
    } else if (f < 0.01 || Math.abs(_) < 1) this.deactivateAndFlush();

    return B;
  }

  enabled() {
    return this._enabled;
  }

  _resetData() {
    this._anyBlankStartTime = null;
    this._info = new h();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
  }
}

module.exports = c;
