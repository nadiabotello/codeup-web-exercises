"use strict";

$(document).ready(function() {

    // Create a button that, when clicked, makes the last li in each ul have a yellow background.

    $('#toggle').click(function(event) {
        event.preventDefault();
        $('ul > li:last-child').css('background-color','yellow');
    });

    // When any h3 is clicked, the list underneath it should be bolded. Use font-weight: bold to achieve this.

    $('h3').click(function(event) {
        $(this).next().css('font-weight', 'bold');
    });


    // When any list item is clicked, first li of the parent ul should have a font color of blue.

    $('li').click(function(event) {
        $(this).closest('ul').find('li:first').css("color", "blue");

    });


    // Create 3 divs that each look like a picture Frame; each one should have a unique background
    // image and a button underneath that swaps the image from the frame. Use Traversing functions
    // of jQuery to accomplish this.
    //
    //     The rules are the following:
    //
    //     The left frame swaps to the right and takes the image from the frame in the center.
    //     The center frame swaps randomly to either the left or right.
    //     The right frame swaps to the left and takes the image from the frame in the center.







});