/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/

// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// json
(function () {
    $.ajax({
        url: 'json/katalog.json'
    }).done(function (data) {
        var katalog = data.models;
        console.log(katalog);

        console.log(data.models[0].name);
        var source = $("#template").html();
        var template = Handlebars.compile(source);
        var html = template(data);
        $("#summer").append(html);

        var list = document.getElementById("summer").getElementsByTagName('img');

        for (var i = 0; i < list.length; i++) {
            var img = list[i];
            img.addEventListener('click', function () {
                console.log($(this).attr('src'));
                src = $(this).attr("src");
                $('#modal1').show();
                $('.fade').css("opacity", 1);

                for (j = 0; j < katalog.length; j++) {

                    if (src === katalog[j].src) {
                        console.log(katalog[j].name);
                        $("#named").html(katalog[j].name);
                        $("#mostBig").attr("src", katalog[j].src);
                        $("#slide1").attr("src", katalog[j].src);
                        $("#slide2").attr("src", katalog[j].src1);
                        $("#slide3").attr("src", katalog[j].src2);
                        $("#slide4").attr("src", katalog[j].src3);
                        $("#numod").html(katalog[j].number);
                        $("#up").html(katalog[j].haracter.v);
                        $("#down").html(katalog[j].haracter.n);
                        $("#kabl").html(katalog[j].haracter.p);
                        $("#coloring").html(katalog[j].haracter.c)
                    }
                }
                $('#hide').click(function () {
                    $('#modal1').hide();
                });
                $('.close').click(function(){
                    $('#modal1').hide();
                })
            })
        }
    });
})();

//year
var data = new Date();
document.getElementById('data').innerHTML += "- " + data.getFullYear();

//change class
$(document).change(function (){
        if(screen.width<549){
            $(".nav-tabs").attr("class","nav nav-stacked nav-justify");
        }
    }
);