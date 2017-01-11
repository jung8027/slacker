
const INITIAL_STATE = {
  channel:null, 
  users: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
      case 'UPDATE_USERS':
  	  const output = Object.assign({}, state)
      output.users = action.users;
      return output
    default: 
      return state
  }
}