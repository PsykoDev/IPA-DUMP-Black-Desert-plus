exports.combineScript = function (t) {
  for (var n = '', o = 0; o < t.length; o++) n += t[o];

  return n;
};

var module832 = require('./832');

var n = {
  overrideAlert: "\nwindow.alert = (event) => {\n  window.ReactNativeWebView.postMessage('" + module832.Message.alert + ": ' + event)\n}\nvoid(0);",
  confirmScript: "\nwindow.confirm = function(event) {\n  window.ReactNativeWebView.postMessage('alert: ' + event)\n}\nvoid(0);",
  addScrollListener:
    "\nwindow.addEventListener('scroll', function(){\n  window.ReactNativeWebView.postMessage('" +
    module832.Message.scroll +
    ": ' + (document.documentElement.scrollTop||document.body.scrollTop))\n})\nvoid(0);",
  disableZoom:
    "\nconst meta = document.createElement('meta');\nmeta.setAttribute('content', 'width=width, initial-scale=1, maximum-scale=1, user-scalable=1');\nmeta.setAttribute('name', 'viewport')\ndocument.getElementsByTagName('head')[0].appendChild(meta);\nvoid(0);\n",
  scrollToBottom: '\nwindow.ReactNativeWebView.postMessage("\uc5ec\uae30 " + document.body.scrollHeight);\nwindow.scrollTo(0, document.body.scrollHeight)\nvoid(0);\n',
  preventSelect: "\nwindow.addEventListener('selectstart', function(e) {\n  e.preventDefault();\n})\n",
};
exports.utils = n;
