
// export const GET_PROFILE = 'GET_PROFILE';

//  export const selectAction = selection => ({
//   type: GET_PROFILE, 
//   selection
// })
//  // .done(userProfile) => 
//  //    dispatch(userProfile);

////////////    ///from login

import $ from 'jquery'

export const USER_PROFILE = 'USER_PROFILE';

export const getOneUser = (user) => (
  {
    type: USER_PROFILE,
    user
  }
)


export const getUserAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/api/users/:username',
    dataType: 'json',
    type: 'GET'
  })
  .done(user => {
    dispatch(getOneUser(user));
  })
}
