$(document).ready(function(){

$('#add-message').keydown(aggiungi);


});

//** FUNZIONI

function aggiungi() {
        if(event.which == 13 || event.keyCode == 13){
            var d = new Date();
            var testo = $('#add-message').val();
            var messaggio = $('.template .message').clone();

            messaggio.find('.message-text').append(testo);
            messaggio.find('small').append(d.getHours()+':'+d.getMinutes());
            messaggio.addClass('sent');
            $('.messages-box').append(messaggio);
            setTimeout(risposta, 1000);
        }
}

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

            var index = randomNumber(1,7);
            var testo = listaRisposte[index];
            console.log(testo);
            var d = new Date();
            var messaggio = $('.template .message').clone();

            messaggio.find('.message-text').append(testo);
            messaggio.find('small').append(d.getHours()+':'+d.getMinutes());
            messaggio.addClass('received');
            $('.messages-box').append(messaggio);
}

function randomNumber (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
