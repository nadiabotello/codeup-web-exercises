"use strict";

$(document).ready(function() {

    $('#toggle').click(function(event) {
        event.preventDefault();
        $('.invisible').toggleClass('visible');
    });

    $('dt').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('highlighted');

    });



    // When any one dt is clicked, the element that was clicked should be highlighted.




});