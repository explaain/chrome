
var s = document.createElement('script');
if (window.location.protocol == 'https:') {
  s.src = 'https://explaain-use.herokuapp.com/explaain.js';
} else {
  s.src = 'http://use.explaain.com/explaain.js';
}
(document.body || document.documentElement).appendChild(s);
