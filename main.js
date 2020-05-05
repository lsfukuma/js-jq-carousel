//slider
$('i.fas.fa-chevron-right').click(function(){
    //trouver l'element  qui a la classe active
    var currentImg = $('img.active');
    //pallina attiva
    var currentDot = $('i.fas.fa-circle.active');
    //rimuovo la classe dell'img corrente
    currentImg.removeClass('active');
    //rimuovo la classe del pallino corrente
    currentDot.removeClass('active');
    //creare una variabile per l'img successiva per poter creare le condizioni
    var nextImg = currentImg.next();
    //pallina successiva
    var nextDot = currentDot.next();
    if (nextImg.length != 0) {
        //se esiste un img successivo (length diverso da 0) allora si aggiunge la classe active all img successiva
        nextImg.addClass('active');
        //aggiungo la classe active al pallino successivo
        nextDot.addClass('active');
    } else {
        $('img:first-child').addClass('active');
        $('img:last-child').removeClass('active');
    }
});

//freccia <
$('i.fas.fa-chevron-left').click(function(){
    //trouver l'element  qui a la classe active
    var currentImg = $('.active');
    //creare una variabile per l'img anteriore
    var prevImg = currentImg.prev()
    //pallina corrente
    var currentCircle = $('fa-circle.active');
    //pallina precedente
    var prevCircle = currentCircle.prev('.fa-circle')
    if (prevImg.length != 0) {
        currentImg.removeClass('active');
        prevImg.addClass('active');
        currentCircle.removeClass('active');
        prevCircle.addClass('active')
    } else {
        $('img:last-child').addClass('active');
        $('img:first-child').removeClass('active');
        $('fa-circle:last-child').addClass('active');
        $('fa-circle:first-child').removeClass('active');

    }
});
//bonus esecuto la funzione delle palline
//$('i.fas.fa-circle').click(palline);

//mettere le palline e fare il js
// var imgPosition = 0;
// function palline() {
//     //creare una variabile per il valore della posizione dell'img
//     var imgPosition = 0;
//     imgPosition = $('i.dots').index();
//     //nascondere tutte img
//     console.log(imgPosition);
//     $('img.wrapper').hide();
//     //far vedere l'img corrente
//     $('img.wrapper:nth-child('+ imgPosition +')').fadeIn();
// }

var imgPosition = $('img.active').index();
var currentImg = $('img.active');
var nextImg = currentImg.next();
var currentSlide = 1;
//creare un autoplay --> setInterval
var autoplay = setInterval(function(){
    
    currentSlide++
    if (imgPosition = 0) {
        imgPosition = 1;
    // }
}, 1000);
