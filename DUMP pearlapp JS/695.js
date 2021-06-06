exports.default = function (t, c) {
  var l = module696.default(c);

  switch (c) {
    case 'vertical':
    case 'vertical-inverted':
      return t.height * l;

    case 'horizontal':
    case 'horizontal-inverted':
      return t.width * l;
  }
};

var module696 = require('./696');
