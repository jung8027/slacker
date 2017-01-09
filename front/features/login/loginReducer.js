import {USER_LOGIN} from './loginActions';

const INTIAL_STATE = {
  userName: null, userChatrooms: null, userTeams: null
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case 'AUTH_USER':
      // let key = Object.keys(action)[1]
      return Object.assign({}, state, {userName: action.userName}, {userTeams: action.userTeams}, {userChatrooms: action.userChatrooms});
    default: 
      return state
  }
}