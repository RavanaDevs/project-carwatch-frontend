import { io } from 'socket.io-client'

export const socket = io.connect('http://172.105.34.106:5000/', {
  path: '/socket.io',
})

socket.on('rpm', (msg) => {
    if (msg) {
      console.log(msg)
    }
  })

export const emmitMessage = (msg, payload) =>{
    socket.emit(msg, payload);
}

