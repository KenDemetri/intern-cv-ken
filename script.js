// FEATURE 1: Welcome Message (only once)
if (!sessionStorage.getItem("visited")) {
  alert("Welcome to my personal webpage!");
  sessionStorage.setItem("visited", "true");
}

// FEATURE 2: Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// FEATURE 3: Show / Hide About Section
const aboutBtn = document.getElementById("aboutBtn");
const aboutSection = document.getElementById("about");

aboutBtn.addEventListener("click", () => {
  const isHidden = aboutSection.style.display === "none";
  aboutSection.style.display = isHidden ? "block" : "none";
  aboutBtn.textContent = isHidden ? "Hide About Me" : "Show About Me";
});

// FEATURE 4: Click Counter
let clicks = 0;
const counterBtn = document.getElementById("counterBtn");
const countSpan = document.getElementById("count");

counterBtn.addEventListener("click", () => {
  clicks++;
  countSpan.textContent = clicks;
});

// FEATURE 5: Basic Form Validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    message.textContent = "❌ Please fill in all required fields.";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
    form.reset();
  }
});
