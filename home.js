console.log("IM ALIVE")
$(document).ready(function () {
    $('#chatbot-form').submit(function (event) {
        console.log("SUBMITTED!")
        event.preventDefault();
        // Handle form submission  
        const message = $('#chatbot-input').val();
        $.ajax({
            type: 'POST',
            url: 'https://lab02backend.onrender.com/chatbot',
            data: {
                message: message
            },
            success: function(response) {
                console.log(response)
                let newMessage = $('<div>', {
                    class: 'message'
                }).text(response.text);
                let removeButton = $('<button>', {
                    class: 'remove-button'
                }).text('Remove');
                newMessage.append(removeButton);
                $('#chatbot-response').append(newMessage);
            }
        });
    });
});

$(document).on('click', '.remove-button', function() {
	$(this).parent().remove();
});