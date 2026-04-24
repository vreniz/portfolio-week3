// particles.js

(async () => {
    await tsParticles.load({
        id: "hero-particles",
        options: {
            fpsLimit: 120,
            fullScreen: { enable: true, zIndex: -1 },
            interactivity: {
                detectOn: "canvas",
                events: {
                    onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                    repulse: { distance: 120, duration: 0.4 },
                },
            },
            particles: {
                number: { value: 120, density: { enable: true, area: 800 } },
                color: { value: ["#7C6AF7", "#FF79C6", "#61DAFB", "#50FA7B", "#BD93F9", "#FF9AF5", "#FFB86C"] },
                shape: { type: "circle" },
                opacity: { value: 0.7, random: true },
                size: { value: { min: 1.5, max: 4 }, random: true },
                links: {
                    enable: true,
                    distance: 130,
                    color: "#BD93F9",
                    opacity: 0.25,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1.8,
                    direction: "none",
                    outModes: { default: "out" },
                },
            },
            detectRetina: true,
        },
    });
})();