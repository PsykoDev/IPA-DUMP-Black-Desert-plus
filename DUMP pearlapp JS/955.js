var module950 = require('./950');

module.exports = function (f, n) {
  var u = n ? module950(f.buffer) : f.buffer;
  return new f.constructor(u, f.byteOffset, f.length);
};
