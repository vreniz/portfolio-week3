/* ============================================================
   petscript.js — Interactivity for mascotas.html

     1. WELCOME TOAST   — displays a greeting message on load
     2. SHOW / HIDE     — a button reveals or hides a fun fact panel
     3. LIKE BUTTONS    — buttons respond with a dynamic visual effect
   ============================================================ */


document.addEventListener('DOMContentLoaded', function () {

  // const: this reference never changes after being assigned
  const toast = document.getElementById('welcome-toast');

  if (!toast) return;

  setTimeout(function () {
    toast.classList.add('toast-visible');
  }, 700);

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

  // const: DOM references that are never reassigned
  const btn   = document.getElementById('btn-toggle-fact');
  const panel = document.getElementById('fact-panel');
  const text  = document.getElementById('fact-text');

  if (!btn || !panel || !text) return;

  // const: the array itself is never reassigned (its contents don't change either)
  const facts = [
    '🐾 The bond between humans and pets goes back over 15,000 years — dogs were the first domesticated animal.',
    '🐱 Cats purr at a frequency of 25-150 Hz, which can actually help heal bones and tissue.',
    '🥭 Golden Retrievers have incredibly gentle mouths — they can carry a raw egg without breaking it.',
    '🐇 Rabbits communicate through body language: when they leap and twist in the air, they are expressing pure joy.'
  ];

  // let: this value changes with every click
  let factIndex = -1;

  btn.addEventListener('click', function () {

    // let: isOpen changes every time the panel is toggled
    const isOpen = panel.classList.toggle('panel-open');
    btn.classList.toggle('is-open', isOpen);

    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (isOpen) {
      factIndex = (factIndex + 1) % facts.length;
      text.textContent = facts[factIndex];
      btn.querySelector('.btn-text').textContent = 'Hide';
    } else {
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

  // const: the NodeList reference never changes
  const likeButtons = document.querySelectorAll('.pet-like-btn');

  likeButtons.forEach(function (btn) {

    // let: this value flips between true and false on each click
    let liked = false;

    btn.addEventListener('click', function (e) {

      e.stopPropagation();

      liked = !liked;

      // const: these references are assigned once per click and never change
      const heart = btn.querySelector('.like-heart');
      const label = btn.querySelector('.like-label');

      if (liked) {
        heart.textContent = '\u2764\uFE0F';
        label.textContent = 'Liked!';

        btn.classList.add('liked');

        heart.style.animation = 'none';
        void heart.offsetWidth;
        heart.style.animation = '';

      } else {
        heart.textContent = '\uD83E\uDD0D';
        label.textContent = 'Like';
        btn.classList.remove('liked');
      }

    });

  });

});


