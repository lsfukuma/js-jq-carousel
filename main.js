//slider
$('i.fas.fa-chevron-right').click(function(){
    //trouver l'element  qui a la classe active
    var currentImg = $('.active');
    //creare una variabile per l'img successiva per poter creare le condizioni
    var nextImg = currentImg.next();
    var firstImg = $('img:first-child');
    if (nextImg.length != 0) {
        currentImg.removeClass('active');
        nextImg.addClass('active');
    } else {
        $('img:first-child').addClass('active');
    }
});


$('i.fas.fa-chevron-left').click(function(){
    //trouver l'element  qui a la classe active
    var currentImg = $('.active');
    //creare una variabile per l'img anteriore
    var prevImg = currentImg.prev()
    if (prevImg.length != 0) {
        currentImg.removeClass('active');
        prevImg.addClass('active');
    } else {
        $('img:last-child').addClass('active');

    }
});
