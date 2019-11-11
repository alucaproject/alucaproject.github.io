
/* DOT NAVIGATION - Created/Inspired form https://stackoverflow.com/questions/18430874/dots-change-on-scroll */

// Moved code inside init function to be able to call it after the 
// page initializes everything to get accurate position data on the sections. 
function initDotNavigation(){
    var $dotNav = $('.dotNav');
    // DOT NAVIGATION - MAKE THE DOTS INSIDE THE DOT NAVIGATION
    var $dotSection = $('.dotSection');
    for (i = 0; i <= $dotSection.length - 1; i++) {
        var dotItem = document.createElement('div');
        $(dotItem).addClass('dotItem');
        $(dotItem).attr('id', 'dot' + i);
        $(dotItem).data('position', $dotSection[i].offsetTop);
        $dotNav.append(dotItem);
    }
    // DOT NAVIGATION - CREATE CLICK EVENT FOR DOT NAVIGATION
    $('.dotItem').on('click', function(e){
        e.preventDefault();
        var target = $(this).data('position');     
        //console.log(target);       
        $('html, body').animate({scrollTop: target}, 500, 'swing');
        /*
        $dotNav.children().removeClass('dotItemActive');
        $(this).addClass('dotItemActive');
        */
    });
    // DOT NAVIGATION - CREATE SCROLL EVENT FOR DOT NAVIGATION
    $(window).on('scroll', function(e){
        e.preventDefault();
        var scrolled = $(this).scrollTop();
        var $dotItems = $('.dotItem');
        for(i=0;i<=$dotItems.length-1;i++){
            $dotItem = $($dotItems[i]);
            if(scrolled >= $dotItem.data('position') ){
                $dotNav.children().removeClass('dotItemActive');
                $dotItem.addClass('dotItemActive'); 
            }
        }   
    });
    // RECALCULATE POSITION DATA ON WINDOW RESIZE
    $(window).on('resize', function(e){
        e.preventDefault();
        var $dotItems = $('.dotItem');
        for(i=0;i<=$dotItems.length-1;i++){
            $dotItem = $($dotItems[i]);
            $dotItem.data('position', $dotSection[i].offsetTop );
        }
    }); 

    // DOT NAVIGATION - ACTIVATE FIRST DOT
    $('#dot0').addClass('dotItemActive');
}


