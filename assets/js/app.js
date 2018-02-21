  $(document).ready(function () {
        $('#questionDisplay').hide();
        $('#answerDisplay').hide();
        $('#resultBox').hide();

        $('#start').on('click', function () {
        $('#box').hide();
        $('body').css('background-image', 'url("assets/images/answerBg.jpg")');
        $("body").css({"background-position":"center center"})
        $('#questionDisplay').delay(1200).animate({height: 'toggle', opacity: '1'}, 1000);

        $('.multiChoice').on('click', function () {
            $('#questionDisplay').hide();
            $('#answerDisplay').animate({height: 'toggle', opacity: '1'}, 1000);
        });

        $('#image-holder').on('click', function () {
            $('#questionDisplay').hide();
            $('#answerDisplay').hide();
            $('body').css('background-image', 'url("assets/images/halong1.jpg")');
            // $("body").css({"background-position":"right center"});
            $('#resultBox').animate({width: 'toggle'}, 1000);
            
        });
        
    });
    
});