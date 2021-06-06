exports.evaluateOnce = function (t) {
  var v = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [],
    h = arguments.length > 2 ? arguments[2] : undefined;
  if (!Array.isArray(v)) v = [v];

  for (
    var f = new module1034.default(0),
      u = module1029.createAnimatedCond(
        f,
        0,
        module1042.createAnimatedCall([t, module1035.createAnimatedSet(f, 1)], function () {
          if (h) h();

          for (var t = 0; t < v.length; t++) {
            v[t].__removeChild(A);

            A.__detach();
          }
        })
      ),
      A = module1052.createAnimatedAlways(u),
      y = 0;
    y < v.length;
    y++
  ) {
    v[y].__addChild(A);

    A.__attach();
  }
};

var module1034 = require('./1034'),
  module1035 = require('./1035'),
  module1042 = require('./1042'),
  module1052 = require('./1052'),
  module1029 = require('./1029');
