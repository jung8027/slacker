import {GET_USER} from './userActions';

const initialState = {user: ""};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_USER:
      console.log('Getting user');
      break;
    default:
      return state
  }
}

export default reducer;