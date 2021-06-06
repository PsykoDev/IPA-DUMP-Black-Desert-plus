var module7 = require('./7'),
  n = (function () {
    function n(s) {
      module7(this, n);
      this.subscriber = s;
    }

    module8(n, [
      {
        key: 'remove',
        value: function () {
          this.subscriber.removeSubscription(this);
        },
      },
    ]);
    return n;
  })();

class n {
  constructor(s) {
    module7(this, n);
    this.subscriber = s;
  }

  remove() {
    this.subscriber.removeSubscription(this);
  }
}

module.exports = n;
