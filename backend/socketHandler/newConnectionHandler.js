const serverStore = require('../serverStore')

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;

    serverStore.AddNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId,
    })
}


module.export = newConnectionHandler