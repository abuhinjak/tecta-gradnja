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

// Trenutna godina u footeru
function ispisiTrenutnuGodinu() {
  var trenutnaGodina = new Date().getFullYear();
  var copyrightElement = document.getElementById("copyright");
  copyrightElement.textContent = "TECTA-gradnja © " + trenutnaGodina + ", Sva prava pridržana";
}

ispisiTrenutnuGodinu();

window.onload = function() {
  // Skrij loader kada se stranica potpuno učita
  document.getElementById('loader-wrapper').style.display = 'none';
};

const mainTitle = document.querySelector('.about-us-info-content-title');
const mainText = document.querySelector('.about-us-info-content-text');
const ourWorksTitle = document.querySelector('.main-section-title.our-works');
const aboutUsInfoImg = document.querySelector('.about-us-info-img');

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

observer.observe(mainTitle);
observer.observe(mainText);
observer.observe(ourWorksTitle);
observer.observe(aboutUsInfoImg);

// Our work gallery

fetch("works.json")
.then(response => response.json())
.then(works => {
	localStorage.setItem("works", JSON.stringify(works));
});

let container = document.querySelector(".our-works-wrap");
let loadMoreButton = document.querySelector("#main-section-button");
let parentElement = loadMoreButton.parentElement;

let initialItems = 8;
let loadItems = 8;

function loadInitialItems(){
	let works = JSON.parse(localStorage.getItem("works"));
	let out = "";
	let counter = 0;
	for(let work of works){
		if(counter < initialItems){
			out += `
        <a class="item" href="${work.image}" data-lightbox="image-1">
            <span class="item-hover-wrap">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
            </span>
            <img src="${work.image}" alt="Tecta-gradnja" loading="lazy">
        </a>
			`;
		}
		counter++;
	}

	let div = document.createElement("div");
  div.classList.add("our-works-gallery");
  parentElement.insertBefore(div, loadMoreButton);
  div.innerHTML = out;	
}

function loadData(){
	let works = JSON.parse(localStorage.getItem("works"));
	let currentDisplayedItems = document.querySelectorAll(".item").length;
	
	let out = "";
	let counter = 0;
	for(let work of works){
		if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems){
			out += `
        <a class="item" href="${work.image}" data-lightbox="image-1">
          <span class="item-hover-wrap">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
          </span>
          <img src="${work.image}" alt="Tecta-gradnja" loading="lazy">
        </a>
			`;
		}
		counter++;
	}

	let div = document.createElement("div");
  div.classList.add("our-works-gallery");
	container.insertBefore(div, loadMoreButton);
	div.innerHTML = out;	
	div.style.opacity = 0;

	if(document.querySelectorAll(".item").length == works.length){
		loadMoreButton.style.display = "none";
	}

	fadeIn(div);
}

function fadeIn(div){
	let opacity = 0;
	let interval = setInterval(function(){
		if (opacity <= 1) {
			opacity = opacity + 0.1;
			div.style.opacity = opacity;
		}else{
			clearInterval(interval);
		} 
	}, 30);
}