/* -------------------------------------------
   1. GLOBAL INITIALIZATION
------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize Theme (LocalStorage Check)
    initTheme();

    // Only run Project render if on Home Page
    const projectContainer = document.getElementById('projectsContainer');
    if (projectContainer && typeof projectsData !== 'undefined') {
        renderProjects('all');
        initHomeAnimations();
    }

    // Only run About animations if on About Page
    const aboutSection = document.getElementById('about-page');
    if (aboutSection) {
        initAboutAnimations();
    }
});

/* -------------------------------------------
   2. RENDER LOGIC
------------------------------------------- */
function renderProjects(filter) {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = '';
    // projectsData comes from projects.js now
    const filteredData = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

    filteredData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // CLICK TO OPEN LINK
        card.addEventListener('click', () => {
            window.open(project.link, '_blank');
        });

        gsap.fromTo(card, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });

        card.innerHTML = `
            <div class="media-container" onmouseenter="this.querySelector('video').play()" onmouseleave="this.querySelector('video').pause()">
                <img src="${project.image}" alt="${project.title}">
                <video src="${project.video}" loop muted playsinline></video>
            </div>
            <div class="card-content">
                <span class="card-tags">${project.category}</span>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-desc">${project.desc}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filter Listeners
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

/* -------------------------------------------
   3. THEME TOGGLE (LocalStorage Fix)
------------------------------------------- */
function initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn ? themeBtn.querySelector('i') : null;

    // 1. Check LocalStorage on Load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) icon.classList.replace('ph-moon', 'ph-sun');
    }

    // 2. Toggle Click Event
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');

            // Save preference
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            // Update Icon
            if (isDark) {
                icon.classList.replace('ph-moon', 'ph-sun');
            } else {
                icon.classList.replace('ph-sun', 'ph-moon');
            }
        });
    }
}

/* -------------------------------------------
   4. HOME ANIMATIONS
------------------------------------------- */
function initHomeAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", { y: 100, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power4.out" });
    gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1, delay: 0.5, ease: "power4.out" });
    gsap.from(".img-circle", { scale: 0.5, opacity: 0, duration: 1.5, delay: 0.2, ease: "elastic.out(1, 0.5)" });

    gsap.to(".scroll-indicator", {
        scrollTrigger: { trigger: "header", start: "top top", end: "bottom center", scrub: true },
        opacity: 0, y: 50
    });
}

/* -------------------------------------------
   5. ABOUT PAGE ANIMATIONS
------------------------------------------- */
function initAboutAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" });
    gsap.from(".about-subtitle", { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: "power4.out" });

    gsap.from(".bento-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.4
    });
}