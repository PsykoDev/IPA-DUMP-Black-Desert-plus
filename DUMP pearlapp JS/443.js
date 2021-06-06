var t = 'Navigation/BACK';
exports.BACK = t;
var n = 'Navigation/INIT';
exports.INIT = n;
exports.NAVIGATE = 'Navigation/NAVIGATE';
exports.SET_PARAMS = 'Navigation/SET_PARAMS';

exports.back = function () {
  var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  return {
    type: t,
    key: n.key,
    immediate: n.immediate,
  };
};

exports.init = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
    o = {
      type: n,
    };
  if (t.params) o.params = t.params;
  return o;
};

exports.navigate = function (t) {
  var n = {
    type: 'Navigation/NAVIGATE',
    routeName: t.routeName,
  };
  if (t.params) n.params = t.params;
  if (t.action) n.action = t.action;
  if (t.key) n.key = t.key;
  return n;
};

exports.setParams = function (t) {
  return {
    type: 'Navigation/SET_PARAMS',
    key: t.key,
    params: t.params,
    preserveFocus: true,
  };
};
