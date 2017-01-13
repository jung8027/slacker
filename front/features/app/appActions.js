export const AUTH_USER = 'auth_user';
export const ALL_TEAMS = 'all_Teams';
export const TEAMS = 'teams';

export const updateUserInfo = (user, userTeams, chatrooms) => (
  {
    type: AUTH_USER,
    user,
    userTeams,
    chatrooms,
  }
)

export const showAllTeams = (allTeams, user) => (
  {
    type: ALL_TEAMS,
    allTeams, 
    user
  }
)

export const updateTeams = allTeams => (
  {
    type: TEAMS,
    allTeams, 
  }
)


