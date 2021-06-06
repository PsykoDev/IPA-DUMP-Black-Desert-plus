var module18 = require('./18');

module.exports = function (s) {
  module18(!(s.delayPressIn < 0 || s.delayPressOut < 0 || s.delayLongPress < 0), 'Touchable components cannot have negative delay properties');
};
