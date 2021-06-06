var module910 = require('./910'),
  module911 = require('./911'),
  module859 = require('./859'),
  module913 = require('./913'),
  module915 = require('./915'),
  module916 = require('./916'),
  l = Object.prototype.hasOwnProperty;

module.exports = function (s, u) {
  var b = module859(s),
    c = !b && module911(s),
    y = !b && !c && module913(s),
    v = !b && !c && !y && module916(s),
    O = b || c || y || v,
    _ = O ? module910(s.length, String) : [],
    j = _.length;

  for (var w in s)
    (!u && !l.call(s, w)) ||
      (O && ('length' == w || (y && ('offset' == w || 'parent' == w)) || (v && ('buffer' == w || 'byteLength' == w || 'byteOffset' == w)) || module915(w, j))) ||
      _.push(w);

  return _;
};
