$(window).on("load", function() {
    
/*
    see line 225 style.css
    
    var value = $(document).scrollTop();

    if ( value <= 100 ) {
        $('.item, .fade').each( function(i){
            var trigger_point = $(this).position().top + 20;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > trigger_point ){
                $(this).delay(400 * i / 1).animate({'opacity':'1'},600);
            }
        });
        $(window).scroll( function(){
            $('.item, .fade').each( function(){
                var trigger_point = $(this).position().top + 20;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > trigger_point ){
                    $(this).delay(300).animate({'opacity':'1'},300);
                }
            }); 
        });
    } else if ( value >= 101 ) {
        $(window).scroll( function(){
            $('.item, .fade').each( function(){
                var trigger_point = $(this).position().top + 20;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > trigger_point ){
                    $(this).delay(300).animate({'opacity':'1'},300);
                }
            }); 
        });
    } else {
    };
    
*/

    $('.link, .logo').on( 'touchend', function(e){
        e.preventDefault();
        var linkUrl = $(this).attr('href');
        setTimeout(function(url) { window.location = url; }, 400, linkUrl);
    });

    //Scroll to top option in footer
    $(".top").click(function(){
        $("html, body").animate({scrollTop: 0}, 600);
    });

    //Englarge image to 'fullscreen'
    $('.article .image').click(function(){
        $( this ).clone().appendTo( ".fullscreen" );
        $(".fullscreen").fadeIn(300);
        $(".fullscreen img").fadeIn(300);
        /*$('html, body').css({
            overflowY: 'hidden'
        });*/
        $('.fullscreen').css({
            touchAction: 'none'
        });
    });

    $('.fullscreen').click(function(e){
        if(e.target != this) return;
        $( this ).hide();
        $('.fullscreen img').remove();
        /*$('html, body').css({
            overflowY: 'auto'
        });*/
        $('.fullscreen').css({
            touchAction: 'auto'
        });
    });

    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $('.fullscreen').hide();
            $('.fullscreen img').remove();
            /*$('html, body').css({
                overflowY: 'auto'
            });*/
            $('.fullscreen').css({
                touchAction: 'auto'
            });
        }
    });
    
});