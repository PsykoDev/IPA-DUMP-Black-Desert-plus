exports.default = function (n, t) {
  return function (o, s, l) {
    return undefined !== l ? n(o, s, l) : c(n, t, o, s);
  };
};

var module1028 = require('./1028'),
  module1037 = require('./1037'),
  module1051 = require('./1051');

function c(n, c, l, f) {
  var u,
    h,
    _ = new module1037.default(),
    p = c.getDefaultState(),
    v = false,
    y = false,
    C = false,
    b = {
      start: function (o) {
        h = o;
        if (v) {
          if (h)
            h({
              finished: false,
            });
        } else if (y) console.warn('Animation has been finished before');
        else if (l.isNativelyInitialized()) {
          v = true;
          module1051.evaluateOnce(module1028.set(p.position, l), p.position, function () {
            u = module1028.always(
              module1028.set(
                l,
                module1028.block([
                  module1028.cond(module1028.clockRunning(_), 0, module1028.startClock(_)),
                  n(_, p, f),
                  module1028.cond(p.finished, [
                    module1028.call([], function () {
                      v = false;
                      if (!C) y = true;

                      l.__detachAnimation(b);

                      y = true;
                      if (!C) C = false;
                    }),
                    module1028.stopClock(_),
                  ]),
                  p.position,
                ])
              )
            );

            l.__attachAnimation(b);

            u.__addChild(l);
          });
        }
      },
      __detach: function () {
        if (h)
          h({
            finished: y,
          });
        h = null;

        u.__removeChild(l);
      },
      stop: function () {
        if (y) console.warn('Calling stop has no effect as the animation has already completed');
        else if (v) {
          C = true;
          module1051.evaluateOnce(module1028.set(p.finished, 1), p.finished);
        } else console.warn("Calling stop has no effect as the animation hasn't been started");
      },
      __stopImmediately_testOnly: function (n) {
        b.stop();
        y = n;

        l.__detachAnimation(b);
      },
    };

  return b;
}
