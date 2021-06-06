exports.default = function (n, o) {
  var u = n[o];
  if (!u)
    throw new Error(
      'There is no route defined for key '.concat(o, '.\n') +
        'Must be one of: '.concat(
          Object.keys(n)
            .map(function (n) {
              return "'".concat(n, "'");
            })
            .join(',')
        )
    );
  if (u.screen) return u.screen;

  if ('function' == typeof u.getScreen) {
    var f = u.getScreen();
    module440.default(
      module414.isValidElementType(f),
      "The getScreen defined for route '".concat(o, " didn't return a valid ") +
        'screen or navigator.\n\nPlease pass it like this:\n' +
        ''.concat(o, ": {\n  getScreen: () => require('./MyScreen').default\n}")
    );
    return f;
  }

  return u;
};

var module414 = require('./414'),
  module440 = require('./440');
