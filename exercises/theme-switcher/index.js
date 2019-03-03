// click event for gray button

// click event for white button

$('#grayButton').click(function switchGray(){
$('body').css('background-color','gray');
$('h1, p').css('color', 'white');
});

$('#whiteButton').click(function switchWhite(){
$('body').css('background-color','white');
$('h1, p').css('color', 'black');
});
