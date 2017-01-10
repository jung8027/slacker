import {USER_LOGIN} from './loginActions';

const INTIAL_STATE = {
  userName: null, userChatrooms: null, userTeams: null, userId: null
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case 'AUTH_USER':
      return Object.assign({}, state, 
        {userName: action.userName}, 
        {userTeams: action.userTeams}, 
        {userChatrooms: action.userChatrooms}, 
        {userId: action.userId}
      );
    default: 
      return state
  }
}