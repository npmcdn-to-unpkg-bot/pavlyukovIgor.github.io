$(function() {
  $('.single-item').slick({
    // autoplay: true,
    arrows: false,
    dots: true,
    mobileFirst: true,
  });
    });


    $(function(){
      $.ajax({
    type: 'GET',
    url: 'http://dev.frevend.com/json/users.json',
    dataType: 'jsonp',
    success: function() { console.log('Success!'); },
    error: function() { console.log('Uh Oh!'); },
    jsonp: 'jsonp'
});

   });

   function GoogleCallback(data) {


       for (var i = 0; i < data.results.length; i++) {

         $('.account__name', {
           'text': data.results[i].name,
           'appendTo': '.account',
         });

         $('<p>').appendTo('.account').addClass('.account__name').html(data.results[i].name);

       };
     };
