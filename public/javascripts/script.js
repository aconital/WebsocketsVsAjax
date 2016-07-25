

$( document ).ready(function() {
    var socket = io();
    var runs = 100;
    var socket_start_time;

    $('#ajax').click(function(e){

        var start_time= new Date();
        for(var k =0; k<runs; k++){
            (function(k){

                $.ajax({
                    method: 'get',
                    url:'/ajax',
                    success: function(data) {
                        var end_time = new Date();
                       console.log(end_time-start_time);
                    }
                });

            })(k);
        }

    });

    $('#socket').click(function(e){
        socket_start_time= new Date();
        for(var k =0; k<runs; k++){
            (function(k){
                socket.emit('send_data');
            })(k);
        }
    });

    socket.on('have_data', function ( resp) {
        var end_time = new Date();
        console.log(end_time-socket_start_time);
    });
});

