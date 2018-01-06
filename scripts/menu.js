const menu = $('.global-menu');

$(window).on('scroll', function(evt){
    if(this.pageYOffset > 200){
        menu.removeClass('global-menu-top');
    }else{
        menu.addClass('global-menu-top');
    }
});