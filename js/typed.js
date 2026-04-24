// typed.js

const typedTarget = document.getElementById('typed-about');
let typedStarted = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !typedStarted) {
            typedStarted = true;
            new Typed('#typed-about', {
                strings: [`<span class="t-blue">Welcome </span>\n\nI am a <span class="t-blue">frontend web developer</span> passionate about the intersection of <span class="t-pink">design and technology</span>.\n\nI specialize in creating <span class="t-yellow">accessible, fast and visually memorable</span> interfaces using <span class="t-orange">HTML5, CSS and JavaScript</span>.\n\nI recently graduated as a <span class="t-green">systems &amp; computing engineer</span> and I love to dedicate my free time to <span class="t-lavender">creative projects</span>, my family and, of course, to my <span class="t-pink">adorable pets</span>.`],
                startDelay: 300,
                typeSpeed: 18,
                showCursor: true,
                cursorChar: '•',
                contentType: 'html',
                loop: false,
            });
        }
    });
}, { threshold: 0.25 });

observer.observe(typedTarget);