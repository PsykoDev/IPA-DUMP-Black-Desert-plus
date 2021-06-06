exports.__esModule = true;

exports.default = function (o, t, n, s) {
  p(o, 'mapStateToProps', s);
  p(t, 'mapDispatchToProps', s);
  p(n, 'mergeProps', s);
};

var module425 = require('./425');

function p(o, p, n) {
  if (!o) throw new Error('Unexpected value for ' + p + ' in ' + n + '.');
  if (!(('mapStateToProps' !== p && 'mapDispatchToProps' !== p) || Object.prototype.hasOwnProperty.call(o, 'dependsOnOwnProps')))
    module425.default('The selector for ' + p + ' of ' + n + ' did not specify a value for dependsOnOwnProps.');
}
