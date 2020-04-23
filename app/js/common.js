$('.main-slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: false
            }
        }
    ]
});

$(window).on('load resize', function() {
    if ($(window).width() > 767) {
        $('.clients-slider:not(.slick-initialized)').slick({
            slidesToShow: 4,
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev">' +
                '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '     viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">\n' +
                '<g>\n' +
                '\t<path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179\n' +
                '\t\tl-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816\n' +
                '\t\tC52.942,116.507,52.942,124.327,57.633,129.007z"/>\n' +
                '</g>\n' +
                '\n' +
                '</svg>\n</button>',
            nextArrow: '<button type="button" class="slick-next">' +
                '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '     viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">\n' +
                '<g>\n' +
                '\t<path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179\n' +
                '\t\tl-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816\n' +
                '\t\tC52.942,116.507,52.942,124.327,57.633,129.007z"/>\n' +
                '</g>\n' +
                '\n' +
                '</svg>\n</button>'
        });
    } else {
        $(".clients-slider.slick-initialized").slick("unslick");
    }
});

// animate scroll
$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

// tab js
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


$("[name='phone']").mask("+7 (999)999-99-99");

// mail
$(".form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $(".form").trigger("reset");
    });
    return false;
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$('.btn-burger').click(function () {
    $('header .header-wrapper').fadeToggle();
});

$('.links-details').click(function (e) {
    e.preventDefault();

    $('.about .description p').fadeIn();
    $(this).hide();
})

