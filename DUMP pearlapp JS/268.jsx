require('./90');

var module6 = require('./6'),
  regeneratorRuntime = require('regenerator-runtime'),
  module270 = require('./270'),
  module25 = require('./25'),
  React = require('react'),
  module60 = require('./60'),
  module87 = require('./87'),
  module182 = require('./182'),
  module177 = require('./177'),
  p = module25.ImageViewManager,
  w = module182('RCTImageView');

var v = function (n, o) {
  var s,
    u,
    l = module177(n.source) || {
      uri: undefined,
      width: undefined,
      height: undefined,
    };

  if (Array.isArray(l)) {
    u = module87([y.base, n.style]) || {};
    s = l;
  } else {
    var p = l.width,
      v = l.height,
      z = l.uri;
    u =
      module87([
        {
          width: p,
          height: v,
        },
        y.base,
        n.style,
      ]) || {};
    s = [l];
    if ('' === z) console.warn('source.uri should not be an empty string');
  }

  var I = n.resizeMode || u.resizeMode || 'cover',
    b = u.tintColor;
  if ((null != n.src && console.warn('The <Image> component requires a `source` property rather than `src`.'), null != n.children))
    throw new Error(
      'The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.'
    );
  return <w />;
};

(v = React.forwardRef(v)).displayName = 'Image';

v.getSize = function (t, n, o) {
  p.getSize(
    t,
    n,
    o ||
      function () {
        console.warn('Failed to get size for image: ' + t);
      }
  );
};

v.getSizeWithHeaders = function (t, n, o, s) {
  return p
    .getSizeWithHeaders({
      uri: t,
      headers: n,
    })
    .then(function (t) {
      o(t.width, t.height);
    })
    .catch(
      s ||
        function () {
          console.warn('Failed to get size for image: ' + t);
        }
    );
};

v.prefetch = function (t) {
  return p.prefetchImage(t);
};

v.queryCache = function (t) {
  return regeneratorRuntime.async(
    function (o) {
      for (;;)
        switch ((o.prev = o.next)) {
          case 0:
            o.next = 2;
            return regeneratorRuntime.awrap(p.queryCache(t));

          case 2:
            return o.abrupt('return', o.sent);

          case 3:
          case 'end':
            return o.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

v.resolveAssetSource = module177;
v.propTypes = module270;
var y = module60.create({
  base: {
    overflow: 'hidden',
  },
});
module.exports = v;
