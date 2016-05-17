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


function openbox(id){
    $('#module__box').attr("style", "display: block;");
}

$(document).mouseup(function (e) {
    var container = $("#module__box");
    if (container.has(e.target).length === 0){
        container.hide();
    }

});

$(document).ready(function(){
       $("#submit").click(function(){
             $("#form").submit();
             console.log('form is submitted');
             $('#module__box').hide();
       })
    });
