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

const uslugeNaslov = document.querySelector('.usluge-naslov');
const kontaktOne = document.querySelector('.kontakt.one');
const kontaktTwo = document.querySelector('.kontakt.two');
const kontaktThree = document.querySelector('.kontakt.three');

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

observer.observe(uslugeNaslov);
observer.observe(kontaktOne);
observer.observe(kontaktTwo);
observer.observe(kontaktThree);

function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let btn = document.querySelector(".submit");
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || msg.value == "") {
        emptyerror();
      } else if (!(re.test(email.value.trim()))) {
        error();  
      } else {
        sendmail(name.value, email.value, msg.value);
        success();
        name.value = "";
        email.value = "";
        msg.value = "";
      }
    });
  }
  validate();

  (function () {
    emailjs.init("user_Ps3tErh1WTjyI5FSecJGW");
  })();
  
  function sendmail(name, email, msg) {
    emailjs.send("service_qxqxyxi", "template_njaj7of", {
      to_name: name,
      from_name: email,
      message: msg,
    });
  }
  
  function emptyerror() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Molimo popunite sva polja!",
    });
  }
  
  function error() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Molimo unesite valjanu email adresu!",
    });
  }
  
  function success() {
    Swal.fire({
      icon: "success",
      title: "Poslano!",
      text: "Poruka uspješno poslana!",
    });
  }

  (function () {
    emailjs.init("user_Ps3tErh1WTjyI5FSecJGW");
  })();

  document.cookie = "my_cookie=cookie_value; expires=Sat, 01 Jan 2023 00:00:00 UTC; path=/; domain=example.com; secure; samesite=None";

  document.cookie = "my_cookie=cookie_value; expires=Sat, 01 Jan 2023 00:00:00 UTC; path=/; domain=example.com; secure; samesite=Strict";

  document.cookie = "my_cookie=cookie_value; expires=Sat, 01 Jan 2023 00:00:00 UTC; path=/; domain=example.com; secure; samesite=Lax";
