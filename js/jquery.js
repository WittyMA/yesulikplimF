
$(document).ready(function() {
    function checkVisibility() {
        $('.hidden-element').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).css('opacity', '1');
            }
        });
    }

    // Initial check when the document is ready
    checkVisibility();

    // Check the visibility of elements on scroll
    $(window).scroll(function() {
        checkVisibility();
    });
});

