import {GET_USER} from './loginActions';

const INTIAL_STATE = {
  username: "",
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case USER_LOGIN:
      let key = Object.keys(action)[1]
      return Object.assign({}, state, {[key]: action[key]});
      return Object.assign({}, state, )
    default: 
      return state
  }
}