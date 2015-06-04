var animatez = (function(window, document) {

  var qs = document.querySelector;
  var qsa = document.querySelectorAll;

  function addClass(className, el, onEnd) {
    if (el.classList.contains(className)) return;
    el.classList.add('animatez', 'animatez+' + className);
    var handler = function() {
      el.removeEventListener('transitionend', handler, false);
      el.classList.remove('animatez', 'animatez+' + className);
      el.classList.add(className);
      if (typeof onEnd === 'function')
        onEnd();
    };
    el.addEventListener('transitionend', handler, false);
  }

  function removeClass(className, el, onnd) {
    if (!el.classList.contains(className)) return;
    el.classList.add('animatez', 'animatez-' + className);
    el.classList.remove(className);
    var handler = function() {
      el.removeEventListener('transitionend', handler, false);
      el.classList.remove('animatez', 'animatez-' + className);
      if (typeof onEnd === 'function')
        onEnd();
    };
    el.addEventListener('transitionend', handler, false);
  }

  function toggleClass(className, el, onEnd) {
    el.classList.contains(className) ? removeClass(className, el, onEnd) : addClass(className, el, onEnd);
  }

  return {
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass
  };
})(this, document);
