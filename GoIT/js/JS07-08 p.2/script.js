var $container = $('<div>', {'id':'container'});
$('body').append($container);
var $form = $("<form/>",{ action:'/myaction' });
$($container).append($form);
// add firstName
var $labelFirstName = $("<label>").attr('for', "firstname").text('Firstname:');
var $inputFirstName = $('<input>').attr({id: 'firstname', name: 'firstname'});
$inputFirstName.appendTo($labelFirstName);
$($form).append($labelFirstName);
// add lastName
var $labelLastName = $("<label>").attr('for', "lastname").text('Lastname:');
var $inputLastName = $('<input>').attr({id: 'lastname', name: 'lastname'});
$inputLastName.appendTo($labelLastName);
$($form).append($labelLastName);
// add firstName
var $labelAddress = $("<label>").attr('for', "address").text('Address:');
var $inputAddress = $('<input>').attr({id: 'address', name: 'address'});
$inputAddress.appendTo($labelAddress);
$($form).append($labelAddress);


// add divs with text
var $divFirst = $('<div>', {'id':'divFirstName', 'text':'Please provide your firstname.'});
var $divLast = $('<div>', {'id':'divLastName', 'text':'Please provide also your lastname.'});
var $divAddress = $('<div>', {'id':'divAddress', 'text':'Your home or work address.'});

$('body').append($divFirst);
$('body').append($divLast);
$('body').append($divAddress);

// FIRSTNAME
$($inputFirstName).mouseover(function(){
  $($divFirst).fadeIn(500);
});
$($inputFirstName).mouseout(function(){
  $($divFirst).fadeOut(500);
});

//LASTNAME
$($inputLastName).mouseover(function(){
  $($divLast).fadeIn(500);
});
$($inputLastName).mouseout(function(){
  $($divLast).fadeOut(500);
});

//ADDRESS
$($inputAddress).mouseover(function(){
  $($divAddress).fadeIn(500);
});
$($inputAddress).mouseout(function(){
  $($divAddress).fadeOut(500);
});
