//slider
$('i.fas.fa-chevron-right').click(function(){
    //trouver l'element  qui a la classe active
    var currentImg = $('.active');
    //creare una variabile per l'img successiva
    var nextImg = currentImg.next()
    if (nextImg.length != 0) {
        currentImg.removeClass('active');
        nextImg.addClass('active');
    } else {
        currentImg = ('img.first-child')
        console.log('currentImg');
    }
});


$('i.fas.fa-chevron-left').click(function(){
    //trouver l'element  qui a la classe active
    var currentImg = $('.active');
    //creare una variabile per l'img successiva
    var prevImg = currentImg.prev()
    if (prevImg.length != 0) {
        currentImg.removeClass('active');
        prevImg.addClass('active');
    } else {
        currentImg = ('img.first-child')
    }
});
