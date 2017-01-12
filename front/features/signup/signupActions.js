import $ from 'jquery'

export const USER_SIGNUP = 'user_signup';

export const createOneUser = (user) => (
  {
    type: USER_SIGNUP,
    user
  }
)


export const createUserAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/api/user',
    dataType: 'json',
    type: 'POST'
  })
  .done(user => {
    dispatch(createOneUser(user));
  })
}
