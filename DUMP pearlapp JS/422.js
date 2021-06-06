exports.__esModule = true;

exports.wrapMapToPropsConstant = function (n) {
  return function (o, p) {
    var s = n(o, p);

    function t() {
      return s;
    }

    t.dependsOnOwnProps = false;
    return t;
  };
};

exports.getDependsOnOwnProps = o;

exports.wrapMapToPropsFunc = function (n, p) {
  return function (p, s) {
    s.displayName;

    var t = function (n, o) {
      return t.dependsOnOwnProps ? t.mapToProps(n, o) : t.mapToProps(n);
    };

    t.dependsOnOwnProps = true;

    t.mapToProps = function (p, s) {
      t.mapToProps = n;
      t.dependsOnOwnProps = o(n);
      var u = t(p, s);

      if ('function' == typeof u) {
        t.mapToProps = u;
        t.dependsOnOwnProps = o(u);
        u = t(p, s);
      }

      return u;
    };

    return t;
  };
};

require('./423');

function o(n) {
  return null !== n.dependsOnOwnProps && undefined !== n.dependsOnOwnProps ? Boolean(n.dependsOnOwnProps) : 1 !== n.length;
}
