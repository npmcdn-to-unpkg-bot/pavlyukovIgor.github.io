$(function() {
  $('.single-item').slick({
    // autoplay: true,
    arrows: fa,
    dots: true,
    infinite: true,
  });
    });


        $(function() {
               $('#link').click(function() {
                   $('#menu').show();
                   return false;
               });
           });


    $(function(){
      $.ajax({
    type: 'GET',
    url: 'http://dev.frevend.com/json/users.json',
    dataType: 'jsonp',
    success: function(data) { console.log('Success!'); },
    error: function() { console.log('Uh Oh!'); },
    jsonp: 'jsonp'
});

   });
