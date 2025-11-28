document.addEventListener("DOMContentLoaded", () => {
    // 1. Init Smooth Scroll
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 2. Init Theme (Check LocalStorage)
    initTheme();

    // 3. Render Projects (With Safety Check)
    const projectContainer = document.getElementById('projectsContainer');
    if (projectContainer) {
        if (typeof projectsData !== 'undefined') {
            renderProjects('all');
            initHomeAnimations();
        } else {
            console.error("projectsData is missing! Check if projects.js is linked correctly.");
            projectContainer.innerHTML = "<p style='text-align:center; padding: 2rem;'>Error loading projects. Check console.</p>";
        }
    }

    // 4. About Page Animations
    const aboutSection = document.getElementById('about-page');
    if (aboutSection) {
        initAboutAnimations();
    }
});

/* --- RENDER PROJECTS FUNCTION --- */
function renderProjects(filter) {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = '';

    // Safety check inside function
    if (typeof projectsData === 'undefined') return;

    // Filter logic
    const filteredData = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    filteredData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Click to Open
        card.addEventListener('click', () => {
            window.open(project.link, '_blank');
        });

        // Animation for entrance
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

// Filter Button Listeners
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

/* --- THEME TOGGLE FIXED --- */
function initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn ? themeBtn.querySelector('i') : null;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) {
            icon.classList.remove('ph-moon');
            icon.classList.add('ph-sun');
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            if (icon) {
                if (isDark) {
                    icon.classList.replace('ph-moon', 'ph-sun');
                } else {
                    icon.classList.replace('ph-sun', 'ph-moon');
                }
            }
        });
    }
}

/* --- ANIMATIONS --- */
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