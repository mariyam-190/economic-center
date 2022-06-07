jQuery(document).ready(function($) {

    $(".scroll-next").click(function() {
        var target = $(this).data('id');
        var top;
        if ($(window).width() > 1024)
            top = $(window).outerWidth(); // on desktop 
        else
            top = $("#" + target).offset().top; // on mobile
        // scroll to next section
        $('html, body').animate({
            scrollTop: top
        }, 400);
        return false;
    });

    var url = window.location.href;
    var activePage = url;
    $('.services-sidebar a').each(function() {
        var linkPage = this.href;

        if (activePage == linkPage) {
            $(this).closest("a").addClass("active");
        }
    });

    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function() {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function() {
        return false;
    });
    searchBox.mouseup(function() {
        return false;
    });
    $(document).mouseup(function() {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });


    $('.testimonials').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 800,
        arrows: true,
        fade: false
    });

    $('.button-sidebar-active').click(function() {
        $('.sidebar-wrapper').toggleClass("active-sidebar");
    });

    $('.button-service-active').click(function() {
        $('.sidebar-services-wrapper').toggleClass("active-sidebar");
    });

    //$(".sub-menu").mouseenter(function(){
    // $(".menu-item-has-children").css("background-color", "black");
    //});
    // $(".sub-menu").mouseleave(function(){
    // $(".menu-item-has-children").css("background-color", "transparent");
    //});

    function expand() {
        $(this).toggleClass("on");
        $(".mobile-navigation-wrap").toggleClass("activess");
    };
    $(".buttonss").on('click', expand);


    $('.mobile-nav-menu li.themeslug-menu-item-parent span').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active').siblings('.mobile-nav-menu .sub-menu').slideToggle();
        $(this).parent().siblings().find('.mobile-nav-menu li.themeslug-menu-item-parent span').removeClass('active').siblings('.mobile-nav-menu .sub-menu').slideUp();

    });

    $('.category-box .searchandfilter .sf-level-0 > label').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('classAdd').siblings('.searchandfilter .sf-level-0  ul.children').slideToggle();
        $(this).parent().siblings().find('.searchandfilter .sf-level-0 > label:after').removeClass('classAdd').siblings('.searchandfilter .sf-level-0  ul.children').slideUp();

    });


});



$(function() {
    $(".blog-page-box-content").slice(0, 10).show();
    $("body").on('click touchstart', '.load-more', function(e) {
        e.preventDefault();
        $(".blog-page-box-content:hidden").slice(0, 3).slideDown();
        if ($(".blog-page-box-content:hidden").length == 0) {
            $(".load-more").css('visibility', 'hidden');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) {
        $(".header-two").addClass("active");
        $(".header-content-2").addClass("active");
        $(".header-content-2 .logo-box img").addClass("active");
        $(".header-content-2 .navigation").addClass("active");
        $(".header-content-2 .searchbox-icon").addClass("active");
        $(".header-content-2 .searchbox").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header-two").removeClass("active");
        $(".header-content-2").removeClass("active");
        $(".header-content-2 .logo-box img").removeClass("active");
        $(".header-content-2 .navigation").removeClass("active");
        $(".header-content-2 .searchbox-icon").removeClass("active");
        $(".header-content-2 .searchbox").removeClass("active");
    }
});


function buttonUp() {
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.searchbox-icon').css('display', 'none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display', 'block');
    }
}