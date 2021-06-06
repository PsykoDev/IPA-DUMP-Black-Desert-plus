var n,
  module723 = require('./723');

exports.ServiceManager = n;

(function (n) {
  var o = {
    Platform: {
      PC: {
        Region: {
          KR: {
            Lang: [module723.LocalizeManager.languages['ko-KR'].name],
          },
          TW: {
            Lang: [module723.LocalizeManager.languages['zh-Hant-TW'].name],
          },
          JP: {
            Lang: [module723.LocalizeManager.languages['ja-JP'].name],
          },
          TR: {
            Lang: [module723.LocalizeManager.languages['tr-TR'].name, module723.LocalizeManager.languages['en-MENA'].name],
          },
          RU: {
            Lang: [module723.LocalizeManager.languages['ru-RU'].name],
          },
          TH: {
            Lang: [module723.LocalizeManager.languages['th-TH'].name],
          },
          SEA: {
            Lang: [module723.LocalizeManager.languages['en-SEA'].name],
          },
          NA: {
            Lang: [
              module723.LocalizeManager.languages['en-US'].name,
              module723.LocalizeManager.languages['de-DE'].name,
              module723.LocalizeManager.languages['fr-FR'].name,
              module723.LocalizeManager.languages['es-ES'].name,
            ],
          },
          EU: {
            Lang: [
              module723.LocalizeManager.languages['en-US'].name,
              module723.LocalizeManager.languages['de-DE'].name,
              module723.LocalizeManager.languages['fr-FR'].name,
              module723.LocalizeManager.languages['es-ES'].name,
            ],
          },
        },
      },
      XBOX: {
        Region: {
          ASIA: {
            Lang: [
              module723.LocalizeManager.languages['en-US'].name,
              module723.LocalizeManager.languages['de-DE'].name,
              module723.LocalizeManager.languages['fr-FR'].name,
              module723.LocalizeManager.languages['ja-JP'].name,
              module723.LocalizeManager.languages['ko-KR'].name,
            ],
          },
          EU: {
            Lang: [
              module723.LocalizeManager.languages['en-US'].name,
              module723.LocalizeManager.languages['de-DE'].name,
              module723.LocalizeManager.languages['fr-FR'].name,
              module723.LocalizeManager.languages['ja-JP'].name,
              module723.LocalizeManager.languages['ko-KR'].name,
            ],
          },
          NA: {
            Lang: [
              module723.LocalizeManager.languages['en-US'].name,
              module723.LocalizeManager.languages['de-DE'].name,
              module723.LocalizeManager.languages['fr-FR'].name,
              module723.LocalizeManager.languages['ja-JP'].name,
              module723.LocalizeManager.languages['ko-KR'].name,
            ],
          },
        },
      },
      PS: {
        Region: {
          ASIA: {
            Lang: [
              module723.LocalizeManager.languages['en-US'].name,
              module723.LocalizeManager.languages['de-DE'].name,
              module723.LocalizeManager.languages['fr-FR'].name,
              module723.LocalizeManager.languages['ja-JP'].name,
              module723.LocalizeManager.languages['ko-KR'].name,
            ],
          },
          EU: {
            Lang: [
              module723.LocalizeManager.languages['en-US'].name,
              module723.LocalizeManager.languages['de-DE'].name,
              module723.LocalizeManager.languages['fr-FR'].name,
              module723.LocalizeManager.languages['ja-JP'].name,
              module723.LocalizeManager.languages['ko-KR'].name,
            ],
          },
          NA: {
            Lang: [
              module723.LocalizeManager.languages['en-US'].name,
              module723.LocalizeManager.languages['de-DE'].name,
              module723.LocalizeManager.languages['fr-FR'].name,
              module723.LocalizeManager.languages['ja-JP'].name,
              module723.LocalizeManager.languages['ko-KR'].name,
            ],
          },
        },
      },
    },
  };

  function u(n, l) {
    return n.includes('XBOX') || n.includes('PS') || n.includes('CONSOLE')
      ? 'BDC'
      : n.includes('PC') && (l.includes('NA') || l.includes('EU'))
      ? 'UBDO'
      : n.includes('PC')
      ? 'BDO'
      : 'Error';
  }

  n.getPlatforms = function () {
    return Object.keys(o.Platform).map(function (n) {
      return n;
    });
  };

  n.getRegions = function (n) {
    return Object.keys(o.Platform[n].Region).map(function (n) {
      return n;
    });
  };

  n.getLanguages = function (n, l) {
    return o.Platform[n].Region[l].Lang;
  };

  n.getPlatformKey = u;

  n.getTargetService = function (n) {
    var l = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : '';
    return 'PC' == n ? u(n, l) + '_' + l : n;
  };

  n.isSameWithLocal = function (n) {
    var l = n.platform,
      o = n.region,
      u = n.linkingPlatform,
      c = n.linkingRegion;
    return l == u && o == c;
  };

  n.checkRegionHaveManyRegionLanguages = function (n, l) {
    return o.Platform[n].Region[l].Lang.length > 1;
  };
})(n || (exports.ServiceManager = n = {}));
