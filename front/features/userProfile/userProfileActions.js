 
export const GET_PROFILE = 'GET_PROFILE';
export const SHOW_PROFILE = 'SHOW_PROFILE';

export const selectAction = selection => ({
  type: GET_PROFILE, 
  selection
})

export const selectProfile = selection => ({
  type: SHOW_PROFILE, 
  selection
}) 

 // .done(userProfile) => 
 //    dispatch(userProfile);

/////////////////example from login

// import $ from 'jquery'

// export const GET_PROFILE = 'GET_PROFILE';

// export const getOneUser = (user) => (
//   {
//     type: GET_PROFILE,
//     user
//   }
// )

// export const getUserAsync = () => (dispatch) =>{
//   return $.ajax({
//     url: '/api/users/:username',
//     dataType: 'json',
//     type: 'GET'
//   })
//   .done(user => {
//     dispatch(getOneUser(user));
//   })
// }
