import {USER_LOGIN, AUTH_USER, ALL_TEAMS, TEAMS} from './appActions';

const INITIAL_STATE = {
  user: null, chatrooms: null, userTeams: null, allTeams: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case AUTH_USER:
      const output = Object.assign({}, state)
      output.user = action.user;
      output.chatrooms = action.chatrooms;
      output.userTeams = action.userTeams;
      return output
    case ALL_TEAMS: 
      return Object.assign({}, state, {allTeams: action.allTeams, user: action.user})
    case TEAMS: 
      return Object.assign({}, state, {allTeams: action.allTeams})
    default: 
      return state
  }
}