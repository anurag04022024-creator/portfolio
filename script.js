// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Fade-in Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        themeBtn.innerHTML='<i class="fas fa-moon"></i>';
    }

});
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.display = "none";

    },2000);

});
const words = [
    "Web Developer",
    "Python Programmer",
    "DSA Learner",
    "Problem Solver"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    const text = document.getElementById("typing-text");

    if (!text) return;

    currentWord = words[i];

    if (isDeleting) {
        text.innerHTML = currentWord.substring(0, j--);
    } else {
        text.innerHTML = currentWord.substring(0, j++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && j === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, speed);
}

type();
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: "#00bfff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: 3,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#00bfff",
      opacity: 0.4,
      width: 1
    },

    move: {
      enable: true,
      speed: 2
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },

      onclick: {
        enable: true,
        mode: "push"
      },

      resize: true
    },

    modes: {
      repulse: {
        distance: 120
      },

      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});