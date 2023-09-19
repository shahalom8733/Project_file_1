$(document).ready(function() {
    $('.menu-button').click(function() {
        $('.header-menu').fadeIn(300);
    })
    $('.hide').click(function() {
        $('.header-menu').fadeOut(300);
    })

})




// swiper-slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// toTop-butoon
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})


// mixit-up
var containerEl = document.querySelector('.portfolio-area');
var mixer = mixitup(containerEl, {
    load: {
        filter: 'all'
    },
    animation: {
        effectsIn: 'fade translateY(-100%)',
        effects: 'fade translateZ(-100px)'
    }
});