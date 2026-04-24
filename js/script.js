/* ============================================================
   script.js — Portfolio interactivity
   week 3: JavaScript basics — DOM manipulation
   ============================================================ */

/* ----------------------------------------------------------
   1. Welcome message on page load
      Displays a greeting in the console and on screen
      using a dynamically created element.
   ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {

  // Show welcome message in a small toast at the top
  showWelcomeMessage();

  // Initialize contact form feedback button
  initContactFeedback();

  // Initialize skills toggle
  initSkillsToggle();

});

/* ----------------------------------------------------------
   FEATURE 1: Welcome toast
   Creates a DOM element and inserts it into the page.
   Fades out automatically after 3.5 seconds.
   ---------------------------------------------------------- */
function showWelcomeMessage() {
  // Create the toast element
  const toast = document.createElement("div");
  toast.id = "welcome-toast";
  toast.textContent = "👋 Welcome to Vanessa's portfolio!";

  // Apply inline styles for the toast
  Object.assign(toast.style, {
    position: "fixed",
    top: "64px",
    right: "24px",
    background: "rgba(124, 106, 247, 0.95)",
    color: "#fff",
    fontFamily: "monospace",
    fontSize: "0.85rem",
    padding: "10px 20px",
    borderRadius: "6px",
    zIndex: "9999",
    boxShadow: "0 4px 20px rgba(124,106,247,0.4)",
    transition: "opacity 0.5s ease",
    opacity: "1"
  });

  // Insert into the page
  document.body.appendChild(toast);

  // Fade out and remove after 3.5 seconds
  setTimeout(function () {
    toast.style.opacity = "0";
    setTimeout(function () {
      toast.remove();
    }, 500);
  }, 3500);
}

/* ----------------------------------------------------------
   FEATURE 2: Contact form feedback
   When the user submits the contact form, the button
   text changes to confirm the action (DOM manipulation).
   ---------------------------------------------------------- */
function initContactFeedback() {
  const form = document.querySelector(".contact-form");
  const btn = document.querySelector(".btn-submit");

  if (!form || !btn) return;

  // Listen for form submit event
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission

    // Change button text to confirm action
    btn.textContent = "✅ Message sent!";
    btn.style.background = "#50FA7B";
    btn.style.borderColor = "#50FA7B";
    btn.style.color = "#1e1e1e";

    // Reset button after 3 seconds
    setTimeout(function () {
      btn.textContent = "Send Message →";
      btn.style.background = "";
      btn.style.borderColor = "";
      btn.style.color = "";
    }, 3000);
  });
}

/* ----------------------------------------------------------
   FEATURE 3: Skills toggle
   Clicking the skills list heading shows/hides the list.
   Demonstrates show/hide content with JavaScript.
   ---------------------------------------------------------- */
function initSkillsToggle() {
  const skillsList = document.querySelector(".skills-list");
  const sectionTitle = document.querySelector(".section-about .section-title");

  if (!skillsList || !sectionTitle) return;

  // Add a toggle button after the section title
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "skills-toggle";
  toggleBtn.textContent = "// show skills";

  // Style the button
  Object.assign(toggleBtn.style, {
    background: "transparent",
    border: "1px solid #7C6AF7",
    color: "#7C6AF7",
    fontFamily: "monospace",
    fontSize: "0.75rem",
    padding: "4px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "1rem",
    display: "block",
    transition: "background 0.2s ease"
  });

  // Insert button before the skills list
  skillsList.parentNode.insertBefore(toggleBtn, skillsList);

  // Hide skills list initially
  skillsList.style.display = "none";
  let visible = false;

  // Toggle show/hide on click
  toggleBtn.addEventListener("click", function () {
    visible = !visible;

    if (visible) {
      // Show the list
      skillsList.style.display = "flex";
      toggleBtn.textContent = "// hide skills";
      toggleBtn.style.background = "rgba(124,106,247,0.12)";
    } else {
      // Hide the list
      skillsList.style.display = "none";
      toggleBtn.textContent = "// show skills";
      toggleBtn.style.background = "transparent";
    }
  });
}
