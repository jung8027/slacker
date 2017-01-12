 
const INITIAL_STATE = {
  username: null,
  bio: null,
  showProfile: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
      case 'GET_PROFILE':
    	  const output = Object.assign({}, state)
        output.username = action.username;
        output.bio = action.bio;
        return output
      case 'SHOW_PROFILE':
        const prof = Object.assign({}, state)
        prof.showProfile = action.data
        return prof
    default: 
      return state
  }
}   