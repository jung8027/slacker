
import io from 'socket.io-client';
export const socket = io.connect();

export default (store) => { 
  socket.on('connect', () =>{

  })
  socket.on("rooms-joined", rooms => {
    console.log(rooms)
  })
  

}