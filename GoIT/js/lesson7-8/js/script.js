$('body').append('<div class="tabs"></div>');
$('.tabs').append('<ul class="tabNavigation"></ul>');
$('.tabNavigation').append(
    $('<li>').append(
        $('<a>').addClass("").attr('href','#first').append("Пункт 1")));

$('.tabNavigation').append(
	  $('<li>').append(
       $('<a>').addClass("").attr('href','#second').append("Пункт 2")));

$('.tabNavigation').append(
 	  $('<li>').append(
    	$('<a>').addClass("").attr('href','#third').append("Пункт 3")));

$('.tabs').append(
 	  $('<div>').attr('id','first').append(
    	$('<p>').append("Тест страница #1")));

$('.tabs').append(
 	  $('<div>').attr('id','second').append(
    	$('<p>').append("Тест страница #2")));

$('.tabs').append(
	  $('<div>').attr('id','third').append(
			$('<p>').append("Тест страница #3")));


$(function () {
	    var tabContainers = $('div.tabs > div');
	    tabContainers.hide().filter(':first').show();
	    $('div.tabs ul.tabNavigation a').click(function () {
	        tabContainers.hide();
	        tabContainers.filter(this.hash).show();
	        $('div.tabs ul.tabNavigation a').removeClass('selected');
	        $(this).addClass('selected');
	        return false;
	    }).filter(':first').click();
	});
