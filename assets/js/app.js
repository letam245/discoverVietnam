  $(document).ready(function () {
        $('#questionDisplay').hide();
        $('#answerDisplay').hide();

        $('#start').on('click', function () {
        $('#box').hide();
        $('body').css('background-image', 'url("assets/images/answerBg3.jpg")');
        $("body").css({"background-position":"center top"})
        $('#questionDisplay').delay(1200).animate({height: 'toggle', opacity: '1'}, 1000);

        $('.multiChoice').on('click', function () {
            $('#questionDisplay').hide();
            $('#answerDisplay').animate({height: 'toggle', opacity: '1'}, 1000);
        })
    });
});