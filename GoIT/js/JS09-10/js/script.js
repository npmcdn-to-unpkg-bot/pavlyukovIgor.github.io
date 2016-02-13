$(document).ready(function() {
  $("#carousel").owlCarousel({
    items:3,
    itemsDesktop: [1216,2],
    itemsDesktopSmall: [996,2],
    autoPlay: true,
    navigation: true,
    pagination: true
  });
});

(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);


$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );

    });

$(document).ready(function() {

jQuery(".dropdown").mouseenter(
  function () {
	jQuery(this).animate({
		backgroundColor:"#ffb1b1",
    }, 500 );
});

jQuery(".dropdown").mouseleave(function() {
	jQuery(this).animate({
		backgroundColor:"#ff6464",
    }, 500 );
});
});
