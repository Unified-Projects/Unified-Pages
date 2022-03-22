$(function(){
    $('#heightControl').css('height', $(window).height() - $('html').height() +'px');
});

$(window).resize(function() {
    $('#heightControl').css('height', $(window).height() - $('html').height() +'px');
});