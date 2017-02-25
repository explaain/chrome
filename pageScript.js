
var s = document.createElement('script');
if (window.location.protocol == 'https:') {
  s.src = 'https://explaain-use-dev.herokuapp.com/explaain.js';
} else {
  s.src = 'http://localhost:5001/explaain.js';
}
(document.body || document.documentElement).appendChild(s);
