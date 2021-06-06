exports.createPaWebViewRequest = function (n) {
  return {
    uri: n.url,
    method: 'GET',
    headers: {
      PAChecker: c,
      ViewAgent: t,
      AccessToken: undefined != n.accessToken ? n.accessToken : '',
      Uuid: module604,
    },
  };
};

exports.createLoginWebViewRequest = function (n) {
  return {
    uri: n.url,
    method: 'GET',
    headers: {
      PAChecker: c,
      ViewAgent: t,
      InstanceId: n.instanceId,
      DeviceName: '',
      AccessToken: undefined != n.accessToken ? n.accessToken : '',
      TargetService: n.targetService,
      Region: n.region,
      Language: n.regionLanguage,
      Uuid: module604,
    },
  };
};

var c = 'PearlAbyss',
  t = 'APP',
  module604 = require('./604').default.getUniqueId();
