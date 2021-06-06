var n;
if (require('./114').canUseDOM) n = window.performance || window.msPerformance || window.webkitPerformance;
module.exports = n || {};
