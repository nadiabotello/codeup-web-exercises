"use strict"; // Start of use strict

    // Floating label headings for the contact form
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Show the navbar when the page is scrolled up
    var MQL = 992;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('#mainNav').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
                        $('#mainNav').addClass('is-visible');
                    } else {
                        $('#mainNav').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('#mainNav').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }


    function postsHtml(posts) {

        var html = '';

        posts.forEach(function(post) {
            html += '<div class="post-preview">';
            html += '<h2 class="post-title">' + post.title + '</h2>';
            html += '<h3 class="post-subtitle">' + post.categories + '</h3>';
            html += '<p class="content">' + post.content + '</p>';
            html += '<p class="post-meta">Posted by 1 on' + post.date + '</p>';
            html += '</div>';
            html += '<hr>';
        });


        return html;
    }

    $.ajax('data/blog.json').done(function (posts) {
        console.log(posts);
        $('.post-preview').html(postsHtml(posts));
    }).fail(function () {
        console.log("ERROR!");
    });

