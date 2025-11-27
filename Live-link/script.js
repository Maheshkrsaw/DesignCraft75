/* -------------------------------------------
   1. PROJECT DATA (NEW ATTRACTIVE DATA)
------------------------------------------- */
const projectsData = [
    {
        id: 1,
        title: "Neon AI Dashboard",
        desc: "A futuristic data visualization dashboard with dark mode.",
        category: "react",
        // Attractive UI Image
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", 
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
    },
    {
        id: 2,
        title: "Luxury Fashion Store",
        desc: "Minimalist e-commerce interface with smooth GSAP animations.",
        category: "html-css",
        // High Fashion Image
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        id: 3,
        title: "Crypto Wallet App",
        desc: "Secure fintech application using modern JavaScript and APIs.",
        category: "js",
        // Tech/Crypto Image
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop",
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 4,
        title: "3D Architecture Portfolio",
        desc: "Immersive 3D experience built with Three.js.",
        category: "react",
        // Architecture/Clean Image
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    }
];

/* -------------------------------------------
   2. INITIALIZATION
------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize Lenis (Smooth Scroll)
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize Projects and GSAP
    renderProjects('all');
    initAnimations();
});

/* -------------------------------------------
   3. RENDER LOGIC
------------------------------------------- */
const container = document.getElementById('projectsContainer');

function renderProjects(filter = 'all') {
    container.innerHTML = '';

    const filteredData = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);

    filteredData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        
        // Staggered Entrance Animation
        gsap.fromTo(card, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );

        card.innerHTML = `
            <div class="media-container" 
                 onmouseenter="this.querySelector('video').play()" 
                 onmouseleave="this.querySelector('video').pause()">
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

/* -------------------------------------------
   4. THEME TOGGLE
------------------------------------------- */
const themeBtn = document.getElementById('themeToggle');
const icon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        icon.classList.replace('ph-moon', 'ph-sun');
    } else {
        icon.classList.replace('ph-sun', 'ph-moon');
    }
});

/* -------------------------------------------
   5. GSAP ANIMATIONS
------------------------------------------- */
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Stagger
    gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    });

    gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out"
    });

    // Image Pop In
    gsap.from(".img-circle", {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "elastic.out(1, 0.5)"
    });

    // Scroll Indicator
    gsap.to(".scroll-indicator", {
        scrollTrigger: {
            trigger: "header",
            start: "top top",
            end: "bottom center",
            scrub: true
        },
        opacity: 0,
        y: 50
    });
}