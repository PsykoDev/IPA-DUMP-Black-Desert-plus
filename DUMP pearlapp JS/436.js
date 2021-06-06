var module437 = require('./437'),
  module494 = require('./494'),
  module752 = require('./752'),
  module1016 = require('./1016'),
  module1151 = require('./1151'),
  module1153 = require('./1153'),
  module1155 = require('./1155'),
  R = module437.createSwitchNavigator(
    {
      AppRoute_Start: module494.default,
      AppRoute_Main: module1016.default,
      AppRoute_DefaultSetting: module752.default,
      AppRoute_Inspection: module1151.default,
      AppRoute_Error: module1153.default,
      AppRoute_RequiredUpdate: module1155.default,
    },
    {
      initialRouteName: 'AppRoute_Start',
    }
  ),
  A = module437.createAppContainer(R);

exports.default = A;
