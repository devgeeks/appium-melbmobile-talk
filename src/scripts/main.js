bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: 'li, .bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true
});

/*
(function() {
  var el = document.createElement('div'),
      docEl = document.documentElement;

  el.innerText = 'Go to fullscreen view';
  el.setAttribute('style', 'position: fixed; top: 10%; left: 10%; padding: 30%; background: #000; color: #fff; opacity: .7; cursor: pointer;')
  document.body.appendChild(el)

  el.onclick = function() {
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    }
    document.body.removeChild(el);
  };
})();
*/
