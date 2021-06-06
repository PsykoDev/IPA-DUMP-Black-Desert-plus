require('./58');

var module7 = require('./7'),
  module61 = require('./61'),
  module180 = require('./180'),
  module18 = require('./18');

function l(t) {
  var s = h.pickScale(t.scales, module61.get()),
    o = 1 === s ? '' : '@' + s + 'x';
  return module180.getBasePath(t) + '/' + t.name + o + '.' + t.type;
}

function c(t) {
  var s = h.pickScale(t.scales, module61.get());
  return module180.getAndroidResourceFolderName(t, s) + '/' + module180.getAndroidResourceIdentifier(t) + '.' + t.type;
}

var h = (function () {
  function h(s, n, u) {
    module7(this, h);
    this.serverUrl = s;
    this.jsbundleUrl = n;
    this.asset = u;
  }

  module8(
    h,
    [
      {
        key: 'isLoadedFromServer',
        value: function () {
          return !!this.serverUrl;
        },
      },
      {
        key: 'isLoadedFromFileSystem',
        value: function () {
          return !(!this.jsbundleUrl || !this.jsbundleUrl.startsWith('file://'));
        },
      },
      {
        key: 'defaultAsset',
        value: function () {
          return this.isLoadedFromServer() ? this.assetServerURL() : this.scaledAssetURLNearBundle();
        },
      },
      {
        key: 'assetServerURL',
        value: function () {
          module18(!!this.serverUrl, 'need server to load from');
          return this.fromSource(this.serverUrl + l(this.asset) + '?platform=ios&hash=' + this.asset.hash);
        },
      },
      {
        key: 'scaledAssetPath',
        value: function () {
          return this.fromSource(l(this.asset));
        },
      },
      {
        key: 'scaledAssetURLNearBundle',
        value: function () {
          var t = this.jsbundleUrl || 'file://';
          return this.fromSource(t + l(this.asset));
        },
      },
      {
        key: 'resourceIdentifierWithoutScale',
        value: function () {
          module18(false, 'resource identifiers work on Android');
          return this.fromSource(module180.getAndroidResourceIdentifier(this.asset));
        },
      },
      {
        key: 'drawableFolderInBundle',
        value: function () {
          var t = this.jsbundleUrl || 'file://';
          return this.fromSource(t + c(this.asset));
        },
      },
      {
        key: 'fromSource',
        value: function (t) {
          return {
            __packager_asset: true,
            width: this.asset.width,
            height: this.asset.height,
            uri: t,
            scale: h.pickScale(this.asset.scales, module61.get()),
          };
        },
      },
    ],
    [
      {
        key: 'pickScale',
        value: function (t, s) {
          for (var n = 0; n < t.length; n++) if (t[n] >= s) return t[n];

          return t[t.length - 1] || 1;
        },
      },
    ]
  );
  return h;
})();

module.exports = h;
