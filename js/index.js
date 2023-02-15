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
${facilities.options
  .map(function (option) {
    return `
    <div class="facilities__option">
      <img class="facilities__icon" src="${option.icon}" alt="Option icon">
      <h2 class="facilities__option-headline">${option.headline}</h2>
      <p class="facilities__option-text">${option.text}</p>
      <a class="facilities__a-text">${option.atag}</a>
    </div>
  `;
  })
  .join("")}
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
    ${sites.places
      .map(function (place) {
        return `
        <div class="places__place">
         <img class="places__img" src="${place.img}" alt="Place image">
          <h3 class="places__name">${place.name}</h3>
          <p class="places__city">${place.city}</p>
          <a class="view__site">${place.viewsite}</a>
        </div>
      `;
      })
      .join("")}
  </div>
`;

//Our Advantages
let ourAdvantages = document.querySelector(".advantages");
let advantagesHTML = `
  <div class="advantages__header">
    <h1 class="advantages__headline" style="display: none;">${advantages.headerline}</h1>
  </div>
  ${advantages.advantages
    .map(function (advantage) {
      return `
        <div class="advantages__option">
          <img class="advantages__icon" src="${advantage.icon}" alt="advantages icon">
          <h2 class="advantages__option-headline">${advantage.headline}</h2>
          <p class="advantages__option-text">${advantage.text}</p>
        </div>
      `;
    })
    .join("")}
`;
ourAdvantages.innerHTML = advantagesHTML;

/*Footer*/
  // Select the footer element from the DOM
  const footer = document.querySelector('.footer');
  
  // Add the headliner to the footer
  const headlinerSection = document.createElement('div');
  headlinerSection.classList.add('headliner');

  const headlinerHeadline = document.createElement('h2');
  headlinerHeadline.textContent = footers.headliner[0].footerheadline;
  
  const headlinerText = document.createElement('p');
  headlinerText.textContent = footers.headliner[0].footertext;
  
  headlinerSection.appendChild(headlinerHeadline);
  headlinerSection.appendChild(headlinerText);
  
  footer.appendChild(headlinerSection);
  
  // Add the footerflex to the footer
  const footerFlexSection = document.createElement('div');
  footerFlexSection.classList.add('footerflex');
  
  footers.footerflex.forEach(flexItem => {
    const flexItemSection = document.createElement('div');
    flexItemSection.classList.add('footerflex__item');
    
    const flexItemHeadline = document.createElement('h3');
    flexItemHeadline.textContent = flexItem.headline;
    
    const flexItemLinks = document.createElement('ul');
    flexItemLinks.classList.add('footerflex__list');
    
    flexItem.linktext.forEach(linktext => {
      const linkItem = document.createElement('li');
      linkItem.textContent = linktext;
      flexItemLinks.appendChild(linkItem);
    });
    
    flexItemSection.appendChild(flexItemHeadline);
    flexItemSection.appendChild(flexItemLinks);
    footerFlexSection.appendChild(flexItemSection);
  });
  
  footer.appendChild(footerFlexSection);
  
  // Add the policy to the footer
  const policySection = document.createElement('div');
  policySection.classList.add('policy');
  
  const policyHeadline = document.createElement('h3');
  policyHeadline.textContent = footers.policy[0].headline;
  
  const policyLinks = document.createElement('ul');
  policyLinks.classList.add('policy__list');
  
  footers.policy[0].linktext.forEach(linktext => {
    const linkItem = document.createElement('li');
    linkItem.textContent = linktext;
    policyLinks.appendChild(linkItem);
  });
  
  policySection.appendChild(policyHeadline);
  policySection.appendChild(policyLinks);
  
  footer.appendChild(policySection);


const firstHeadliner = footers.headliner[0];

const sentences = firstHeadliner.footertext.split('. ');


const textWithBreaks = sentences.join('. <br>');

firstHeadliner.footertext = textWithBreaks;

console.log(firstHeadliner.footertext);
