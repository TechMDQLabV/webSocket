


const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('send-msg', ( payload, callback ) => {
      const id = 123456;
      callback( id );
      socket.broadcast.emit('send-msg', payload);
    });
};

module.exports = {
    socketController
};