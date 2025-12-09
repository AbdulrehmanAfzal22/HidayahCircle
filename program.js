
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

donate.addEventListener("click", function() {
  window.location.href = "donate.html";
});

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / 200;
    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});




const nextEvent = new Date("Dec 25, 2025 09:00:00").getTime();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = nextEvent - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);

  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
}
setInterval(updateCountdown, 1000);

