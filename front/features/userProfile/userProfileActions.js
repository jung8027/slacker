import $ from 'jquery';

const GET_USER = 'get_user';

export const getOneUser = (user) => (
  {
    type: GET_USER,
    user
  }
)

export const getUserAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/users/:id',
    dataType: 'json',
    type: 'GET'
  })
  .done(user => {
    dispatch(getUser(user));
  })
}
