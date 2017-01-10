import {USER_LOGIN} from './loginActions';

const INITIAL_STATE = {
  userName: [], userId: null, userChatrooms: null, userTeams: null, messages:null, channelMembers:null,
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'AUTH_USER':
      console.log(action)
      const output = Object.assign({}, state)
      output.userName = action.userName;
      output.userId = action.userId;
      output.userTeam = action.userTeam;
      output.userChatrooms = action.userChatrooms;
      output.messages = action.messages;
      output.channelMembers = action.channelMembers;
      return output
    default: 
      return state
  }
}
