export const AUTH_USER = 'auth_user';

export const updateUserInfo = (user, userTeams, chatrooms) => (
  {
    type: AUTH_USER,
    user,
    userTeams,
    chatrooms,
  }
)


