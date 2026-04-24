   (function () {
      var btn = document.getElementById('hamburger');
      var nav = document.getElementById('main-nav');
      if (!btn || !nav) return;
      btn.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('nav-open');
        btn.classList.toggle('is-open', isOpen);
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      // Close nav when a link is tapped (smooth UX on mobile)
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('nav-open');
          btn.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    })();