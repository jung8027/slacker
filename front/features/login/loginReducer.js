import {USER_LOGIN} from './loginActions';

const INITIAL_STATE = {
  user: [], userChannels: null, userTeams: null,
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'AUTH_USER':
      const output = Object.assign({}, state)
      output.user = action.user;
      output.userChannels = action.userChannels;
      output.userTeams = action.userTeams;
      return output
    default: 
      return state
  }
}
