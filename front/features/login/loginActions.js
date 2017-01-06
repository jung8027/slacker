import $ from 'jquery'

const USER_LOGIN = 'user_login';

export const getOneUser = (user) => (
  {
    type: USER_LOGIN,
    user
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
