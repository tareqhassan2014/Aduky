(function ($) {
    /* Home page 2 carousel start */

    $('.institute__carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            },
            480: {
                items: 2,
                nav: true,
                loop: true,
            },
        },
    });

    /* Home page 2 carousel end */

    $('.instructor-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });

    $('.register-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    $('.counter-up-item').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate(
            {
                countNum: countTo,
            },

            {
                duration: 1000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    // alert('finished');
                },
            }
        );
    });

    $('.testimonial-1__carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            500: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
        },
    });

    $('.subject-2__carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 2,
                nav: true,
                loop: true,
            },
        },
    });

    $('.subject-3__carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            768: {
                items: 2,
                nav: true,
            },
            1200: {
                items: 3,
                nav: true,
                loop: true,
            },
        },
    });

    $('.testimonial-3__carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 2,
                nav: true,
                loop: true,
            },
        },
    });

    $('.blog__item--thumb--carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            },
        },
    });

    $('.testimonial-4__carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            },
        },
    });

    // home page 5 testimonial carousel

    $('.testimonial-2__carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    /* Active isotope fore course card */

    // init Isotope
    var $grid = $('.course__container').isotope({
        // options
    });
    // filter items on button click
    $('.masonary-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
})(jQuery);
