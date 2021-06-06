var module6 = require('./6'),
  module152 = require('./152'),
  module343 = require('./343'),
  module300 = require('./300'),
  React = require('react'),
  module344 = require('./344'),
  module18 = require('./18');

require('./345');

module.exports = function (t, f, v, _, E, T, x) {
  module18(v, 'Expect to have a valid rootTag, instead got ', v);
  var A = React.createElement(
    module343.default.Provider,
    {
      value: null != x ? x : module152.default,
    },
    React.createElement(
      module300,
      {
        rootTag: v,
        WrapperComponent: _,
      },
      React.createElement(
        t,
        module6.default({}, f, {
          rootTag: v,
        })
      ),
      true === E && true === T ? React.createElement(module344, null) : null
    )
  );
  module152.default.startTimespan('renderApplication_React_render');
  if (E) require('./346').render(A, v);
  else require('./90').render(A, v);
  module152.default.stopTimespan('renderApplication_React_render');
};
