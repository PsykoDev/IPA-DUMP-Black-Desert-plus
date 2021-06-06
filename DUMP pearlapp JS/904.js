var module905 = require('./905');

module.exports = function (o, _, t) {
  if ('__proto__' == _ && module905)
    module905(o, _, {
      configurable: true,
      enumerable: true,
      value: t,
      writable: true,
    });
  else o[_] = t;
};
