
document.addEventListener('DOMContentLoaded', function() {
    // Cover page click to navigate to first spread
    const magazineCover = document.querySelector('.magazine-cover');
    if (magazineCover) {
        magazineCover.addEventListener('click', function() {
            window.location.href = 'seite1.html';
        });
    }

    // Add page turning sound effect
    const navArrows = document.querySelectorAll('.nav-arrow');
    navArrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            // Could add sound effect here if desired
            // Currently just for future enhancement
        });
    });

    // Add random rotation to SVG decorations for a more natural scattered look
    const svgDecors = document.querySelectorAll('.svg-decor');
    svgDecors.forEach(svg => {
        const randomRotation = Math.floor(Math.random() * 360);
        const randomX = Math.floor(Math.random() * 20) - 10;
        const randomY = Math.floor(Math.random() * 20) - 10;
        
        svg.style.transform = `rotate(${randomRotation}deg) translateX(${randomX}px) translateY(${randomY}px)`;
    });

    // Add slight parallax effect to videos when scrolling
    const videos = document.querySelectorAll('.video-container');
    window.addEventListener('scroll', function() {
        videos.forEach(video => {
            const scrollPosition = window.scrollY;
            video.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        });
    });
});
