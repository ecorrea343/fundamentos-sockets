        var socket = io();
        socket.on('connect',function(){

            console.log('Conectado con el Servidor');
        });
        // on es par aescuhcar sucesos
        socket.on('disconnect', function(){
            console.log('Perdimos la conexxion con el Servidor ');
        });

        //socket.emit  Enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Emmanuel',
            mensaje: 'Hola Mundo'
        },function(resp){
            console.log('Respuesta server: ',resp);
        });
        
        //Escuchar informacion

        socket.on('enviarMensaje', function (respuesta) {

            console.log('Servidor :', respuesta.mensaje);

        });