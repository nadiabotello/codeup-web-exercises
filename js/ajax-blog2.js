"use strict";

// Show the navbar when the page is scrolled up
var MQL = 992;

//primary navigation slide-in effect
if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
            previousTop: 0
        },
        function () {
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

    posts.forEach(function (post) {
        html += '<div class="post-preview">';
        html += '<h2 class="post-title">' + post.title + '</h2>';
        html += '<h3 class="post-subtitle"><em>Tags: ' + post.categories + '</em></h3>';
        html += '<p class="content">' + post.content + '</p>';
        html += '<p class="post-meta">Posted by Cat on ' + post.date + '</p>';
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

