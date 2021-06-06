var module602 = require('@babel/runtime/helpers/interopRequireDefault')(require('./602')),
  module603 = require('./603');

module.exports = {
  getAppstoreAppVersion: function (o) {
    var p =
        arguments.length > 1 && undefined !== arguments[1]
          ? arguments[1]
          : {
              typeOfId: 'id',
            },
      u = p.country ? '&country=' + p.country : '',
      s = 'https://itunes.apple.com/lookup?' + p.typeOfId + '=' + o + u;
    return module603
      .get(s)
      .then(module603.parseJson)
      .then(function (n) {
        var o = module602.default(n, 'data.results[0].version');
        if (!o) throw new Error('App not found!');
        return o;
      });
  },
};
