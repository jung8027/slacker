import {UPDATE_CHATBAR, UPDATE_MESSAGES} from './chatViewActions'
import {REMOVE_SOCKET_MESSAGES} from '../channel/channelActions'

const INTIAL_STATE = {
  input: "",
  socketMessages: []
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case UPDATE_CHATBAR:
      let key = Object.keys(action)[1]
      return Object.assign({}, state, {[key]: action[key]});
    case UPDATE_MESSAGES:
      return Object.assign({}, state, {socketMessages: [...state.socketMessages, action.msg]})
    case REMOVE_SOCKET_MESSAGES: 
      return Object.assign({}, state, {socketMessages: []})
    default: 
      return state
  }
}