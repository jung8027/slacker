import {USER_LOGIN} from './loginActions';

const INTIAL_STATE = {
  userInfo: null,
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case 'AUTH_USER':
      let key = Object.keys(action)[1]
      return Object.assign({}, state, {[key]: action[key]});
    default: 
      return state
  }
}