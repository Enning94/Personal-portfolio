// const { arch } = require("os");

const hamburger = document.querySelector('#Hamburger');
const naviHeader = document.getElementById('nav-link');
const logImage = document.getElementById('log-image');
const cancel = document.getElementById('close');
const mainhead = document.getElementById('mheader');
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
hamburger.addEventListener('click', () => {
  naviHeader.classList.toggle('open');
  logImage.classList.toggle('close');
  cancel.classList.toggle('show');
  mainhead.classList.toggle('wrap');
});

home.addEventListener('click', () => {
  naviHeader.classList.remove('open');
  logImage.classList.remove('close');
  cancel.classList.remove('show');
  mainhead.classList.remove('wrap');
});
about.addEventListener('click', () => {
  naviHeader.classList.remove('open');
  logImage.classList.remove('close');
  cancel.classList.remove('show');
  mainhead.classList.remove('wrap');
});
contact.addEventListener('click', () => {
  naviHeader.classList.remove('open');
  logImage.classList.remove('close');
  cancel.classList.remove('show');
  mainhead.classList.remove('wrap');
});

// const popup= document.getElementById('popup');
// const popupWindow= document.getElementById('Popup');
// const shut= document.getElementById('shut');

// popup.addEventListener ('click', () => {
//     popupWindow.classList.toggle('show');
// });
// shut.addEventListener ('click', () => {
//     modal_container.classList.remove('show');
// });


// let card = `<li class="card">
// <div class="card-summary">
//   <h3 class="title">Profesional Art Printing Data</h3>
//   <p class="supporting-text3">
//     A daily selection of privately personalized reads; no accounts
//     or sign-ups required. has been the industry's standard
//   </p>
//   <ul class="tags">
//     <li>html</li>
//     <li>bootstrap</li>
//     <li>ruby</li>
//   </ul>
// </div>
// <button class="butt1" id="popup">See Project</button>
// </li>`
//  let ul= document.querySelector('.tags')

// let test = document.querySelector(".works-section");

// test.innerHTML = card;
