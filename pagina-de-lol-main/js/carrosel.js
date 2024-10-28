$(document).ready(function () {
    var carousel = $('#carouselExampleCaptions');

    carousel.on('slid.bs.carousel', function () {
        var activeItem = carousel.find('.carousel-item.active');
        var backgroundUrl = activeItem.find('img').attr('src');
        $('#carousel-background').css('background-image', 'url(' + backgroundUrl + ')');
    });

    carousel.carousel();

    var initialBackgroundUrl = carousel.find('.carousel-item.active img').attr('src');
    $('#carousel-background').css('background-image', 'url(' + initialBackgroundUrl + ')');


    $('.carousel-control-prev').on('click', function () {
        carousel.carousel('prev');
    });

    $('.carousel-control-next').on('click', function () {
        carousel.carousel('next');
    });
});