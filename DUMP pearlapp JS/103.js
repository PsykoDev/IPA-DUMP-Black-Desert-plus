module.exports = function (t) {
  if (!t || !t.stack) return [];

  for (var module104 = require('./104'), o = Array.isArray(t.stack) ? t.stack : module104.parse(t.stack), f = 'number' == typeof t.framesToPop ? t.framesToPop : 0; f--; )
    o.shift();

  return o;
};
