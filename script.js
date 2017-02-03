console.log('Extension Running')
var s = document.createElement('script');
s.src = chrome.extension.getURL('pageScript.js');
(document.body || document.documentElement).appendChild(s);
