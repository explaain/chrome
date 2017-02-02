
console.log('hello1')



var ss = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
ss.src = 'http://use.explaain.com/explaain.js';
ss.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(ss);
