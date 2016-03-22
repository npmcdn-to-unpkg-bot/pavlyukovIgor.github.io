$(function () {

	$('.search_input').keyup(function(event){
	    if (event.keyCode == 13) {
	        googleIt();
	    }
	});

	$('.search_btn').on( "click", googleIt);

	function googleIt () {

			$('.search_results').remove();
			var inputVal = $('.search_input').val();

			$.ajax({
				url:
				'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ inputVal + '&callback=GoogleCallback&context=?',
				dataType: 'jsonp'
			});
	};

});

function GoogleCallback(jqueryObj, data) {

  $('<div>').appendTo('.container').addClass('search_results');

  if (data.results.length == 0) {

    $('<p>').appendTo('.search_results').addClass('no_results').html('Поиск не дал результатов');

  } else {

    for (var i = 0; i < data.results.length; i++) {

      $('<a>', {
        'href': data.results[i].url,
        'text': data.results[i].titleNoFormatting,
        'appendTo': '.search_results',
        'target': '_blank'
      });

      $('<p>').appendTo('.search_results').addClass('result_url').html(data.results[i].url);
      $('<p>').appendTo('.search_results').addClass('result_content').html(data.results[i].content);

    };
  };
};
