$(document).ready(function () {

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var titulo = button.find(".card-title").text();
        var recipient = button.data('texto') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        
        modal.find('.modal-title').text(titulo)
        modal.find('.modal-body p').text(recipient)
        
      })

    var screenWidth = $(window).width();
    if (screenWidth < 800){
        $('item').removeClass('container');
    }
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            // when scroll to bottom of the page
            $('#back-to-top').fadeOut();
        }
    });
    
    //$('#back-to-top').tooltip('show');
    
    $('#contato-modal').click(function() {
        $('html, body').animate({
            scrollTop: $("#contato").offset().top
        }, 2000);
    });

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
        adaptiveHeight: true,
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

    $("#clickToShow").toggle();
    $("#clickToShowButton").click(function() {
        $("#clickToShow").fadeToggle();
    });

    window.sr = ScrollReveal({
        reset: true
    });
    /*
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
    */
   sr.reveal('.item-ani', {
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

