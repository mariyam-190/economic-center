if ($(window).width() > 1024) {
    var page = document.getElementById('page-scroll');
    var last_pane = page.getElementsByClassName('pageSection');
    last_pane = last_pane[last_pane.length - 1];
    var dummy_x = null;

    window.onscroll = function() {
            // Horizontal Scroll.
            var y = document.body.getBoundingClientRect().top;
            page.scrollLeft = -y;

            // Looping Scroll.
            // var diff = window.scrollY - dummy_x;
            //if (diff > 0) {
            //window.scrollTo(0, diff);
            //}
            //else if (window.scrollY == 0) {
            //window.scrollTo(0, dummy_x);
            //}
        }
        // Adjust the body height if the window resizes.
    window.onresize = resize;
    // Initial resize.
    resize();

    // Reset window-based vars
    function resize() {
        var w = page.scrollWidth - window.innerWidth + window.innerHeight;
        document.body.style.height = w + 'px';

        dummy_x = last_pane.getBoundingClientRect().left + window.scrollY;
    }
}

jQuery(document).ready(function() {

    jQuery('').addClass("hidden1").viewportChecker({
        classToAdd: 'visible1 animated fadeIn',
        offset: 150
    });

});