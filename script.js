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

    document.querySelectorAll('.nav-arrow').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const currentPage = document.querySelector('.page.current');
            const nextPage = this.classList.contains('next-arrow') ? currentPage.nextElementSibling : currentPage.previousElementSibling;

            if (nextPage) {
                currentPage.classList.remove('current');
                currentPage.classList.add(this.classList.contains('next-arrow') ? 'flip' : 'flip-back');
                nextPage.classList.add('current');
            }
        });
    });

    // Add random rotation to SVG decorations for a more natural scattered look
    const svgDecors = document.querySelectorAll('.svg-decor');
    svgDecors.forEach(svg => {
        const randomRotation = Math.floor(Math.random() * 360);
        cons