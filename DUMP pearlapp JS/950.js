var module951 = require('./951');

module.exports = function (t) {
  var o = new t.constructor(t.byteLength);
  new module951(o).set(new module951(t));
  return o;
};
