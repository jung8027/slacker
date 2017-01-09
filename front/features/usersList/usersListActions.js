import $ from 'jquery';

const GET_ALL_USERS = 'get_all_users';

export const getAllUsers = (users) => (
  {
    type: GET_ALL_USERS,
    users
  }
)

export const getUsersAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/api/users',
    dataType: 'json',
    type: 'GET'
  })
  .done(users => {
    dispatch(getAllUsers(users));
  })
}
