
let donate = document.getElementById("button-donate")
const slides = document.querySelectorAll('.slide');
let donate2 = document.getElementById("button-donate2")
let join = document.getElementById("join")


donate.addEventListener("click", function() {
  window.location.href = "donate.html";
});

donate2.addEventListener("click", function() {
  window.location.href = "donate.html";
});



join.addEventListener("click", function() {
  window.location.href = "contact.html";
});



const navOverlay = document.getElementById("navOverlay");
const hamburger = document.getElementById("hamburger");


let donate3 = document.getElementById("donate")

donate3.addEventListener("click", function() {
  window.location.href = "donate.html";
});

hamburger.addEventListener("click", function(event) {
  event.stopPropagation();
  navOverlay.classList.toggle("active");
  hamburger.classList.toggle("active");
});


document.documentElement.addEventListener("click", function () {
  navOverlay.classList.remove("active");
  hamburger.classList.remove("active");
});


navOverlay.addEventListener("click", function(event) {
  event.stopPropagation();
});

closeOverlay.addEventListener("click", () => {
  navOverlay.classList.remove("active");
  hamburger.classList.remove("active");
});

document.documentElement.addEventListener("click", () => {
  navOverlay.classList.remove("active");
  hamburger.classList.remove("active");
});


let currentSlide = 0;



function changeSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 10000); 


const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a, .nav-overlay a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});