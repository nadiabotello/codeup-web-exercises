"use strict";

$(document).ready(function() {

    // Create a button that, when clicked, makes the last li in each ul have a yellow background.

    $('#toggle').click(function(event) {
        event.preventDefault();
        $('ul > li:last-child').css('background-color','yellow');
    });

    // When any h3 is clicked, the list underneath it should be bolded. Use font-weight: bold to achieve this.

    $('h3').click(function(event) {
        $(this).next().children().css('font-weight', 'bold');
    });

    // When any list item is clicked, first li of the parent ul should have a font color of blue.

    $('li').click(function(event) {
        $(this).closest('ul').find('li:first').css("color", "blue");
        // $(this).parent().children().first()
    });


    // At the top of the page, add a div with two elements, an h1 that reads "Would you like to sign up
    // for our newsletter?" and a span that has an 'x' in it. When the 'x' is clicked, hide the entire div element.

    $('#x').click(function() {
        $('#newsletter').hide();
    });

    // The uls next to each h3 that contain facts about each park should start out hidden,
    // and when the corresponding h3 is clicked,
    // the display of the ul should be toggled with a sliding effect.

    $('#national-park-bb').click(function(event) {
       $('#national-parks-1').slideToggle();
    });

    $('#national-park-dv').click(function(event) {
        $('#national-parks-2').slideToggle();
    });

    $('#national-park-jt').click(function(event) {
        $('#national-parks-3').slideToggle();
    });

    // After the user has been on the page for 8 seconds, an h2 should fade in
    // that asks the user to register for the site.

    $('#register').delay(8000).fadeIn();


    // Make cactus box move

    $(document).keydown(function(e) {

        switch(e.key) {
            case (e.key === "ArrowLeft"):
                $("#cactus").animate({ "left": "+=50px" }, "slow" );
                break;
            case (e.key === "ArrowRight"):
                $("#cactus").animate({ "right": "+=50px" }, "slow" );
                break;
            case (e.key === "ArrowUp"):
                $("#cactus").animate({ "up": "+=50px" }, "slow" );
                break;
            case (e.key === "ArrowDown"):
                $("#cactus").animate({ "down": "+=50px" }, "slow" );
                break;
        }

    });





});