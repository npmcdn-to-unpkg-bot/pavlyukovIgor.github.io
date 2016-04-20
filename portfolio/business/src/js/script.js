$(document).ready(function() {
  $(".call__box").mouseout(function(e)
  {
   $(".call__link").css({"color": "#58c7f2", "border-bottom": "1px dashed #58c7f2"});
  });
  $(".call__box").mousemove(function(e)
  {
   $(".call__link").css({"color": "#fff", "border-bottom": "1px dashed #fff"});
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoWidth: true,
    items:2
  });

});
