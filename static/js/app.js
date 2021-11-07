$(document).ready(function() {
    $('.owl-carousel').owlCarousel();
});


$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1300: {
            items: 1
        },
        1500: {
            items: 1
        }
    }
});