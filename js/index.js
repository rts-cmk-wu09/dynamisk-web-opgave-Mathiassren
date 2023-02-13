let header = document.querySelector(".hero");
header.innerHTML = `
<div class="user"><img src="/assets/expand_less.png" alt="arrow-down"><img src="/assets/CL_Type-User.png" alt="user"></div>
  <div class="herobox">
    <h1 class="herobox__headline">${hero.headline}</h1>
    <p class="herobox__copy">${hero.copy}</p>
    <button>Explore</button>
  </div>
`;

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
