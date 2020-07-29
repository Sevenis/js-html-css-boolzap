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
            var testo = "ok";
            var d = new Date();
            var messaggio = $('.template .message').clone();

            messaggio.find('.message-text').append(testo);
            messaggio.find('small').append(d.getHours()+':'+d.getMinutes());
            messaggio.addClass('received');
            $('.messages-box').append(messaggio);
}
