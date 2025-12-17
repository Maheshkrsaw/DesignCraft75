/* -------------------------------------------
   1. GLOBAL INITIALIZATION
------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Init Smooth Scroll (Lenis with Premium Easing)
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 2. Init Theme
    initTheme();

    // 3. Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 4. Render Projects (Home Page)
    const projectContainer = document.getElementById('projectsContainer');
    if (projectContainer) {
        if (typeof projectsData !== 'undefined') {
            renderProjects('all');
            initHomeAnimations();
        } else {
            console.error("projectsData is missing! Check projects.js linkage.");
        }
    }

    // 5. About Page Animations
    const aboutSection = document.getElementById('about-page');
    if (aboutSection) {
        initAboutAnimations();
    }

    // 6. Global Animations (Footer, Section Titles)
    initGlobalAnimations();
});

/* -------------------------------------------
   2. RENDER LOGIC
------------------------------------------- */
/* -------------------------------------------
   2. RENDER LOGIC (Updated for Cloudinary Videos)
------------------------------------------- */
function renderProjects(filter) {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = ''; // Clear existing

    // Safety check
    if (typeof projectsData === 'undefined') return;

    const filteredData = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);

    filteredData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card', 'reveal-card');

        // Click to Open Project Link
        card.addEventListener('click', () => {
            window.open(project.link, '_blank');
        });

        // Media Container
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('media-container');

        // Thumbnail Image
        const img = document.createElement('img');
        img.src = project.image; // Cloudinary image URL
        img.alt = project.title;

        // Video Element
        const video = document.createElement('video');
        video.src = project.video; // Cloudinary video URL
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.preload = 'metadata'; // Only metadata, faster load
        video.poster = project.image; // fallback if video not loaded

        mediaContainer.appendChild(img);
        mediaContainer.appendChild(video);
        card.appendChild(mediaContainer);

        // Card Content
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        cardContent.innerHTML = `
            <span class="card-tags">${project.category}</span>
            <h3 class="card-title">${project.title}</h3>
            <p class="card-desc">${project.desc}</p>
        `;
        card.appendChild(cardContent);

        container.appendChild(card);

        // Hover Logic for Video
        mediaContainer.addEventListener('mouseenter', () => {
            video.play().catch(err => console.log(err));
        });

        mediaContainer.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    // Trigger Staggered GSAP Animation
    animateProjects();
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

/* -------------------------------------------
   3. THEME TOGGLE (Fixed Logic)
------------------------------------------- */
function initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn ? themeBtn.querySelector('i') : null;

    // Check LocalStorage
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

/* -------------------------------------------
   4. ADVANCED ANIMATIONS (The "Maza Aa Gaya" Part)
------------------------------------------- */

// A. Projects Wave Effect
function animateProjects() {
    // Kill previous triggers to prevent bugs when filtering
    ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger === '.reveal-card') t.kill();
    });

    gsap.fromTo(".reveal-card", 
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1, // Creates the wave effect
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#projectsContainer",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// B. Home Hero (Load Sequence)
function initHomeAnimations() {
    const tl = gsap.timeline();

    tl.from(".hero-title", { y: 100, opacity: 0, duration: 1, ease: "power4.out" })
      .from(".hero-sub", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
      .from(".hero-cta-group", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".img-circle", { scale: 0.8, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }, "-=1");

    gsap.to(".scroll-indicator", {
        scrollTrigger: { trigger: "header", start: "top top", end: "bottom center", scrub: true },
        opacity: 0, y: 50
    });
}

// C. About Page (Story & Stats Reveal)
function initAboutAnimations() {
    // 1. Header
    gsap.from(".about-header", { y: 50, opacity: 0, duration: 1, delay: 0.2 });

    // 2. Story Image Slide In
    gsap.from(".story-image", {
        scrollTrigger: { trigger: ".story-section", start: "top 80%" },
        x: -50, opacity: 0, duration: 1, ease: "power3.out"
    });

    // 3. Story Text Slide In
    gsap.utils.toArray('.story-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: "top 85%" },
            x: 50, opacity: 0, duration: 0.8, delay: i * 0.2, ease: "power3.out"
        });
    });

    // 4. Achievements Pop Up
    gsap.from(".stat-card", {
        scrollTrigger: { trigger: ".achievements-section", start: "top 80%" },
        scale: 0.8, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)"
    });

    // 5. Tech Stack Fade In
    gsap.from(".tech-item", {
        scrollTrigger: { trigger: ".tech-section", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.5, stagger: 0.05, ease: "power2.out"
    });
}

// D. Global (Section Headers & Footer)
function initGlobalAnimations() {
    // Section Headers
    gsap.utils.toArray('.section-header, .section-heading').forEach(header => {
        gsap.from(header, {
            scrollTrigger: { trigger: header, start: "top 85%" },
            y: 50, opacity: 0, duration: 1, ease: "power3.out"
        });
    });

    // Footer Reveal
    gsap.from(".footer-container", {
        scrollTrigger: { trigger: "footer", start: "top 90%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
    });
}