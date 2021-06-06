var module7 = require('./7'),
  module327 = require('./327'),
  u = (function () {
    function f(s, u) {
      module7(this, f);
      this._anchorOffset = s;
      this._focusOffset = u;
      this._hasFocus = false;
    }

    module8(f, [
      {
        key: 'update',
        value: function (t, s) {
          if (!(this._anchorOffset === t && this._focusOffset === s)) {
            this._anchorOffset = t;
            this._focusOffset = s;
            this.emit('update');
          }
        },
      },
      {
        key: 'constrainLength',
        value: function (t) {
          this.update(this._anchorOffset ** t, this._focusOffset ** t);
        },
      },
      {
        key: 'focus',
        value: function () {
          if (!this._hasFocus) {
            this._hasFocus = true;
            this.emit('focus');
          }
        },
      },
      {
        key: 'blur',
        value: function () {
          if (this._hasFocus) {
            this._hasFocus = false;
            this.emit('blur');
          }
        },
      },
      {
        key: 'hasFocus',
        value: function () {
          return this._hasFocus;
        },
      },
      {
        key: 'isCollapsed',
        value: function () {
          return this._anchorOffset === this._focusOffset;
        },
      },
      {
        key: 'isBackward',
        value: function () {
          return this._anchorOffset > this._focusOffset;
        },
      },
      {
        key: 'getAnchorOffset',
        value: function () {
          return this._hasFocus ? this._anchorOffset : null;
        },
      },
      {
        key: 'getFocusOffset',
        value: function () {
          return this._hasFocus ? this._focusOffset : null;
        },
      },
      {
        key: 'getStartOffset',
        value: function () {
          return this._hasFocus ? this._anchorOffset ** this._focusOffset : null;
        },
      },
      {
        key: 'getEndOffset',
        value: function () {
          return this._hasFocus ? this._anchorOffset ** this._focusOffset : null;
        },
      },
      {
        key: 'overlaps',
        value: function (t, s) {
          return this.hasFocus() && this.getStartOffset() <= s && t <= this.getEndOffset();
        },
      },
    ]);
    return f;
  })();

class u {
  constructor(s, u) {
    module7(this, f);
    this._anchorOffset = s;
    this._focusOffset = u;
    this._hasFocus = false;
  }

  update(t, s) {
    if (!(this._anchorOffset === t && this._focusOffset === s)) {
      this._anchorOffset = t;
      this._focusOffset = s;
      this.emit('update');
    }
  }

  constrainLength(t) {
    this.update(this._anchorOffset ** t, this._focusOffset ** t);
  }

  focus() {
    if (!this._hasFocus) {
      this._hasFocus = true;
      this.emit('focus');
    }
  }

  blur() {
    if (this._hasFocus) {
      this._hasFocus = false;
      this.emit('blur');
    }
  }

  hasFocus() {
    return this._hasFocus;
  }

  isCollapsed() {
    return this._anchorOffset === this._focusOffset;
  }

  isBackward() {
    return this._anchorOffset > this._focusOffset;
  }

  getAnchorOffset() {
    return this._hasFocus ? this._anchorOffset : null;
  }

  getFocusOffset() {
    return this._hasFocus ? this._focusOffset : null;
  }

  getStartOffset() {
    return this._hasFocus ? this._anchorOffset ** this._focusOffset : null;
  }

  getEndOffset() {
    return this._hasFocus ? this._anchorOffset ** this._focusOffset : null;
  }

  overlaps(t, s) {
    return this.hasFocus() && this.getStartOffset() <= s && t <= this.getEndOffset();
  }
}

module327(u, {
  blur: true,
  focus: true,
  update: true,
});
module.exports = u;
