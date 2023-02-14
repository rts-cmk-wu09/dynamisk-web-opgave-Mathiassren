//Denne variabel henter det første element med klassen "hero" i DOM ved hjælp af querySelector.
let header = document.querySelector(".hero");
header.innerHTML = `
<div class="user"><img src="/assets/expand_less.png" alt="arrow-down"><img src="/assets/CL_Type-User.png" alt="user"></div>
  <div class="herobox">
    <h1 class="herobox__headline">${hero.headline}</h1>
    <p class="herobox__copy">${hero.copy}</p>
    <button>Explore</button>
  </div>
`;

/*Services data loop*/
const container = document.querySelector(".services");
for (const service of services) {
  const section = `
    <div class="service">
      <img src="${service.illustration}" alt="Service Illustration">
      <h2>${service.headline}</h2>
      <p>${service.text}</p>
      <a href="#">${service.linktext}</a>
    </div>
  `;
  container.innerHTML += section;
}

/*Facilities*/
let facilitiesContainer = document.querySelector(".facilities");

facilitiesContainer.innerHTML = `
<h1 class="facilities__headline">${facilities.headline}</h1>
${facilities.options.map(function(option) {
  return `
    <div class="facilities__option">
      <img class="facilities__icon" src="${option.icon}" alt="Option icon">
      <h2 class="facilities__option-headline">${option.headline}</h2>
      <p class="facilities__option-text">${option.text}</p>
      <a class="facilities__a-text">${option.atag}</a>
    </div>
  `;
}).join('')}
`;

//Sites
let sitesContainer = document.querySelector(".sites");

sitesContainer.innerHTML = `
  <div class=sites__text-container>
  <h1 class="sites__headline">${sites.headline}</h1>
  <p class="sites__text">${sites.text}</p>
  <button class="sites__btn">
    <img class="sites__btn-icon" src="${sites.btnicon}" alt="Button icon">Start
  </button>
  </div>
  <div class="places">
    ${sites.places.map(function(place) {
      return `
        <div class="places__place">
         <img class="places__img" src="${place.img}" alt="Place image">
          <h3 class="places__name">${place.name}</h3>
          <p class="places__city">${place.city}</p>
          <a class="view__site">${place.viewsite}</a>
        </div>
      `;
    }).join('')}
  </div>
`;







