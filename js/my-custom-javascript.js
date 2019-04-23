"use strict";

$('img').css('height', '300px');

$('li').css('font-size', '20px');

$('h1, p, li')
    .css('background', 'yellow')
    .css('text-align', 'center');

$('img')
    .css('display', 'block')
    .css('margin-left', 'auto')
    .css('margin-right', 'auto');

function animateIt() {
    $( "img" ).slideToggle( "slow", animateIt );
}

animateIt();

var contents = $('h1').html();
alert(contents);