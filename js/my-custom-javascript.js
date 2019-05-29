"use strict";

$('img').css('height', '300px')
    .css('display', 'block')
    .css('margin-left', 'auto')
    .css('margin-right', 'auto');

// function animateIt() {
//     $( "img" ).slideToggle( "slow", animateIt );
// }
//
// animateIt();


$('h1').click(function () {
    $(this).css('background', 'yellow');
});

$('p').dblclick(function () {
    $(this).css('font-size', '18px')
});

$('li').hover(function () {
    $('li').css('color', 'red');
}, function () {
    $('li').css('color', 'black');
});