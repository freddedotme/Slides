const slides = document.getElementsByClassName('slide');
const interval = 30 * 1000;
const animation = 1000;
const size = slides.length;

let position = 0;

function next() {
  if (position === size) {
    position = 0;

    setTimeout(function () {
      resetDepth();
    }, interval);
  }

  const current = slides[position];

  current.style.webkitTransform = "translate3D(-100%, 0, 0)";
  current.style.transform = "translate3D(-100%, 0, 0)";

  setTimeout(function () {
    current.style.webkitTransform = "translate3D(0%, 0, 0)";
    current.style.transform = "translate3D(0%, 0, 0)";
  }, interval + animation);

  setTimeout(function () {
    let depth = position + 1;
    current.style.zIndex = depth.toString();
  }, interval + (animation * 3));

  position++;
}

function resetDepth() {
  for (let i = 0; i < size; i++) {
    slides[i].style.zIndex = "0";
  }
}

next();
setInterval(next, interval);