//slider
$('i.fas.fa-chevron-right').click(function(){
    //trouver l'element  qui a la classe active
    var currentImg = $('.active');
    //pallina attiva
    var currentDot = $('.active');
    //creare una variabile per l'img successiva per poter creare le condizioni
    var nextImg = currentImg.next();
    //pallina successiva
    var nextDot = currentDot.next();
    //var firstImg = $('img:first-child');
    if (nextImg.length != 0) {
        currentImg.removeClass('active');
        nextImg.addClass('active');
        currentDot.removeClass('active');
        nextDot.addClass('active')
    } else {
        $('img:first-child').addClass('active');
        $('img:last-child').removeClass('active');
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
        $('img:first-child').removeClass('active');

    }
});
//esecuto la funzione delle palline
$('i.fas.fa-circle').click(palline);

//mettere le palline e fare il js
function palline() {
    //creare una variabile per il valore della posizione dell'img
    var imgPosition = $('i.circle').index();
    console.log(imgPosition);
}
