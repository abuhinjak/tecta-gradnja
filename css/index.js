// Select the element to observe
const mainTitle = document.querySelector('.main-section-title');
const mainSubtitle = document.querySelector('.main-section-subtitle');
const mainButton = document.getElementById('main-section-button');

const mainTitle2 = document.querySelector('.main-section-title2');
const mainSubtitle2 = document.querySelector('.main-section-subtitle2');
const mainButton2 = document.getElementById('main-section-button2');

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When the element is in view, show it
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateX(0)';
      
      // Unobserve the target element to ensure it's observed only once
      observer.unobserve(entry.target);
    }
  });
}, { once: true }); // Use the 'once' option

// Start observing the element
observer.observe(mainTitle);
observer.observe(mainSubtitle);
observer.observe(mainButton);
observer.observe(mainTitle2);
observer.observe(mainSubtitle2);
observer.observe(mainButton2);


// Parralax
var image = document.getElementsByClassName('parralax-img');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,0.1)'
});

// Swiper Main section
const swiperMain = new Swiper('.swiper-main', {
  // Optional parameters
  direction: 'horizontal',
  observer: true,
  observeParents: true,
  loop: true,
  slidesPerView: 1,
  slidesPerSlide: 1,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Swiper Radovi
const swiperRadovi = new Swiper('.swiper-radovi', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  slidesPerSlide: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

// Swiper recenzije
const swiperRecenzije = new Swiper(".swiper-recenzije", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Trenutna godina u footeru
function ispisiTrenutnuGodinu() {
  var trenutnaGodina = new Date().getFullYear();
  var copyrightElement = document.getElementById("copyright");
  copyrightElement.textContent = "TECTA-gradnja © " + trenutnaGodina + "., Sva prava pridržana";
}

ispisiTrenutnuGodinu();

window.onload = function() {
  // Skrij loader kada se stranica potpuno učita
  document.getElementById('loader-wrapper').style.display = 'none';
};


const hambMenu = document.querySelector('.hamb-menu');
const menu = document.querySelector('.nav-list');

hambMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
    hambMenu.classList.toggle('open');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hambMenu.contains(e.target)) {
        menu.classList.remove('show-menu');
    }
});

