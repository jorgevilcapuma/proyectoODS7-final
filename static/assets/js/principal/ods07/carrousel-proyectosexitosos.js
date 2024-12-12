let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

setInterval(function () {
    slideIndex++;
    if (slideIndex > document.querySelectorAll('.slide').length) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
}, 3000);

// Carrusel de elementos
let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    if (window.innerWidth > 768) {
        if (index >= totalItems - 3) {
            currentIndex = totalItems - 3;
        } else if (index < 0) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
    } else if (window.innerWidth > 480) {
        if (index >= totalItems - 2) {
            currentIndex = totalItems - 2;
        } else if (index < 0) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
    } else {
        if (index >= totalItems - 1) {
            currentIndex = totalItems - 1;
        } else if (index < 0) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
    }

    const itemWidth = items[0].clientWidth + 15;
    const offset = -currentIndex * itemWidth;

    carousel.style.transform = `translateX(${offset}px)`;

    updateControls();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function updateControls() {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    if (window.innerWidth > 768) {
        prevButton.classList.toggle('active', currentIndex > 0);
        nextButton.classList.toggle('active', currentIndex < document.querySelectorAll('.carousel-item').length - 3);
    } else if (window.innerWidth > 480) {
        prevButton.classList.toggle('active', currentIndex > 0);
        nextButton.classList.toggle('active', currentIndex < document.querySelectorAll('.carousel-item').length - 2);
    } else {
        prevButton.classList.toggle('active', currentIndex > 0);
        nextButton.classList.toggle('active', currentIndex < document.querySelectorAll('.carousel-item').length - 1);
    }
}

// Initial display
showSlide(currentIndex);

// Resize event listener
window.addEventListener('resize', () => {
    showSlide(currentIndex);
});
