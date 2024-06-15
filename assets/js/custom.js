
$(document).ready(function(){
  
    // Mobile Menu js
    $(".all-p-humber").click(function () {
        $(this).toggleClass("open");
    });
    $(".mobile-menu-icon").click(function () {
        $('.header-nav-menu ul').slideToggle();
    });

});


