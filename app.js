import people from './utils/data.js';
import getPeople from './utils/getPeople.js';
import { moveSlidesPrevious, moveSlidesNext } from './utils/moveSlides.js';

const container = document.querySelector('.slide-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

container.innerHTML = getPeople(people);

prevBtn.addEventListener('click', () => {
  moveSlidesPrevious(container);
});

nextBtn.addEventListener('click', moveSlidesNext);
