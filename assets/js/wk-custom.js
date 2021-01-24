//HamburgerMenu script
function Hamburgermenu(){
    document.querySelector('.main-wrap').classList.toggle('small-menu');
}

//slimscroll left nav menu
$('.full-height-scroll').slimScroll({
    height: '100%'
});



//Nav left menu dropdown script
    $('.wk-nav-sub-menu').on('click', function(){
        var reportDropdown = $(this).children('.wk-sub-menu');
        var subClassAdd = $(this);
        
        if(reportDropdown.is(':hidden')){
            $('.wk-sub-menu').hide();
            $('.wk-nav-sub-menu').removeClass('arrow-rotate');
          reportDropdown.show();
          subClassAdd.addClass('arrow-rotate');
        }else{
            reportDropdown.hide();
            subClassAdd.removeClass('arrow-rotate');
        }
     
    });
    