export const moveSlidesNext = () => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;

  if (!next) {
    const nextSlider = [...document.querySelectorAll('.next')];
    next = nextSlider[0];
  }
  active.classList.remove('active');
  next.classList.remove('next');
  last.classList.remove('last');

  active.classList.add('last');
  next.classList.add('active');
  last.classList.add('next');
};

export const moveSlidesPrevious = (container) => {
  const active = document.querySelector('.active');
  let last;
  let newLast;
  if (active.previousElementSibling) {
    last = active.previousElementSibling;
  } else {
    last = container.lastElementChild;
  }
  if (last.previousElementSibling) {
    newLast = last.previousElementSibling;
  } else {
    newLast = container.lastElementChild;
  }
  active.classList.remove('active');
  last.classList.remove('last');
  newLast.classList.remove('next');
  last.classList.add('active');
  active.classList.add('next');
  newLast.classList.add('last');
  console.log(window);
};
