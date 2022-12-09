import io from 'socket.io-client';

let socket = null

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token
    socket = io('http://localhost:4000', {
        auth: {
            token: jwtToken,
        }
    });

    socket.on('connect', () => {
        console.log('succesfully connect to socket.io')
        console.log(socket.id)
    })
}