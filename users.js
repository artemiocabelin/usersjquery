$(document).ready(function() {

    // alert('hello');
    $('#submit').click(function(){
        $('form').submit(function(e) {
            e.preventDefault;
            var user_first = $('#first').val();
            var user_last = $('#last').val();
            var user_email = $('#email').val();
            var user_contact = $('#contact').val();
            $('#user_table').append('<tr><td>'+user_first+'</td><td>'+user_last+'</td><td>'+user_email+'</td><td>'+user_contact+'</td></tr>');
            
            $('#first').val("");
            $('#last').val("");
            $('#email').val("");
            $('#contact').val("");
            return false;
        });
    });

});