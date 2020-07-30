$(document).ready(function(){

    //aggiunge messaggio premendo INVIO
    $('#add-message').keydown(function(event){
        if(event.which == 13 || event.keyCode == 13 ){
            aggiungiMessaggio();
        }
    });
    //aggiunge messaggio cliccando sull'icona "SEND"
    $('.fa-paper-plane').click(function(){
        aggiungiMessaggio();
    });

    //al click cambia chat
    $('.ct-box').click(function(){
        //trovo la posizione della chat cliccata
        var posizione = $(this).index();
        cambioChat(posizione);
    });
});


//** FUNZIONI **//

// funzione che estrapola il msg digitato e lo stampa a video
// nella sezione "MESSAGE-BOX" in un template clonato stilizzato
function aggiungiMessaggio() {
    var testo = $('#add-message').val();
    //check per inibire l'invio di msg vuoti
    if(testo != 0){
        //salvo il testo inviato e poi cancello l'input post invio
        // var testo = $('#add-message').val();
        $('#add-message').val('');

        //clono il template del messaggio
        var messaggio = $('.template .message').clone();

        // incollo i dati estrapolati nel template clonato
        messaggio.find('.message-text').append(testo);
        messaggio.find('small').append(oraEsatta());
        messaggio.addClass('sent');
        //incollo il template clonato messaggio riempito nel message box
        $('.messages-box.active').append(messaggio);
        //dopo 1 secondo attiva la funzione risposta()
        setTimeout(risposta, 1000);
    }
}

// funzione che restituisce a video nella sezione "MESSAGE-BOX"
// una risposta automatica gia' stilizzata
function risposta() {
    var listaRisposte = [
        "If anyone asks where I am, I’ve left the country.",
        "If we’re both going crazy, then we’ll go crazy together, right?",
        "The campaign took two weeks to plan. How was I supposed to know it was going to take ten hours?",
        "Maybe you thought you were helping, but you weren’t. You hurt me, do you understand? What you did sucks.",
        "We’re not even in the game; we’re on the bench.",
        "Hey, if we’re both going crazy, we’ll go crazy together, right?",
        "Do you want to figure it out?"
    ]

    var index = randomNumber(0,6);
    var testo = listaRisposte[index];

    // clono il template del messaggio
    var messaggio = $('.template .message').clone();

    //incollo tutti i dati estrapolati nel template clonato
    messaggio.find('.message-text').append(testo);
    messaggio.find('small').append(oraEsatta());
    messaggio.addClass('received');
    //incollo il template clonato messaggio riempito nel message box
    $('.messages-box.active').append(messaggio);
}

// funzione che cambia chat al click sull'elenco chat aperte
function cambioChat(indice){

    //a tutte le chat della classe chat-list rimuovo
    //la classe "active"
    $('.ct-box.active').removeClass('active');
    $('.messages-box').removeClass('active');
    //aggiungo la classe active alla chat che ha
    //l'indice salvato in posizione
    $('.ct-box').eq(indice).addClass('active');
    $('.messages-box').eq(indice).addClass('active');
}


// funzione che genera un numero random in un intervallo (incluso)
function randomNumber (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione che recupera l'ora dell'invio/ricezione del msg
function oraEsatta() {
    var d = new Date();
    var oraInvio = d.getHours();
    if (d.getMinutes() < 10) {
        var minutoInvio = '0' + d.getMinutes();
    } else {
        var minutoInvio = d.getMinutes();
    }
    return oraInvio + ':' + minutoInvio;
}
