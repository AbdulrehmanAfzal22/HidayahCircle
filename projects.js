document.addEventListener("DOMContentLoaded", () => {

  let donate = document.getElementById("button-donate");
  donate.addEventListener("click", function() {
    window.location.href = "donate.html";
  });

  const navOverlay = document.getElementById("navOverlay");
  const hamburger = document.getElementById("hamburger");
  const closeOverlay = document.getElementById("closeOverlay");

  let donate3 = document.getElementById("donate");
  donate3.addEventListener("click", function() {
    window.location.href = "donate.html";
  });

  hamburger.addEventListener("click", function(event) {
    event.stopPropagation();
    navOverlay.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.documentElement.addEventListener("click", function() {
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

  // 🔥 Highlight current nav link
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

});
