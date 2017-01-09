import store from '../store/store';
import io from 'socket.io-client';
export const socket = io.connect();
import {UPDATE_MESSAGES} from '../features/chatView/chatViewActions'


export default (store) => { 
  socket.on('connect', () =>{

  })
  socket.on("rooms-joined", rooms => {
    console.log(rooms)
  })

  socket.on("received-message", payload => {
    console.log(payload)
    const {msg, username} = payload 
    store.dispatch({
      type: UPDATE_MESSAGES,
      msg
    })
  })
  

}