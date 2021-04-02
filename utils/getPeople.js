const getPeople = (people) => {
  return people
    .map((person, slideIndex) => {
      const { img, name, job, text } = person;
      let position = 'next';
      if (slideIndex === 0) {
        position = 'active';
      }
      if (slideIndex === people.length - 1) {
        position = 'last';
      }
      return `<article class="slide ${position}">
          <img
            src="${img}"
            class="img"
            alt="jane doe"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
          ${text}
          </p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
    })
    .join('');
};

export default getPeople;
