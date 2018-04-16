$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
      
        },
        allowPageScroll:"vertical"
      
      });

    $('#content-slider').lightSlider({
        enableTouch: true,
        adaptiveHeight: false,
        item: 4,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [{
                breakpoint: 990,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ],

    });

    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.card-ani-um', {
        duration: 1000,
        origin: 'left',
        distance: '20px'
    });
    sr.reveal('.card-ani-dois', {
        duration: 1000,
        origin: 'bottom',
        distance: '20px'
    });
    sr.reveal('.card-ani-tres', {
        duration: 1000,
        origin: 'right',
        distance: '20px'
    });
    sr.reveal('.emp-ani-text', {
        duration: 1000,
        origin: 'left',
        distance: '20px'
    });
    sr.reveal('.emp-ani-img', {
        duration: 1000,
        origin: 'right',
        distance: '20px'
    });
    sr.reveal('.form-ani-nome', {
        duration: 1000,
        origin: 'left',
        distance: '20px'
    });
    sr.reveal('.form-ani-email', {
        duration: 1000,
        origin: 'right',
        distance: '20px'
    });
    sr.reveal('.form-ani-tel', {
        duration: 1000,
        origin: 'left',
        distance: '20px'
    });
    sr.reveal('.form-ani-ass', {
        duration: 1000,
        origin: 'right',
        distance: '20px'
    });
    sr.reveal('.form-ani-msg', {
        duration: 1000,
        origin: 'right',
        distance: '20px'
    });

});

