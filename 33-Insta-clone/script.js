// Video Logic
const videos = document.querySelectorAll('video');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
            entry.target.currentTime = 0;
        }
    });
}, { threshold: 0.6 });

videos.forEach(video => {
    observer.observe(video);
    
    // Tap to Mute Toggle
    video.addEventListener('click', () => {
        video.muted = !video.muted;
        const overlay = video.nextElementSibling;
        overlay.innerHTML = video.muted ? '<i class="fa-solid fa-volume-xmark" style="font-size: 30px;"></i>' : '<i class="fa-solid fa-volume-high" style="font-size: 30px;"></i>';
        overlay.classList.add('show');
        setTimeout(() => overlay.classList.remove('show'), 1000);
    });
});

// Interactions
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
        const icon = btn.querySelector('i');
        icon.style.color = btn.classList.contains('liked') ? '#ff3040' : 'white';
    });
});

document.querySelectorAll('.follow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.innerText === "Follow") {
            btn.innerText = "Following";
            btn.style.background = "transparent";
            btn.style.border = "1px solid rgba(255,255,255,0.3)";
        } else {
            btn.innerText = "Follow";
            btn.style.border = "1px solid rgba(255,255,255,0.6)";
        }
    });
});