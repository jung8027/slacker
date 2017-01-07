import {GET_USER} from './loginActions';

const INTIAL_STATE = {
  currentUser: "",
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case USER_LOGIN:
      let key = Object.keys(action)[1]
      console.log(state)
      return Object.assign({}, state, {[key]: action[key]});
      return Object.assign({}, state, )
    default: 
      return state
  }
}