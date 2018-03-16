const SLIDES = document.getElementsByClassName('slide');
const SIZE = SLIDES.length;

const INTERVAL = 5 * 1000;
const ANIMATION = 2 * 1000; // TODO: get CSS transition instead.

if (SIZE > 0) {
  function animate(el) {
    translate3D(el, "-100%", 0, 0);

    setTimeout(function () {
      animate(el.nextElementSibling);

      setTimeout(function () {
        translate3D(el, 0, 0, 0);
        el.parentNode.appendChild(el);
      }, ANIMATION + 100);
    }, INTERVAL);
  }

  function translate3D(el, x, y, z) {
    el.style['-webkit-transform'] = "translate3D(" + x + ", " + y + ", " + z + ")";
    el.style['-moz-transform'] = "translate3D(" + x + ", " + y + ", " + z + ")";
    el.style['-ms-transform'] = "translate3D(" + x + ", " + y + ", " + z + ")";
    el.style['-o-transform'] = "translate3D(" + x + ", " + y + ", " + z + ")";
    el.style['transform'] = "translate3D(" + x + ", " + y + ", " + z + ")";
  }

  animate(SLIDES[0]);
} else {
  console.log('No slides found, Slides disabled.');
}


