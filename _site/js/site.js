$(document).ready(function(){
    //Smooth scroll to each section
    $('a').smoothScroll({offset: 10});

    //Close the navbar dropdown when clicked
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
        $('.navbar-toggle:visible').click();
    });
});
