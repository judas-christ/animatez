document.querySelector('.item').onclick = function(e) {
  animatez.addClass('hides--hidden', e.target);
};
document.querySelectorAll('.item')[1].onclick = function(e) {
  animatez.toggleClass('hides--hidden', e.target);
};
document.querySelectorAll('.item')[2].onclick = function(e) {
  animatez.removeClass('hides--hidden', e.target);
};

document.body.addEventListener('click', function(e) {
  var target = e.target.classList.contains('wrap__content') ? e.target : e.path.filter(function(el) {
    return el.classList && el.classList.contains('wrap__content');
  })[0];

  if (!target) return;

  var next = target.nextSibling || target.parentNode.firstElementChild;
  animatez.addClass('wrap__content--hidden', target);
  animatez.removeClass('wrap__content--hidden', next);
}, false);
