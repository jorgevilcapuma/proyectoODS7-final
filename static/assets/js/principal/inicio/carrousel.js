var counter = 0,
    $items = $('.js-slideshow figure'),
    numItems = $items.length,
    autoSlideInterval;

var showCurrent = function() {
    var itemToShow = Math.abs(counter % numItems);
   
    $items.removeClass('show');
    $items.eq(itemToShow).addClass('show');
};

// click for next or previous image
$('.next').on('click', function() {
    counter--;
    resetAutoSlide();
    showCurrent(); 
});

$('.previous').on('click', function() {
    counter++;
    resetAutoSlide()
    showCurrent(); 
});

// Función para moverse automáticamente
var autoSlide = function() {
    counter++;
    showCurrent();
};

autoSlideInterval = setInterval(autoSlide, 6000);

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 6000)
}

if ('ontouchstart' in window) {
    $('.js-slideshow').swipe({
        swipeLeft: function() {
            counter++;
            resetAutoSlide();
            showCurrent();
        },
        swipeRight: function() {
            counter--;
            resetAutoSlide();
            showCurrent();
        }
    });
}
