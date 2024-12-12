(function() {
    const carrouselContainer = document.querySelector('.carrousel-contribuciones .carrousel-contribuciones');
    const dots = document.querySelectorAll('.carrousel-contribuciones .dot');
    let currentIndex = 0;

    if (!carrouselContainer || dots.length === 0) return;

    function updateCarrousel() {
        const itemWidth = carrouselContainer.querySelector('.carrousel-contribuciones-item').clientWidth + 30;
        carrouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarrousel();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarrousel();
        });
    });

    // Auto-slide every 3 seconds
    setInterval(autoSlide, 3000);

    updateCarrousel();
})();
