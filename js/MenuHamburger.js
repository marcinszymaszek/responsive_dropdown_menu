$("nav div").click(function () {
   $("ul").slideToggle();
   $("ul ul").css("display", "none");
});

$("ul li").click(function () {
   $(this).find('ul').slideToggle(); 
});

$(window).resize(function () {
    if ($(window).width() > 768) {
        $("ul").removeAttr('style');
    }
});

console.log(3 && 4 );