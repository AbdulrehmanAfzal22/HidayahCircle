const SUPABASE_URL = 'https://hrfiruloaemetionjlfk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyZmlydWxvYWVtZXRpb25qbGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NjA5ODksImV4cCI6MjA3NzIzNjk4OX0.JPg_MimSFTUvR_EduNrG_WCCXmzMn2shw1dsk2S-vxA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


const form = document.getElementById('form');
const popup = document.getElementById('success-popup');
const successClose = document.getElementById('success-close');
let donate = document.getElementById("button-donate");
const loadingSpinner = document.getElementById('loading-spinner');


donate.addEventListener("click", function() {
  window.location.href = "donate.html";
});


let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const infoBox = document.querySelector('.info'); // Get the info box

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(n) {
  if (n >= totalSlides) {
    index = 0;
  } else if (n < 0) {
    index = totalSlides - 1;
  }

  // 1. Move the slider
  document.querySelector('.slider').style.transform = `translateX(${-index * 100}%)`;

  // 2. Update the info box content
  const currentSlide = slides[index];
  const descriptionHtml = currentSlide.querySelector('.description').innerHTML;
  infoBox.innerHTML = descriptionHtml;
}

prevButton.addEventListener('click', () => {
  index--;
  showSlide(index);
});

nextButton.addEventListener('click', () => {
  index++;
  showSlide(index);
});

// Show the first slide and its info on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(index);
});


// setInterval(() => {
//   index++;
//   showSlide(index);
// }, 5000); 



if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('input[name], textarea[name]');
    const submission = {};
    inputs.forEach((el) => {
      submission[el.name] = el.value.trim();
    });

    if (!submission.fullname || !submission.email) {
      console.warn('Missing required fields:', submission);
      return;
    }
    
    loadingSpinner.style.display = 'flex'; 

    console.log('Attempting to insert:', submission);

    const { data, error } = await client.from('entries').insert([submission]);
    
    loadingSpinner.style.display = 'none'; 

    if (error) {
      console.error('Failed to send message:', error.message);
      return;
    }

    console.log('Message successfully saved:', data);
    form.reset();


    popup.style.display = 'flex';


    successClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });


    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });

    
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  });
}


async function fetchMessages(limit = 50) {
  const { data, error } = await client
    .from('entries')
    .select('id, fullname, email, message, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Fetch error:', error);
    return [];
  }

  console.log('Fetched messages:', data);
  return data;
}



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


const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});