import {GET_ALL_USERS} from './usersActions';

const initialState = {users: []};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ALL_USERS:
      console.log('Getting all users');
      break;
    default:
      return state
  }
}

export default reducer;

