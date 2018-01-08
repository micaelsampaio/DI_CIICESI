var news = $(".new");

$(window).on('scroll', function (evt) {
    var off = this.pageYOffset;
    news.each(function( index, element ) {
        if(off > element.offsetParent.offsetTop){
            element.addClass("animation-new");
        }
    });
});