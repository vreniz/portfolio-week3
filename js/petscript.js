/* ============================================================
   petscript.js — Interactivity for mascotas.html
   Vanessa Fontalvo · Personal Portfolio

   This file demonstrates three ways JavaScript can modify page
   content and react to user actions:

     1. WELCOME TOAST   — displays a greeting message on load
     2. SHOW / HIDE     — a button reveals or hides a fun fact panel
     3. LIKE BUTTONS    — buttons respond with a dynamic visual effect


/* ============================================================
   FEATURE 1 — WELCOME TOAST
   What it does: when the page finishes loading, a green pill
   slides up from the bottom with a greeting message, then
   disappears automatically after 3.5 seconds.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Select the toast element by its id
  var toast = document.getElementById('welcome-toast');

  // If the element doesn't exist on the page, exit without errors
  if (!toast) return;

  // Show the toast 700ms after the page loads.
  // classList.add applies the 'toast-visible' class, which CSS uses
  // to trigger the slide-up animation (defined in petstyles.css).
  setTimeout(function () {
    toast.classList.add('toast-visible');
  }, 700);

  // Hide the toast 3.5 seconds after it appeared.
  // classList.remove undoes the class, reversing the animation.
  setTimeout(function () {
    toast.classList.remove('toast-visible');
  }, 4200);

});


/* ============================================================
   FEATURE 2 — SHOW / HIDE CONTENT
   What it does: the "Did you know?" button opens and closes a
   panel with a fun fact. Each time it opens, the fact rotates
   to the next one. The button text also updates to match the
   current state.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var btn   = document.getElementById('btn-toggle-fact');
  var panel = document.getElementById('fact-panel');
  var text  = document.getElementById('fact-text');

  // If any of the three elements is missing, exit cleanly
  if (!btn || !panel || !text) return;

  // Array of fun facts — JS cycles through them each time the panel opens
  var facts = [
    '🐾 The bond between humans and pets goes back over 15,000 years — dogs were the first domesticated animal.',
    '🐱 Cats purr at a frequency of 25-150 Hz, which can actually help heal bones and tissue.',
    '🥭 Golden Retrievers have incredibly gentle mouths — they can carry a raw egg without breaking it.',
    '🐇 Rabbits communicate through body language: when they leap and twist in the air, they are expressing pure joy.'
  ];

  // Track which fact to show next. Starts at -1 so the first click shows index 0.
  var factIndex = -1;

  // Listen for clicks on the button
  btn.addEventListener('click', function () {

    // toggle() returns true if the class was ADDED, false if REMOVED
    var isOpen = panel.classList.toggle('panel-open');
    btn.classList.toggle('is-open', isOpen);

    // Update aria-expanded so screen readers reflect the state
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (isOpen) {
      // Advance to the next fact.
      // The % (modulo) operator wraps the index back to 0 at the end of the array.
      factIndex = (factIndex + 1) % facts.length;

      // Replace the paragraph text inside the panel
      text.textContent = facts[factIndex];

      // Update the button label to signal it can now be closed
      btn.querySelector('.btn-text').textContent = 'Hide';

    } else {
      // Restore the original button label when closing
      btn.querySelector('.btn-text').textContent = 'Did you know?';
    }

  });

});


/* ============================================================
   FEATURE 3 — LIKE BUTTONS (dynamic effect)
   What it does: each pet card has a "Like" button. Clicking it
   changes the icon to a red heart, updates the label to "Liked!",
   and applies a colour change with a bounce animation. A second
   click removes the like and resets everything to its original state.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Select ALL like buttons on the page
  var likeButtons = document.querySelectorAll('.pet-like-btn');

  // Iterate over each button with forEach
  likeButtons.forEach(function (btn) {

    // Each button has its own independent state
    var liked = false;

    btn.addEventListener('click', function (e) {

      // Prevent the click from "bubbling up" to the parent article
      e.stopPropagation();

      // Flip the state: true becomes false, false becomes true
      liked = !liked;

      // Select the sub-elements inside the button
      var heart = btn.querySelector('.like-heart');
      var label = btn.querySelector('.like-label');

      if (liked) {
        // Liked state
        heart.textContent = '\u2764\uFE0F';
        label.textContent = 'Liked!';

        // Add the class that activates the colour and CSS animation
        btn.classList.add('liked');

        // To replay a CSS animation we must remove it and re-add it:
        heart.style.animation = 'none';   // 1. remove the animation
        void heart.offsetWidth;           // 2. force the browser to notice (reflow)
        heart.style.animation = '';       // 3. restore it so it plays again

      } else {
        // Unliked state
        heart.textContent = '\uD83E\uDD0D';
        label.textContent = 'Like';
        btn.classList.remove('liked');
      }

    });

  });

});


/* ============================================================
   HAMBURGER MENU
   Controls opening and closing the mobile navigation menu.

   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var hamburgerBtn = document.getElementById('hamburger');
  var mainNav      = document.getElementById('main-nav');

  if (!hamburgerBtn || !mainNav) return;

  // Toggle the menu open / closed on button click
  hamburgerBtn.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('nav-open');
    hamburgerBtn.classList.toggle('is-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Auto-close the menu when any nav link is tapped
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('nav-open');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

});
