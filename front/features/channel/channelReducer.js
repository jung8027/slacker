import {UPDATE_CHANNEL} from './channelActions'

const INITIAL_STATE = 
{users: null, channel: null, messages:null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
  	case 'CHANNEL_INFO':
  	  const output = Object.assign({}, state)
      output.channel = action.channel;
      output.users = action.users;
      output.messages = action.messages;
      return output
    default: 
    // 	return 
      return state
  }
}
