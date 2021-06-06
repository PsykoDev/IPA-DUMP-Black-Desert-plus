var module6 = require('./6'),
  module170 = require('./170'),
  module162 = require('./162'),
  module171 = require('./171');

module.exports = function (t, l) {
  var v = {
    uiViewClassName: t,
    Commands: {},
    bubblingEventTypes: module6.default({}, module171.bubblingEventTypes, l.bubblingEventTypes || {}),
    directEventTypes: module6.default({}, module171.directEventTypes, l.directEventTypes || {}),
    validAttributes: module6.default({}, module171.validAttributes, l.validAttributes || {}),
  };
  module162.register(t, function () {
    module170.default(t, v);
    return v;
  });
};
