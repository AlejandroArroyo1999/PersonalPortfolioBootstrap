

$(document).ready(function(){
    $('#welcome').css('display', 'flex');
    $('a').click(function() {
        let section = '#' + this.href.split('#')[1];
        console.log(section);
        $('section').fadeOut(500, function() {
            $(section).css("display", "flex").hide().fadeIn(1000);
        });
    });
});