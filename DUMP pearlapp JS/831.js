var module832 = {
  changeTradeFavoriteButton:
    "\n  favoriteButton =  document.getElementsByClassName('btnFavorite')[0];\n  favoriteButton.style.display = \"block\";\n\n  favoriteButton.onclick = () => {\n    window.ReactNativeWebView.postMessage('" +
    require('./832').Message.click +
    ": favoriteButton');\n  }\n\n  void(0);\n",
  removeTradeLogout:
    "\n  tradeLogoutElement = document.getElementsByClassName('logout')[0]\n  if(tradeLogoutElement != undefined){\n    tradeLogoutElement.remove();\n  }\n\n  void(0);\n",
  removeLanguageBox:
    "\n  languageBoxElement = document.getElementById('languageBox')\n  if(languageBoxElement != undefined){\n    languageBoxElement.remove();\n  }\n\n  void(0);\n",
};
exports.TradeScript = module832;
