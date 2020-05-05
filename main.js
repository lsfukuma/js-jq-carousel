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

//previous
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

//bonus: quando l'utente clicca su uno pallino, devo mostrare l'img
$('i.fas.fa-circle').click(function(){
    //lavorare con index e farsi che sia collegato all img con lo stesso index
    //img corrente
    var currentImg = $('img.active');
    //pallina attiva
    var currentDot = $('i.fas.fa-circle.active');
    //rimuovo la classe dell'img corrente
    currentImg.removeClass('active');
    //rimuovo la classe del pallino corrente
    currentDot.removeClass('active');
    //aggiungo la classe active al pallino su cui l'utente ha cliccato
    $(this).addClass('active');
    //vedere la posizione del pallino
    var dotPosition = $(this).index();
    //recupero l'img con la stessa posiwione del pallino
    var imgCorrispondente = $('img.wrapper').eq(imgCorrispondente);
});

var autoplay = setInterval(function(){
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

}, 1000);
