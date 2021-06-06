var module832 = require('./832'),
  t = {
    initilizeChatHub: '\n  const pearlAppChat = $.connection.chatHub;\n  void(0);\n',
    sendGuildMessage: "\n  SendMessage('$message');\n  void(0);\n",
    overrideGuildChatButton:
      "\n  document.getElementById('guild_chat').onclick = function() {\n    window.ReactNativeWebView.postMessage('" +
      module832.Message.click +
      ": guildChat')\n  }\n  void(0);\n",
    overrideGuildMemberButton:
      "\n  const element = document.getElementById('guild_member')\n  if(element != null){\n    element.onclick = function() {\n      window.ReactNativeWebView.postMessage(document.getElementsByClassName('app_chat')[0].scrollHeight);\n      window.ReactNativeWebView.postMessage('" +
      module832.Message.click +
      ": guildMember')\n    }\n  }\n  void(0);\n",
    initilizeChatDistance: "\n  body = document.querySelector('body');\n  const distance = body.scrollHeight - document.scrollingElement.scrollTop\n  void(0);\n",
    checkMessagePushUp:
      '\n  nowDistance = body.scrollHeight - document.scrollingElement.scrollTop\n  window.ReactNativeWebView.postMessage(Math.floor(distance) + " " + nowDistance);\n  if(Math.floor(distance) == Math.ceil(nowDistance) || Math.floor(distance) == Math.floor(nowDistance)){\n    setTimeout(() => {\n      window.ReactNativeWebView.postMessage(\'' +
      module832.Message.click +
      ": raiseUpMessage');\n    }, waitTime)\n  }\n  void(0);\n",
  };

exports.GuildScript = t;
