import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
  container: `.slider`,
  autoplay: false,
  autoplayButton: false,
  // speed: 100,
  autoplayTimeout: 4000,
  autoplayButtonOutput: false,
  autoplayResetOnVisibility: false,
  navPosition: 'bottom',
  mouseDrag: true,
  responsive: {
    "350": {
      "items": 1
    }
  },
});

// var slider = tns({
//   container: `.about-slider`,
//   navPosition: 'bottom',
//   mouseDrag: true,
//   responsive: {
//     "350": {
//       "items": 1
//     }
//   },
// });
// var slider = tns({
//   container: `.slider`,
//   navPosition: 'bottom',
//   mouseDrag: true,
//   responsive: {
//     "350": {
//       "items": 1
//     }
//   },
// });

// var slider = tns({
//   container: `.slider--original`,
//   navPosition: 'bottom',
//   mouseDrag: true,
//   responsive: {
//     "350": {
//       "items": 2
//     },
//     "500": {
//       "items": 2
//     }
//   },
// });
// var slider = tns({
//   container: `.slider--base`,
//   navPosition: 'bottom',
//   mouseDrag: true,
//   responsive: {
//     "350": {
//       "items": 2
//     },
//     "500": {
//       "items": 2
//     }
//   },
// });

let state = false;

const toggle = () => {
  state = !state;

  if(state) {
    document.body.classList.add('show-main-nav');
  } else {
    document.body.classList.remove('show-main-nav');
    removeActive();
  }
};

const links = document.querySelectorAll(`.main-nav__link--title`);
const btn = document.querySelector(`.main-nav__btn`);

btn.addEventListener('click', toggle)
// links.forEach((link) => {
//   link.addEventListener('click', (evt) => {
//     toggle();
//   })
// });

const banner = document.querySelector(`.main-banner`);
// let runned = false;
// const d = new Date();
// if(d.getDate() == 8 && d.getHours() == 11 && d.getMinutes() == 11 && !runned){
//   banner.classList.add(`hidden`)  
//   console.log(d)
//     runned = true;
// }

// var now = new Date();
// var date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 22, 0, 0) - now;
// if (date < 0) {
//   date += 86400000; // it after 10am, try 10am tomorrow.
// }
// setTimeout(function(){ banner.classList.add(`hidden`) }, date);

// const hidden = () => {
//   console.log(`test`)
//   banner.classList.add(`hidden`)
// }

// const timer = (block, dateHidden, func) => {
//   const currentDate = new Date();
//   const interval = dateHidden - currentDate;
//   console.log(interval)
//   setTimeout(func, interval)
// }

// timer(banner, new Date(2019, 11, 1, 16, 4), hidden)

const removeActive = () => {
  if(document.querySelector(`.main-nav__wrapper-lvl2.active`)) {
    const nav = document.querySelector(`.main-nav__wrapper-lvl2.active`);
    nav.classList.remove(`active`)
  }
}

const menu = document.querySelector(`.main-nav__list`);

menu.addEventListener(`click`, (evt) => {
  if(evt.target.nextElementSibling && evt.target.hasAttribute(`href`)) {
    evt.preventDefault();
    const wrapper = evt.target.nextElementSibling;
    wrapper.classList.add(`active`);
    const back = wrapper.querySelector(`.main-nav__back`);
    back.addEventListener(`click`, removeActive);
  }
})
