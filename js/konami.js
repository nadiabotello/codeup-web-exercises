"use strict";

// jquery styling

$('h1').css('text-align', 'center');


// The Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A ( ↑ ↑ ↓ ↓ ← → ← → B A )

var konamiArr = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

var pushArr = [];

$(document).keyup(function(event){

    // console.log(event.key);

    var konamid = true;

    pushArr.push(event.key);

    if (pushArr.length > 10){
        pushArr.shift();
    }

    for (var i = 0; i < konamiArr.length; i++) {

        if (konamiArr[i] !== pushArr[i]){
            return konamid = false;}
    }

    if (konamid && pushArr.length === 10) {

        $('body').css("background-image", "url(img/konamicat.gif)");
        $('h1').css('display', 'none');

    }

});

