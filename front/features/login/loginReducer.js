import {USER_LOGIN, AUTH_USER} from './loginActions';

const INITIAL_STATE = {
  user: [], chatrooms: null, userTeams: null,
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case AUTH_USER:
      const output = Object.assign({}, state)
      output.user = action.user;
      output.chatrooms = action.chatrooms;
      output.userTeams = action.userTeams;
      return output
    default: 
      return state
  }
}
