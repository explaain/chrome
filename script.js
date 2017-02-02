console.log('hello');

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('pageScript.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
// 
// var ss = document.createElement('script');
// // TODO: add "script.js" to web_accessible_resources in manifest.json
// ss.src = chrome.extension.getURL('jquery.min.js');
// ss.onload = function() {
//     this.remove();
// };
// (document.head || document.documentElement).appendChild(ss);


// // inject jQuery
// chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
//    // inject remote script with jQuery
//    chrome.tabs.executeScript(null, { code: '$.getScript("pageScript.js", function(){ })' });
// });
