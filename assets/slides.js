const slides = document.getElementsByClassName('slide');
const interval = 5 * 1000;
const animation = 2 * 1000;
const size = slides.length;

function next(position) {
  if (position === size) {
    position = 0;
  }

  const current = slides[position];

  if (position === 0) {
    current.style.zIndex = (size + 1).toString();
  }

  current.style.webkitTransform = "translate3D(-100%, 0, 0)";
  current.style.transform = "translate3D(-100%, 0, 0)";

  setTimeout(function () {
    setTimeout(function () {
      current.style.webkitTransform = "translate3D(0%, 0, 0)";
      current.style.transform = "translate3D(0%, 0, 0)";
    }, animation);

    if (position === 0) {
      current.style.zIndex = "0";
    }

    next(position + 1);
  }, interval);
}

function resetDepth() {
  for (let i = 0; i < size; i++) {
    slides[i].style.zIndex = "0";
  }
}

next(0);