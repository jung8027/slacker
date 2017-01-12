 
export const UPDATE_USERS = 'UPDATE_USERS';

 export const selectAction = selection => ({
  type: UPDATE_USERS, 
  selection
})

export const getUserAsync = () => (dispatch) =>{
  return $.ajax({
    url: '/api/users/:username',
    dataType: 'json',
    type: 'GET'
  })
  .done(user => {
    dispatch(getOneUser(user));
  })
}
    
 