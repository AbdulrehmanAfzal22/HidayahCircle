
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

const ayat = [
    "إِنَّ مَعَ الْعُسْرِ يُسْرًا  — Indeed, with hardship comes ease. (94:6)",
    "وَقُل رَّبِّ زِدْنِي عِلْمًا  — My Lord, increase me in knowledge. (20:114)",
    "The Prophet ﷺ said: “The best of you are those who learn the Qur’an and teach it.” (Bukhari)",
    "The Prophet ﷺ said: “Actions are judged by intentions.” (Bukhari)"
];

let index = 0;

function rotateAyah() {
    const ayahText = document.getElementById("ayah-text");
    ayahText.classList.remove("fade"); 
    void ayahText.offsetWidth; 
    ayahText.classList.add("fade");
    ayahText.innerText = ayat[index];
    index = (index + 1) % ayat.length;
}

rotateAyah();
setInterval(rotateAyah, 6000);