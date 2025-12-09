document.addEventListener('DOMContentLoaded', () => {
 


const navOverlay = document.getElementById("navOverlay");
const hamburger = document.getElementById("hamburger");




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

  const footer = document.querySelector(".footer");
  window.addEventListener("scroll", () => {
    const footerPos = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (footerPos < windowHeight - 100) {
      footer.classList.add("visible");
    }
  });
});