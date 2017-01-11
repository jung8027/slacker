import $ from 'jquery'

export const USER_LOGIN = 'user_login';
export const AUTH_USER = 'auth_user';

export const getOneUser = (user) => (
  {
    type: USER_LOGIN,
    user
  }
)

export const updateUserInfo = (user, userTeams, chatrooms) => (
  {
    type: AUTH_USER,
    user,
    userTeams,
    chatrooms,
  }
)


export const getUserAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/api/login',
    dataType: 'json',
    type: 'POST'
  })
  .done(user => {
    dispatch(getOneUser(user));
  })
}
