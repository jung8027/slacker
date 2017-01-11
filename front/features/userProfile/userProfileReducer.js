
const INITIAL_STATE = {
  user: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
      case 'GET_PROFILE':
  	  const output = Object.assign({}, state)
      output.user = action.username;
      output.bio = action.bio;
      return output
    default: 
      return state
  }
} 