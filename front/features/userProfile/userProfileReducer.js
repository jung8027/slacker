 
const INITIAL_STATE = {
  username: null,
  bio: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
      case 'GET_PROFILE':
  	  const output = Object.assign({}, state)
      output.username = action.username;
      output.bio = action.bio;
      return output
    default: 
      return state
  }
} 