
let donate = document.getElementById("button-donate");
let donate3 = document.getElementById("donate");

const words = ["Iman", "Tawhid", "Salah", "Barakah", "Youth", "Hikmah", "Taqwa", "Jannah", "Shukr", "Sabr"];
let index = 0;
let textElement = document.getElementById("changingText");
let currentLetter = 0;

// Function to display word letter by letter
function displayWord() {
    // Set opacity to make the text visible
    textElement.style.opacity = 1;
    textElement.textContent = ''; // Clear the text content at the start
    currentLetter = 0; // Reset the current letter index for the new word

    let word = words[index]; // Get the word from the array
    let letterInterval = setInterval(() => {
        textElement.textContent += word[currentLetter]; // Add one letter at a time
        currentLetter++;

        // If we have added all letters of the word, stop the interval
        if (currentLetter === word.length) {
            clearInterval(letterInterval);
            // After the word is displayed, fade out
            setTimeout(() => {
                textElement.style.opacity = 0; // Fade out after 1 second
            }, 1000);  
        }
    }, 150); // Speed of letter appearance (150ms between each letter)
}

// Cycle through words every 3 seconds, including fade out
setInterval(() => {
    index = (index + 1) % words.length; // Move to the next word (loop back to start)
    displayWord(); // Display the next word
}, 3500);  // Change word every 3.5 seconds (including fade-out time)

// Event listener for donate buttons
donate3.addEventListener("click", function() {
    window.location.href = "donate.html"; // Redirect to the donate page
});

donate.addEventListener("click", function() {
    window.location.href = "donate.html"; // Redirect to the donate page
});

// Hamburger menu toggle functionality
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

const closeOverlay = document.getElementById("closeOverlay");
closeOverlay.addEventListener("click", () => {
    navOverlay.classList.remove("active");
    hamburger.classList.remove("active");
});

// Set active link based on current page
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
